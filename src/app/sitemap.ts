import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";

const BASE_URL = "https://www.boutiquedivingbali.com";

// Each route maps to the source file whose last edit drives its lastModified.
// We use git commit time (preserved across clones) rather than filesystem
// mtime (reset on every Vercel build) so AI crawlers get a real per-file
// freshness signal instead of a single "deploy moment" timestamp.
const routes: Array<{
  path: string;
  source: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}> = [
  { path: "/", source: "src/app/page.tsx", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", source: "src/app/about/page.tsx", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", source: "src/app/contact/page.tsx", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/dive-butler", source: "src/app/services/dive-butler/page.tsx", priority: 0.95, changeFrequency: "monthly" },
  { path: "/services/basic-diver", source: "src/app/services/basic-diver/page.tsx", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/scuba-explorer", source: "src/app/services/scuba-explorer/page.tsx", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/junior-owd", source: "src/app/services/junior-owd/page.tsx", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/open-water", source: "src/app/services/open-water/page.tsx", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/specialty", source: "src/app/services/specialty/page.tsx", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/scuba-skills-update", source: "src/app/services/scuba-skills-update/page.tsx", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/custom-fun-dives", source: "src/app/services/custom-fun-dives/page.tsx", priority: 0.85, changeFrequency: "monthly" },
  { path: "/privacy", source: "src/app/privacy/page.tsx", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", source: "src/app/terms/page.tsx", priority: 0.3, changeFrequency: "yearly" },
];

/**
 * Returns the ISO timestamp of the most recent git commit that touched the
 * given file. Falls back through three layers:
 *   1. git log → real per-file freshness (preferred — works on Vercel)
 *   2. fs.statSync → filesystem mtime (works locally, ~uniform on Vercel)
 *   3. new Date() → current time (last resort, never returns null)
 *
 * The result is always a valid Date object.
 */
function getLastModified(sourcePath: string): Date {
  const fullPath = path.join(process.cwd(), sourcePath);

  // Layer 1: git commit time (preserved across clones)
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", sourcePath], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) {
      const d = new Date(out);
      if (!isNaN(d.getTime())) return d;
    }
  } catch {
    // git not available, file has no history, or other git error — fall through.
  }

  // Layer 2: filesystem mtime
  try {
    return statSync(fullPath).mtime;
  } catch {
    // File doesn't exist (shouldn't happen for our hardcoded routes) — fall through.
  }

  // Layer 3: current time — sitemap is more useful with a fresh date than missing.
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: getLastModified(r.source),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

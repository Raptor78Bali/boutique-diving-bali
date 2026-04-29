import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import path from "node:path";

const BASE_URL = "https://www.boutiquedivingbali.com";

// Each route maps to the source file whose mtime drives its lastModified.
// When we edit a service page, only that page's lastmod changes — giving
// AI crawlers a real freshness signal instead of one shared deploy date.
const routes: Array<{ path: string; source: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }> = [
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

function getMtime(sourcePath: string): Date {
  try {
    const fullPath = path.join(process.cwd(), sourcePath);
    return statSync(fullPath).mtime;
  } catch {
    // Fallback if a source file is missing for any reason — better to ship
    // a sitemap with a sensible date than fail the build.
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: getMtime(r.source),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

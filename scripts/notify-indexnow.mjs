// scripts/notify-indexnow.mjs
// Pings IndexNow with all URLs from the live sitemap after a Vercel build.
// IndexNow notifies Bing, Yandex, Seznam, Naver, and Yep — Google does not
// participate in IndexNow but will discover changes via standard sitemap crawl.

const INDEXNOW_KEY = "f1b56256bfc2f9ea07f43b6407528f77";
const HOST = "www.boutiquedivingbali.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

async function main() {
  // Skip on Vercel preview / development builds — only ping on production.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    console.log(`[indexnow] Skipping submission — VERCEL_ENV=${process.env.VERCEL_ENV}`);
    return;
  }

  // Skip if running locally without explicit opt-in.
  if (!process.env.VERCEL_ENV && !process.env.INDEXNOW_FORCE) {
    console.log("[indexnow] Skipping submission — not on Vercel and INDEXNOW_FORCE not set.");
    return;
  }

  console.log(`[indexnow] Fetching sitemap from ${SITEMAP_URL}`);

  let sitemapXml;
  try {
    const res = await fetch(SITEMAP_URL, { cache: "no-store" });
    if (!res.ok) {
      console.error(`[indexnow] Failed to fetch sitemap: HTTP ${res.status}`);
      return;
    }
    sitemapXml = await res.text();
  } catch (err) {
    console.error(`[indexnow] Sitemap fetch error: ${err.message}`);
    return;
  }

  // Extract URLs from <loc>...</loc> tags. The sitemap is small (13 URLs)
  // so a regex is sufficient — no XML parser needed.
  const urlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    console.error("[indexnow] No URLs found in sitemap. Skipping.");
    return;
  }

  console.log(`[indexnow] Submitting ${urlList.length} URLs to IndexNow`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    // IndexNow returns:
    //   200 OK             — URLs submitted successfully
    //   202 Accepted       — URLs received, key validation pending
    //   400 Bad Request    — invalid format
    //   403 Forbidden      — key not valid (file not at keyLocation, or contents wrong)
    //   422 Unprocessable  — URLs don't belong to host, or schema mismatch
    //   429 Too Many       — rate limited
    if (res.ok || res.status === 202) {
      console.log(`[indexnow] ✓ Submitted ${urlList.length} URLs (HTTP ${res.status})`);
    } else {
      const body = await res.text().catch(() => "(no body)");
      console.error(`[indexnow] ✗ HTTP ${res.status}: ${body}`);
    }
  } catch (err) {
    console.error(`[indexnow] Submission error: ${err.message}`);
  }
}

main();

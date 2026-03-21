import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = "https://boutiquedivingbali.com";

 return [
 { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
 { url: `${baseUrl}/services/scuba-explorer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
 { url: `${baseUrl}/services/junior-owd`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
 { url: `${baseUrl}/services/open-water`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
 { url: `${baseUrl}/services/specialty`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
 { url: `${baseUrl}/services/scuba-skills-update`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
 { url: `${baseUrl}/services/custom-fun-dives`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
 { url: `${baseUrl}/services/dive-butler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
 { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
 { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
 ];
}
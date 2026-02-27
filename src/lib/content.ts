import contentData from "../../data/content.json";

export type SiteContent = typeof contentData;
export type ServicePage = SiteContent["pages"]["services"][number];

export function getContent(): SiteContent {
  return contentData;
}

export function getService(slug: string): ServicePage | undefined {
  return contentData.pages.services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return contentData.pages.services.map((s) => s.slug);
}

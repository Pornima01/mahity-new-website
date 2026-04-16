
declare const process: { env: { STRAPI_URL?: string } };
const STRAPI_URL = process.env.STRAPI_URL;

export const fetchTechPage = async (slug: string) => {
  const params = new URLSearchParams();
  params.append("filters[slug][$eq]", slug);
  params.append("populate[logo]", "true");
  params.append("populate[content][populate]", "*");

  const res = await fetch(`${STRAPI_URL}/api/tech-pages?${params.toString()}`);
  const data = await res.json();
  return data?.data?.[0] || null;
};
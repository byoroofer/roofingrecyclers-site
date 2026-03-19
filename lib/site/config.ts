export const siteConfig = {
  name: "Roofing Recyclers",
  description:
    "Roofing Recyclers is building asphalt shingle recycling infrastructure for contractors, municipalities, manufacturers, and capital partners.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  ogImage: "/og-image.svg",
};

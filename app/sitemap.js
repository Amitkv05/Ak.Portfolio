const siteUrl = "https://YOUR-PORTFOLIO-URL.vercel.app";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

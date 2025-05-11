module.exports = {
  siteUrl: "https://aleemtdev.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    additionalSitemaps: [
      "https://aleemtdev.vercel.app/sitemap.xml",
    ],
  },
};

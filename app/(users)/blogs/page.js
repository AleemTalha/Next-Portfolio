import BlogList from "@/components/blogs/BlogList";
import blogData from "@/data/blog.json";
import { siteConfig } from "@/app/metadata.config";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: `Developer Blog | ${siteConfig.author}`,
  description:
    "Join me on my journey through modern web development, where I share insights and experiences building full-stack applications.",
  openGraph: {
    title: `Web Development Blog - ${siteConfig.author}`,
    description:
      "Insights and experiences from a passionate full-stack developer.",
    url: `${siteConfig.siteUrl}/blogs`,
    type: "website",
    images: [siteConfig.defaultImage],
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: `Dev Blog | ${siteConfig.author}`,
    description: "Full-stack development insights and experiences.",
    images: [siteConfig.defaultImage],
    creator: siteConfig.twitterHandle,
  },
  keywords: [
    "web development",
    "full stack",
    "javascript",
    "react",
    "node.js",
    "aleem t.dev",
    "portfolio",
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <ScrollToTop />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-[var(--background)]">
        <section className="relative h-[60vh] w-[100vw] lg:w-[95vw] mx-auto rounded-2xl bg-gradient-to-br from-[var(--highlight)] to-[var(--button-bg)] flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exploring Web Development
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Join me on my journey through modern web development, where I
              share insights, experiences, and lessons learned building
              real-world applications.
            </p>
          </div>
        </section>
      </div>

      <BlogList initialBlogs={blogData} />
    </div>
  );
}

import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { siteConfig } from "@/app/metadata.config";

export const metadata = {
  title: "Projects",
  description:
    "Explore my projects showcasing modern web development skills including React, Next.js, MongoDB, and full-stack applications.",
  twitter: {
    card: "summary_large_image",
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-[#f3f6fa]">
      <ProjectHero />
    </div>
  );
};

export default Page;

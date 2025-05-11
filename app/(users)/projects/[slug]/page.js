import React from "react";
import Image from "next/image";
import { siteConfig } from "@/app/metadata.config";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects/${slug}`);
  const data = await res.json();

  if (!data.success) {
    return {
      title: "Project Not Found | Talha Aleem",
      description:
        "The requested project could not be found on Talha Aleem's portfolio.",
      keywords: [
        "Project Not Found",
        "Talha Aleem",
        "Aleem T.Dev",
        "Missing Project",
      ],
    };
  }

  const project = data.project;
  const projectTitle = project.title;
  const author = siteConfig.author;

  return {
    title: `${projectTitle} | ${author} Dev Projects`,
    description:
      project.description ||
      `Explore the project "${projectTitle}" by ${author}, a skilled full stack developer.`,
    keywords: [
      projectTitle,
      `${projectTitle} by ${author}`,
      `${author} ${projectTitle}`,
      `${projectTitle} Project`,
      `${author} Project`,
      `Talha Aleem Dev`,
      `Talha Dev Aleem`,
      `Talha A.`,
      `Aleem T.Dev`,
      `T Aleem Developer`,
      `Aleem Developer`,
      `Talha Aleem Developer`,
      `Talha Aleem Web Developer`,
      `Aleem Projects`,
      `Taleem Developer`,
      `Taleem Dev`,
      `T.Aleem`,
      `Talha.A`,
      `T Aleem Dev`,
      `Talha A Projects`,
      `Aleem Projects`,
      `Web App by Talha`,
      `Talha Aleem Site`,
      `Aleem Site`,
      `TDev`,
      `AleemT`,
      `Talha Portfolio`,
      `Full Stack Dev Aleem`,
      `Aleem JS Developer`,
      `MERN Developer Talha`,
      `ReactJS Dev Talha`,
      `NextJS Developer Aleem`,
      `NodeJS Dev Talha`,
      `Talha Mongo Dev`,
      `Modern Dev Projects`,
      `Talha A Dev Portfolio`,
      `Aleem Developer Showcase`,
      `Talha Works`,
      `Portfolio Talha Aleem`,
      `Talha Dev Site`,
      `Talha Aleem Showcase`,
      `Dev Aleem`,
      `Aleem T.`,
      `T Dev Aleem`,
      `AleemTDev`,
      `Talha Full Stack`,
      `Fullstack Dev Aleem`,
      `Frontend Backend Dev Talha`,
      `Aleem Code`,
      `Aleem Web Creations`,
      `Web Projects by Aleem`,
      `Talha Programming`,
      `Project Showcase Talha`,
    ],
    authors: [{ name: author, url: siteConfig.siteUrl }],
    creator: author,
    publisher: author,
    openGraph: {
      title: `${projectTitle} | ${author} Project`,
      description: project.description,
      url: `${siteConfig.siteUrl}/projects/${slug}`,
      siteName: `${author} Portfolio`,
      images: [
        {
          url: project.image || siteConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectTitle} | ${author}`,
      description: project.description,
      site: siteConfig.twitterHandle || "",
      creator: siteConfig.twitterHandle || "",
      images: [project.image || siteConfig.defaultImage],
    },
    icons: {
      icon: "/icon.png",
    },
  };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL || "localhost:3000"}/api/projects/${slug}`);
  const data = await res.json();

  if (!data.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <h1 className="text-2xl font-bold text-[var(--text-color)]">
          Project Not Found
        </h1>
      </div>
    );
  }

  const project = data.project;

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10">
      <div className="max-w-5xl mx-auto bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-lg">
        {project.image && (
          <div className="w-full h-[400px] relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-8 text-[var(--text-color)] space-y-6">
          <h1 className="text-4xl font-bold text-[var(--bold-text-color)]">
            {project.title}
          </h1>

          {project.description && (
            <div>
              <h2 className="text-xl font-semibold text-[var(--bold-text-color)] mb-1">
                Description
              </h2>
              <p className="leading-relaxed">{project.description}</p>
            </div>
          )}

          {project.details && (
            <div>
              <h2 className="text-xl font-semibold text-[var(--bold-text-color)] mb-1">
                Details
              </h2>
              <p className="leading-relaxed">{project.details}</p>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold text-[var(--bold-text-color)] mb-1">
              Technologies Used
            </h2>
            <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {project.tags.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-[var(--bold-text-color)] mb-1">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full border border-[var(--text-color)] text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition"
              >
                Visit Live Project
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-5 py-2 rounded transition"
              >
                View Repository
              </a>
            )}
            {project.status && (
              <span className="inline-block bg-green-600 text-white px-4 py-2 rounded">
                {project.status === "completed"
                  ? "✅ Completed"
                  : "🚧 In Progress"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProjectPage;

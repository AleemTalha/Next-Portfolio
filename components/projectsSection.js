"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Commet } from "react-loading-indicators";
import Loading from "./Loading";

const ProjectsSection = () => {
  const [data, setData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000";
        console.log("Base URL:", baseUrl);
        const response = await fetch(`${baseUrl}/api/projects`);
        const result = await response.json();
        setData(result.projects || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="p-6 w-screen mx-auto overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-color)",
      }}
    >
      <div className="text-center mb-10">
        <h1
          className="text-4xl font-bold mb-3"
          style={{ color: "var(--bold-text-color)" }}
        >
          Projects
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Explore a collection of real-world projects I’ve built using modern
          technologies. Each one reflects my skills in full-stack development,
          creativity, and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project) => (
          <div
            key={project._id}
            className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
              borderWidth: "1px",
              height: "400px",
            }}
          >
            <div className="relative w-full" style={{ height: "55%" }}>
              {!imageLoaded[project._id] && (
                <div
                  className="flex items-center justify-center h-full"
                  style={{ backgroundColor: "var(--background)" }}
                >
                  <Commet
                    color="var(--text-color)"
                    textColor="var(--text-color)"
                  />
                </div>
              )}
              <Image
                src={project.image || "/images/default.png"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                onLoad={() => handleImageLoad(project._id)}
                className={`transition-opacity duration-500 ${
                  imageLoaded[project._id] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-[45%]">
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--text-color)" }}
              >
                {project.title.length > 30
                  ? `${project.title.slice(0, 30)}...`
                  : project.title}
              </h2>

              <div className="flex gap-2 justify-between mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition"
                  style={{
                    backgroundColor: "var(--highlight)",
                    color: "white",
                    width: "48%",
                  }}
                >
                  View Details
                </Link>

                {project.link || project.repository ? (
                  <a
                    href={project.link || project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center px-4 py-2 rounded-md text-sm hover:bg-opacity-90 transition"
                    style={{
                      backgroundColor: "var(--button-bg)",
                      color: "var(--button-text)",
                      width: "48%",
                    }}
                  >
                    Visit Project
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 rounded-md text-sm cursor-not-allowed text-center"
                    style={{
                      backgroundColor: "var(--button-bg)",
                      color: "var(--text-color)",
                      width: "48%",
                    }}
                  >
                    No Link Available
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

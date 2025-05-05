"use client";

import { useRouter } from "next/navigation";

export default function ScrollButton() {
  const router = useRouter();

  const handleScroll = () => {
    window.scrollBy({ top: 800, behavior: "smooth" });
  };

  const handleViewSkills = () => {
    router.push("/skills");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <button
        onClick={handleScroll}
        className="px-4 sm:px-6 py-2 sm:py-1 text-sm sm:text-base lg:text-lg bg-[var(--button-bg)] text-[var(--button-text)] rounded-lg transition-all duration-300 hover:bg-[var(--button-text)] hover:text-[var(--button-bg)] hover:opacity-90"
      >
        Explore More
      </button>
      <button
        onClick={handleViewSkills}
        className="px-4 sm:px-6 py-2 sm:py-1 text-sm sm:text-base lg:text-lg bg-transparent text-[var(--foreground)] rounded-lg border border-[var(--foreground)] transition-all duration-300 hover:bg-[var(--button-bg)] hover:text-[var(--button-text)] hover:opacity-90"
      >
        View Skills
      </button>
    </div>
  );
}

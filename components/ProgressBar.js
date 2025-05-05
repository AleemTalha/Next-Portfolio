"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Customize NProgress styles
NProgress.configure({ showSpinner: false });
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    #nprogress .bar {
      background: red !important;
      height: 3px !important;
    }
    #nprogress .peg {
      box-shadow: 0 0 5px red, 0 0 2px red !important;
    }
    #nprogress .spinner-icon {
      border-top-color: red !important;
      border-left-color: red !important;
    }
  `;
  document.head.appendChild(style);
}

const ProgressBar = () => {
  const [previousPath, setPreviousPath] = useState(null); // Track the previous path
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    if (previousPath !== null && previousPath !== pathname) {
      NProgress.start(); // Start progress when the path changes
      const timer = setTimeout(() => NProgress.done(), 500); // Simulate loading completion

      return () => clearTimeout(timer); // Cleanup the timer
    }
    setPreviousPath(pathname); // Update the previous path
  }, [pathname, previousPath]);

  return null; // This component doesn't render anything
};

export default ProgressBar;

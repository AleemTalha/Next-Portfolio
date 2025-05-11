"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaHome,
  FaProjectDiagram,
  FaSignOutAlt,
  FaCode,
  FaBars,
  FaBlog,
  FaEnvelope,
  FaTimes,
  FaSignInAlt,
  FaMoon,
  FaSun,
  FaTachometerAlt,
  FaPlusSquare,
} from "react-icons/fa";
import { gsap } from "gsap";
import { useTheme } from "@/context/ThemeContext";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const iconRefs = useRef([]);
  const textRefs = useRef([]);
  const titleRef = useRef(null);
  const titleIconRef = useRef(null);
  const { darkMode, setDarkMode } = useTheme();

  const menuItems = [
  { label: "Home", path: "/", icon: <FaHome /> },
  { label: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
  { label: "Add Project", path: "/admin/add-project", icon: <FaPlusSquare /> },
  { label: "Add Skill", path: "/admin/add-skill", icon: <FaCode /> },
  { label: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { label: "Skills", path: "/skills", icon: <FaCode /> },
  { label: "Blogs", path: "/blogs", icon: <FaBlog /> },
  { label: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (isSidebarOpen) {
      tl.to(sidebarRef.current, { width: "16rem", duration: 0.4 })
        .to(
          titleIconRef.current,
          { opacity: 0, display: "none", duration: 0.2 },
          "<"
        )
        .to(
          titleRef.current,
          { opacity: 1, display: "block", duration: 0.3 },
          "<"
        )
        .to(
          iconRefs.current,
          { opacity: 1, duration: 0.3, stagger: 0.05 },
          "<0.1"
        )
        .to(
          textRefs.current,
          { opacity: 1, display: "block", duration: 0.3, stagger: 0.05 },
          "<0.2"
        )
        .to(
          overlayRef.current,
          { opacity: 1, pointerEvents: "auto", duration: 0.3 },
          "<"
        );
    } else {
      tl.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      })
        .to(
          textRefs.current,
          { opacity: 0, display: "none", duration: 0.2, stagger: 0.05 },
          "<"
        )
        .to(
          iconRefs.current,
          {
            opacity: isMobile ? 0 : 1,
            display: isMobile ? "none" : "block",
            duration: 0.2,
            stagger: 0.05,
          },
          "<"
        )
        .to(
          titleRef.current,
          { opacity: 0, display: "none", duration: 0.2 },
          "<"
        )
        .to(
          titleIconRef.current,
          { opacity: 1, display: "block", duration: 0.3 },
          "<"
        )
        .to(
          sidebarRef.current,
          { width: isMobile ? "0rem" : "4rem", duration: 0.4 },
          "<"
        );
    }
  }, [isSidebarOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed top-0 inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        onClick={closeSidebar}
        style={{ opacity: 0, pointerEvents: "none" }}
      />

      <aside
        ref={sidebarRef}
        className="fixed min-h-[100vh] max-h-[100vh] overflow-y-auto top-0 left-0 bg-[var(--navbar-bg)] text-[var(--text-color)] flex flex-col z-40 overflow-hidden transition-all ease-in-out md:static shadow-lg"
        style={{ width: "4rem", zIndex: 10 }}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span ref={titleIconRef} style={{ opacity: 1 }} className="text-xl">
              <FaSignInAlt />
            </span>
            <span
              ref={titleRef}
              style={{ opacity: 0, display: "none" }}
              className="transition-opacity duration-300 text-xl"
            >
              Admin Panel
            </span>
          </div>
          <button className="text-[var(--text-color)]" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={item.label} className="overflow-hidden">
                <Link
                  href={item.path}
                  className={`w-full flex items-center gap-4 text-left p-2 rounded hover:bg-[var(--background)] transition-colors duration-200 ${
                    isSidebarOpen ? "bg-[var(--background)]" : ""
                  }`}
                >
                  <span
                    ref={(el) => (iconRefs.current[index] = el)}
                    className="text-xl text-[var(--text-color)]"
                    style={{ opacity: 1 }}
                  >
                    {item.icon}
                  </span>
                  <span
                    ref={(el) => (textRefs.current[index] = el)}
                    style={{ opacity: 0, display: "none" }}
                    className="text-[var(--text-color)]"
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700 flex flex-col gap-4">
          <button
            className="w-full bg-[var(--card-bg)] text-[var(--text-color)] py-2 rounded flex items-center justify-center gap-2"
            onClick={() => console.log("Logged out")}
          >
            {isSidebarOpen ? <>Login</> : <FaSignOutAlt size={20} />}
          </button>
          <button
            className="w-full bg-[var(--card-bg)] text-[var(--text-color)] py-2 rounded flex items-center justify-center gap-2"
            onClick={toggleTheme}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            {isSidebarOpen && (darkMode ? "Light Mode" : "Dark Mode")}
          </button>
        </div>
      </aside>

      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          className="bg-gray-800 text-white p-3 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;

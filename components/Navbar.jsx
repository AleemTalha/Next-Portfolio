"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaLayerGroup,
  FaBook,
  FaFileAlt,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus,
  FaSun,
  FaMoon,
  FaChevronDown,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import ProgressBar from "./ProgressBar";

let cachedSession = null; // Global variable to cache session data

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const sidebarRef = useRef(null);
  const navRef = useRef(null);
  const skillsDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);
  const [session, setSession] = useState(cachedSession);
  const [status, setStatus] = useState(cachedSession ? "authenticated" : "loading");

  const { darkMode, setDarkMode } = useTheme();

  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("Page_theme", newTheme);
  };

  const handleClickOutside = (event) => {
    if (
      skillsDropdownRef.current &&
      !skillsDropdownRef.current.contains(event.target)
    ) {
      setShowSkillsDropdown(false);
    }
    if (
      accountDropdownRef.current &&
      !accountDropdownRef.current.contains(event.target)
    ) {
      setShowAccountDropdown(false);
    }
    if (navRef.current && !navRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const fetchSession = async () => {
      if (!cachedSession) {
        const sessionData = await getSession();
        cachedSession = sessionData; // Cache the session globally
        setSession(sessionData);
        setStatus(sessionData ? "authenticated" : "unauthenticated");
      } else {
        setSession(cachedSession);
        setStatus(cachedSession ? "authenticated" : "unauthenticated");
      }
    };

    fetchSession();
  }, []); // Fetch session only once on component mount

  const handleNavLinkClick = () => {
    setSidebarOpen(false);
  };

  const userContent = useMemo(() => {
    if (session && session.user) {
      return (
        <div className="relative w-10 h-10 rounded-full border-2 border-[var(--border-color)] p-1" ref={accountDropdownRef}>
          <button
            onClick={() => setShowAccountDropdown(!showAccountDropdown)}
            className="w-full h-full"
          >
            <img
              src={session.user.image}
              alt="user"
              className="w-full h-full rounded-full"
            />
          </button>
          {showAccountDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-[var(--card-bg)] text-[var(--text-color)] rounded shadow-md z-50">
              <div className="p-4 border-b border-[var(--border-color)]">
                <p className="font-bold">{session.user.name}</p>
                <p className="text-sm text-gray-500">{session.user.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 text-left transition"
              >
                <FaSignOutAlt className="mr-2 inline" size={16} /> Sign out
              </button>
            </div>
          )}
        </div>
      );
    }
    return null; // Show nothing if no user data is available
  }, [session, showAccountDropdown]);

  const navLinks = [
    { name: "Home", icon: <FaHome size={18} />, href: "/" },
    { name: "Projects", icon: <FaBook size={18} />, href: "/projects" },
    { name: "Skills", icon: <FaLayerGroup size={18} />, href: "/skills" },
    { name: "Blogs", icon: <FaFileAlt size={18} />, href: "/blogs" },
    { name: "Contact", icon: <FaEnvelope size={18} />, href: "/contact" },
  ];

  const skillsDropdown = [
    {
      title: "Frontend Development",
      description: "React, Next.js, Tailwind CSS, and more.",
      href: "/skills/frontend",
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, MongoDB, and more.",
      href: "/skills/backend",
    },
    {
      title: "DevOps",
      description: "Docker, Kubernetes, CI/CD pipelines.",
      href: "/skills/devops",
    },
  ];

  const CustomButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md 
        ${darkMode ? "button-dark" : "button-light"} transition`}
    >
      {children}
    </button>
  );

  return (
    <>
      <ProgressBar />
      <nav className="sticky top-0 z-50 bg-[var(--navbar-bg)] text-[var(--text-color)] p-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[1.5rem] font-bold flex items-center gap-2"
            style={{ color: "var(--text-color)" }}
          >
            < Image width="50" height='50' src="/logo.png" alt="logo" />
            Leem T.Dev
          </Link>

          <div className="hidden lg:flex justify-center items-center gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 hover:text-[var(--highlight)] transition text-base md:text-lg"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}

            {/* <div className="relative" ref={skillsDropdownRef}>
              <button
                onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}
                className="flex items-center gap-2 hover:text-[var(--highlight)] transition text-base md:text-lg"
              >
                <FaLayerGroup size={18} />
                <span className="font-medium">Skills</span>
                <FaChevronDown size={14} />
              </button>
              {showSkillsDropdown && (
                <div className="absolute top-full mt-2 w-[500px] bg-[var(--card-bg)] text-[var(--text-color)] rounded-lg shadow-lg z-50 grid grid-cols-2 gap-6 p-6">
                  <div className="w-full h-72 bg-gray-200 rounded-md overflow-hidden relative group">
                    <img
                      src="/images/laptop1.png"
                      alt="Laptop"
                      className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50"></div>
                  </div>
                  <ul className="flex-1 text-left">
                    {skillsDropdown.map((skill) => (
                      <li key={skill.title} className="mb-3">
                        <Link
                          href={skill.href}
                          className="block p-3 rounded-md hover:text-[var(--bold-text-color)] transition"
                        >
                          <div className="text-sm font-medium">
                            {skill.title}
                          </div>
                          <p className="text-xs text-gray-500">
                            {skill.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 hover:text-[var(--highlight)] transition text-base md:text-lg"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {userContent}

            <button
              onClick={toggleTheme}
              className="rounded-lg border-2 border-[var(--border-color)] p-2"
            >
              {darkMode ? (
                <FaSun size={20} className="text-yellow-400" />
              ) : (
                <FaMoon size={20} className="text-black" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden" ref={navRef}>
            <CustomButton onClick={() => setSidebarOpen(true)}>
              <FaBars size={20} />
            </CustomButton>
          </div>
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-[var(--navbar-bg)] text-[var(--text-color)] p-6 z-50 shadow-lg"
            >
              <div className="flex justify-end">
                <CustomButton onClick={() => setSidebarOpen(false)}>
                  <FaTimes />
                </CustomButton>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavLinkClick}
                    className="flex items-center gap-2 hover:text-[var(--highlight)] transition"
                  >
                    {link.icon}
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}

                {/* Add Skills link for smaller screens */}
                <Link
                  href="/skills"
                  onClick={handleNavLinkClick}
                  className="flex items-center gap-2 hover:text-[var(--highlight)] transition text-base"
                >
                  <FaLayerGroup size={18} />
                  <span className="text-sm">Skills</span>
                </Link>

                {status === "loading" ? null : (
                  <>
                    {!session && (
                      <>
                        <Link href="/login" onClick={handleNavLinkClick}>
                          <CustomButton>
                            <FaSignInAlt className="mr-2 inline" size={16} />{" "}
                            Login
                          </CustomButton>
                        </Link>
                        <Link href="/signup" onClick={handleNavLinkClick}>
                          <CustomButton>
                            <FaUserPlus className="mr-2 inline" size={16} />{" "}
                            Signup
                          </CustomButton>
                        </Link>
                      </>
                    )}

                    {session && (
                      <>
                        <div className="flex items-center gap-2">
                          <img
                            src={session.user.image}
                            alt="user"
                            className="w-6 h-6 rounded-full"
                          />
                          {session.user.name}
                        </div>
                        <CustomButton onClick={() => signOut()}>
                          <FaSignOutAlt className="mr-2 inline" size={16} />{" "}
                          Sign out
                        </CustomButton>
                      </>
                    )}
                  </>
                )}

                <button
                  onClick={toggleTheme}
                  className="rounded-full border-2 border-[var(--border-color)] p-2 flex items-center justify-center"
                >
                  {darkMode ? (
                    <FaSun size={20} className="text-yellow-400" />
                  ) : (
                    <FaMoon size={20} className="text-black" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

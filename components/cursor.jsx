"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaCode } from "react-icons/fa";  // React icon example

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.innerWidth > 768);
    };

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check if element is hoverable (including React icons & Next.js Links)
    const hoverables = ["button", "a", "svg", "i", "use", "path"];

    const isHoverable = (el) => {
      if (!el) return false;
      return (
        hoverables.includes(el.tagName.toLowerCase()) ||
        el.closest("[data-cursor='hover'], a, button, svg")
      );
    };

    const handleMouseOver = (e) => {
      if (isHoverable(e.target)) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (isHoverable(e.target)) {
        setHovering(false);
      }
    };

    window.addEventListener("resize", updateVisibility);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    updateVisibility();
    return () => {
      window.removeEventListener("resize", updateVisibility);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  const dotStyle = {
    position: "fixed",
    top: position.y - 1.5,
    left: position.x - 1.5,
    width: "3px",
    height: "3px",
    backgroundColor: darkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
  };

  const ringStyle = {
    position: "fixed",
    top: hovering ? position.y - 15 : position.y - 13,
    left: hovering ? position.x - 15 : position.x - 13,
    width: hovering ? "33px" : "26px",
    height: hovering ? "33px" : "26px",
    backgroundColor: hovering
      ? darkMode
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.6)"
      : darkMode
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)",
    border: hovering ? "1px solid var(--background)" : `1px solid ${darkMode ? "#000" : "#fff"}`,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9998,
    transition: "width 200ms ease, height 200ms ease, background-color 150ms ease",
  };

  return (
    <>
      {!hovering && <div style={dotStyle} />}
      <div style={ringStyle} />
    </>
  );
};

export default Cursor;

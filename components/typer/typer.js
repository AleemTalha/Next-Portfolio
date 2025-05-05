"use client";
import React, { useState, useEffect, useMemo } from "react";
import { FaCode } from "react-icons/fa";

const TypingEffect = () => {
  const texts = useMemo(
    () => [
      "Backend Developer",
      "Node.js & MongoDB Expert",
      "API Integration Specialist",
      "Secure Web Architect",
      "Clean Code Advocate",
      "React & Next.js Developer",
      "Modern UI/UX Builder",
      "Scalable App Maker",
      "MERN Stack Pro",
      "Tech-Driven Solutions",
    ],
    []
  );

  const [textIndex, setTextIndex] = useState(() =>
    Math.floor(Math.random() * texts.length)
  );
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const str = texts[textIndex];
      if (charIndex < str.length && !isRemoving) {
        setCurrentText((prevText) => prevText + str[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else if (charIndex === str.length && !isRemoving) {
        setTimeout(() => {
          setIsRemoving(true);
        }, 3000);
      }
    };

    const removeText = () => {
      const str = texts[textIndex];
      if (charIndex > 0 && isRemoving) {
        setCurrentText(str.slice(0, charIndex - 1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else if (charIndex === 0 && isRemoving) {
        setIsRemoving(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(() => {
          typeText();
        }, 500);
      }
    };

    if (isRemoving) {
      const removingInterval = setTimeout(removeText, 100);
      return () => clearTimeout(removingInterval);
    } else {
      const typingInterval = setTimeout(typeText, 200);
      return () => clearTimeout(typingInterval);
    }
  }, [charIndex, textIndex, isRemoving, texts]);

  return (
    <div className="typed-text">
      <FaCode className="cursor-icon" />&nbsp;
      {currentText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .typed-text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem; /* Default font size */
          color: var(--bold-text-color);
          text-align: center;
          width: 100%;
        }
        .cursor-icon {
          margin-right: 0.5rem;
          animation: blink 1s infinite;
          color: var(--bold-text-color);
        }
        .blinking-cursor {
          margin-left: 0.2rem;
          animation: blink 1s infinite;
          color: var(--highlight-color);
        }
        @media (max-width: 640px) {
          .typed-text {
            font-size: 1.2rem; /* Smaller font size for small screens */
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .typed-text {
            font-size: 1.8rem; /* Medium font size for tablets */
          }
        }
        @media (min-width: 1025px) and (max-width: 1280px) {
          .typed-text {
            font-size: 2.2rem; /* Slightly larger font size for small desktops */
          }
        }
        @media (min-width: 1281px) {
          .typed-text {
            font-size: 2.5rem; /* Larger font size for large desktops */
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TypingEffect;

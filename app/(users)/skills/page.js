"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import { SiTailwindcss, SiBootstrap, SiRedux, SiExpress, SiPostman, SiTwilio, SiMongodb, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Page = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: "expo.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
        },
      }
    );

    const skillItems = skillsRef.current.children;
    gsap.fromTo(
      skillItems,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Talha Aleem | Developer Skills</title>
        <meta name="description" content="Explore Talha Aleem's tech stack – a passionate full-stack developer with hands-on experience in modern web development technologies." />
        <meta name="keywords" content="Talha Aleem, Talha Aleeem, Talha Alim, Talha Aleam, Aleem Talha, Talhaa Aleem, full stack developer, React developer, Node.js expert, MongoDB, Next.js, Express.js, JavaScript, Tailwind, GSAP animations" />
        <meta name="author" content="Talha Aleem" />
      </Head>

      <div className="bg-[var(--background)]">
        <div
          ref={heroRef}
          className="h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-[var(--highlight)] to-[var(--button-bg)] px-4 text-[var(--button-text)] relative overflow-hidden"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore My Development Skills
          </h1>
          <p className="max-w-2xl text-[16px] md:text-lg leading-relaxed">
            I am Talha Aleem, a passionate full-stack developer with experience in building modern, scalable, and interactive web applications. I craft elegant UI, write powerful backend logic, and deliver real-world solutions with code.
          </p>
        </div>

        <section className="py-16 px-6 bg-[var(--background)]">
          <h2 ref={titleRef} className="text-[20px] font-bold text-center mb-10 text-[var(--bold-text-color)] uppercase tracking-wide">
            My Tech Stack
          </h2>

          <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "HTML", icon: <FaHtml5 className="text-4xl text-[#E34F26] mx-auto" /> },
              { name: "CSS", icon: <FaCss3Alt className="text-4xl text-[#1572B6] mx-auto" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-[#38BDF8] mx-auto" /> },
              { name: "Bootstrap", icon: <SiBootstrap className="text-4xl text-[#563D7C] mx-auto" /> },
              { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-[#F7DF1E] mx-auto" /> },
              { name: "React.js", icon: <FaReact className="text-4xl text-[#61DBFB] mx-auto" /> },
              { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-[var(--text-color)] mx-auto" /> },
              { name: "Redux", icon: <SiRedux className="text-4xl text-[#764ABC] mx-auto" /> },
              { name: "Node.js", icon: <FaNodeJs className="text-4xl text-[#68A063] mx-auto" /> },
              { name: "Express.js", icon: <SiExpress className="text-4xl text-[var(--text-color)] mx-auto" /> },
              { name: "MongoDB", icon: <SiMongodb className="text-4xl text-[#4DB33D] mx-auto" /> },
              { name: "Postman", icon: <SiPostman className="text-4xl text-[#FF6C37] mx-auto" /> },
              { name: "Twilio", icon: <SiTwilio className="text-4xl text-[#F22F46] mx-auto" /> },
              { name: "C++", icon: <span className="text-2xl font-bold text-[#00599C] mx-auto block">C++</span> },
              { name: "C#", icon: <span className="text-2xl font-bold text-[#239120] mx-auto block">C#</span> },
              { name: "Python", icon: <FaPython className="text-4xl text-[#306998] mx-auto" /> },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] p-6 rounded-2xl shadow-md text-[var(--text-color)] border border-[var(--border-color)] font-semibold transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <div className="mb-4">{skill.icon}</div>
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

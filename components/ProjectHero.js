'use client';

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ProjectsSection from '@/components/projectsSection';

const ProjectIntro = () => {
  const flapRef = useRef(null);
  const scrollTargetRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!revealed && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      gsap.set(flapRef.current, {
        transformOrigin: 'left center',
        rotationY: 0,
        perspective: 1200,
        opacity: 0,
        scale: 0.9,
      });

      const tl = gsap.timeline();
      tl.to(flapRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      })
        .fromTo(
          '.intro-text',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.2 },
          '-=0.4'
        )
        .fromTo(
          '.intro-btn',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.5'
        );
    }
  }, [revealed]);

  const handleReveal = () => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        setRevealed(true);
        setTimeout(() => {
          scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      },
    });
    tl.to(flapRef.current, {
      rotationY: -100,
      duration: 1.2,
    });
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  };

  return (
    <>
      {!revealed && (
        <div
          ref={flapRef}
          className="fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] z-50 bg-[var(--navbar-bg)] text-[var(--text-color)] flex flex-col justify-center items-center gap-6 shadow-2xl"
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
        >
          <h1 className="intro-text text-5xl font-bold outline-text text-center px-4">
            Talha Aleem’s Projects
          </h1>

          <p className="intro-text text-center text-base md:text-lg px-4 text-[var(--muted-text)]">
            Click the button below to unfold and explore all awesome projects 🚀
          </p>

          <button
            onClick={handleReveal}
            className="intro-btn px-6 py-3 bg-[var(--button-bg)] text-[var(--button-text)] rounded-md text-lg hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Explore Projects
          </button>
        </div>
      )}

      <div className="min-h-screen text-[var(--text-color)]">
        <div
          ref={scrollTargetRef}
          className="flex flex-col items-center bg-[var(--card-bg)] justify-center h-[calc(100vh-64px)] px-6 text-center"
        >
          <h2 className="text-4xl font-bold outline-text border-b-4 border-[var(--border-color)] pb-4 mb-6">
            Projects Showcasing
          </h2>
          <p className="text-lg max-w-2xl">
            Talha Aleem&apos;s portfolio includes modern web development projects using ReactJS, NextJS, Node.js, and MongoDB.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <button
              onClick={handleScrollDown}
              className="scroll-down-animation tracking-wide text-lg text-[var(--text-color)] relative"
            >
              Scroll Down
              <span className="block mt-1 animate-bounce text-2xl">↓</span>
            </button>
          </div>
        </div>

        <div className="max-w-100vw overflow-x-hidden">
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};

export default ProjectIntro;

"use client";
import React, { useEffect } from "react";

const Organogram = () => {
  useEffect(() => {
    const checkbox = document.querySelector("#rtl");
    checkbox.addEventListener("change", (e) => {
      document.body.classList.toggle("rtl");
    });
  }, []);

  return (
    <div className="">
      <div className="py-10 my-10">
        <div
          className="text-center"
          style={{
            // backgroundColor: "var(--background)",
            color: "var(--text-color)",
            padding: "2rem",
            borderRadius: "1rem",
            marginBottom: "2rem",
          }}
        >
          <h2 className="text-[var(--bold-text-color)] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  My Learning Journey
</h2>

          <p style={{ lineHeight: "1.6" }}>
            This organogram reflects the roadmap I&apos;ve followed as a
            self-driven Web Developer. Starting from the basics of{" "}
            <span style={{ color: "var(--link-color)" }}>HTML/CSS</span>, I
            gradually dove deeper into more advanced topics like{" "}
            <span style={{ color: "var(--link-color)" }}>JavaScript</span> and{" "}
            <span style={{ color: "var(--link-color)" }}>
              Responsive Design
            </span>
            . My journey continued with hands-on{" "}
            <span style={{ color: "var(--link-color)" }}>React Projects</span>{" "}
            and exploration of{" "}
            <span style={{ color: "var(--link-color)" }}>Node.js</span> for
            backend development.
          </p>
          <p style={{ lineHeight: "1.6", marginTop: "1rem" }}>
            I’ve also learned the importance of{" "}
            <span style={{ color: "var(--link-color)" }}>API Integration</span>,
            working with{" "}
            <span style={{ color: "var(--link-color)" }}>MongoDB</span> to
            manage data efficiently, and finally compiled all my efforts into a
            personal{" "}
            <span style={{ color: "var(--link-color)" }}>Portfolio</span> to
            showcase this evolving skillset.
          </p>
        </div>

        <label htmlFor="rtl">
          <input type="checkbox" id="rtl" /> Right to Left
        </label>
        <div className="organogram">
          <div className="main cc">
            <span>Web Developer</span>
          </div>
          <div className="sub tl">
            <span>HTML/CSS Learner</span>
          </div>
          <div className="sub tc">
            <span>JavaScript Explorer</span>
          </div>
          <div className="sub tr">
            <span>Responsive Design</span>
          </div>
          <div className="sub cl">
            <span>React Projects</span>
          </div>
          <div className="sub cr">
            <span>Node.js Basics</span>
          </div>
          <div className="sub bl">
            <span>API Integration</span>
          </div>
          <div className="sub bc">
            <span>MongoDB Practice</span>
          </div>
          <div className="sub br">
            <span>Portfolio Building</span>
          </div>
        </div>

        <style jsx>{`
          * {
            box-sizing: border-box;
          }

          [outlines],
          [outlines] * {
            outline: 1px solid hotpink;
          }

          body {
            background: var(--background);
            color: var(--text-color);
            margin: 0;
            padding: 1rem;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: sans-serif;
          }

          label {
            position: fixed;
            inset-block-start: 1rem;
            inset-inline-end: auto;
            inset-block-end: auto;
            inset-inline-start: 1rem;
            font-size: 0.9rem;
            z-index: 1;
            color: var(--text-color);
          }

          body.rtl {
            direction: rtl;
          }

          .organogram {
            --grid-gap: 1rem;
            display: grid;
            gap: var(--grid-gap);
            color: var(--foreground);
            font-family: sans-serif;
            font-weight: 600;
          }

          .organogram > div {
            display: grid;
            justify-content: start;
            align-items: center;
            position: relative;
          }

          .organogram > div > span {
            padding-block: 0.5rem;
            padding-inline: 1rem;
            border-radius: 0.5rem;
            background: linear-gradient(
              to right,
              var(--card-bg),
              var(--border-color)
            );
            border: 2px solid var(--border-color);
          }

          .organogram > .main > span {
            aspect-ratio: 1;
            border-radius: 50%;
            display: grid;
            place-items: center;
          }

          .organogram > .sub {
            padding-inline-start: calc(var(--grid-gap) * 2);
          }

          .organogram > .sub::after {
            content: "";
            position: absolute;
            z-index: -1;
            width: calc(var(--grid-gap) * 2);
            height: calc(100% + var(--grid-gap));
            inset-block-start: auto;
            inset-inline-end: auto;
            inset-block-end: 50%;
            inset-inline-start: var(--grid-gap);
            --borderW: 2px;
            --borderR: 0.5rem;
            border-style: dashed;
            border-color: var(--text-color);
            border-block-start-width: 0;
            border-inline-end-width: 0;
            border-block-end-width: var(--borderW);
            border-inline-start-width: var(--borderW);
            border-end-start-radius: var(--borderR);
          }

          @media (min-width: 30rem) {
            .organogram {
              grid-template-columns: repeat(3, 1fr);
              grid-template-areas: "tl tc tr" "cl cc cr" "bl bc br";
              text-align: center;
            }

            .organogram > div {
              grid-area: var(--area);
              justify-content: center;
            }

            .organogram > .sub {
              padding-inline-start: unset;
            }

            .organogram > .sub > span {
              padding-block: 1rem;
              padding-inline: 2rem;
              border-radius: 1rem;
            }

            .organogram > .tl {
              --area: tl;
              --i-bs: 50%;
              --i-is: 50%;
              --bw-be: 1;
              --bw-is: 1;
              --br-es: 1;
            }

            .organogram > .tc {
              --area: tc;
              --i-bs: 50%;
              --i-is: 50%;
              --bw-is: 1;
            }

            .organogram > .tr {
              --area: tr;
              --i-bs: 50%;
              --i-ie: 50%;
              --bw-be: 1;
              --bw-ie: 1;
              --br-ee: 1;
            }

            .organogram > .cl {
              --area: cl;
              --i-bs: 50%;
              --i-is: 50%;
              --bw-bs: 1;
            }

            .organogram > .cc {
              --area: cc;
            }

            .organogram > .cr {
              --area: cr;
              --i-bs: 50%;
              --i-ie: 50%;
              --bw-bs: 1;
            }

            .organogram > .bl {
              --area: bl;
              --i-be: 50%;
              --i-is: 50%;
              --bw-bs: 1;
              --bw-is: 1;
              --br-ss: 1;
            }

            .organogram > .bc {
              --area: bc;
              --i-be: 50%;
              --i-is: 50%;
              --bw-is: 1;
            }

            .organogram > .br {
              --area: br;
              --i-be: 50%;
              --i-ie: 50%;
              --bw-bs: 1;
              --bw-ie: 1;
              --br-se: 1;
            }

            .organogram > .sub::after {
              width: 100%;
              height: calc(50% + var(--grid-gap) * 1.5);
              inset-block-start: var(--i-bs, auto);
              inset-inline-end: var(--i-ie, auto);
              inset-block-end: var(--i-be, auto);
              inset-inline-start: var(--i-is, auto);
              border-block-start-width: calc(var(--borderW) * var(--bw-bs, 0));
              border-inline-end-width: calc(var(--borderW) * var(--bw-ie, 0));
              border-block-end-width: calc(var(--borderW) * var(--bw-be, 0));
              border-inline-start-width: calc(var(--borderW) * var(--bw-is, 0));
              border-start-start-radius: calc(var(--borderR) * var(--br-ss, 0));
              border-start-end-radius: calc(var(--borderR) * var(--br-se, 0));
              border-end-end-radius: calc(var(--borderR) * var(--br-ee, 0));
              border-end-start-radius: calc(var(--borderR) * var(--br-es, 0));
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Organogram;

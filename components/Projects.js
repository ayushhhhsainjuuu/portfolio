"use client";
import { useRef } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "CPRG 306 — Next.js App",
    desc: "Shopping List and Meal Ideas app with TheMealDB API integration, built as a weekly assignment project.",
    stack: ["Next.js", "React", "TheMealDB"],
    github: "https://github.com/ayushhhhsainjuuu/cprg306-assignments",
    image: "/images/cprg306.png",
  },
  {
    num: "02",
    title: "Diet Analysis Dashboard",
    desc: "Cloud-connected nutrition tracker with Azure Function backend, Terraform infrastructure, and data visualizations.",
    stack: ["Azure", "Python", "GitHub Actions"],
    github: "https://github.com/ayushhhhsainjuuu/cloudcomputing_assignment1",
    image: "/images/diet-analysis.png",
  },
  {
    num: "03",
    title: "Object Detection",
    desc: "Computer vision model that detects and classifies objects in images using machine learning techniques.",
    stack: ["Python", "CV / ML"],
    github: "https://github.com/ayushhhhsainjuuu/object-detection",
    image: "/images/object-detection.png",
  },
  {
    num: "04",
    title: "Sentiment Analysis",
    desc: "NLP project that classifies the sentiment of text input using machine learning.",
    stack: ["Python", "Jupyter", "NLP"],
    github: "https://github.com/ayushhhhsainjuuu/sentiment-analysis",
    image: "/images/sentiment-analysis.png",
  },
  {
    num: "05",
    title: "Tic-Tac-Toe",
    desc: "A clean, logic-driven implementation of the classic game — well-structured and fully playable.",
    stack: ["Python", "Jupyter"],
    github: "https://github.com/ayushhhhsainjuuu/tiktaktoe",
    image: "/images/tictactoe.png",
  },
  {
    num: "06",
    title: "Portfolio Website",
    desc: "This site — designed and built in Next.js with a clean slate blue aesthetic and smooth scroll.",
    stack: ["Next.js", "React", "CSS Modules"],
    github: "https://github.com/ayushhhhsainjuuu/portfolio",
    image: "/images/portfolio.png",
  },
];

export default function Projects() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  const handleScroll = () => {
    const el = trackRef.current;
    const fill = fillRef.current;
    if (!el || !fill) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
    fill.style.width = `${Math.round(20 + pct * 0.8)}%`;
  };

  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <p className={styles.label}>Projects</p>
        <p className={styles.hint}>Drag to explore →</p>
      </div>

      <div className={styles.trackWrapper} ref={trackRef} onScroll={handleScroll}>
        <div className={styles.track}>
          {projects.map((p) => (
            <a
              key={p.num}
              href={p.github}
              target="_blank"
              className={styles.card}
            >
              <div className={styles.preview}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.body}>
                <p className={styles.num}>{p.num}</p>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.footer}>
                  <div className={styles.stack}>
                    {p.stack.map((s) => (
                      <span key={s} className={styles.stackTag}>{s}</span>
                    ))}
                  </div>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.barTrack}>
        <div className={styles.barFill} ref={fillRef} />
      </div>
    </section>
  );
}
import styles from "./About.module.css";

const skills = [
  "C#", "Java", "Python", "JavaScript", "TypeScript",
  "React", "Next.js", "React Native", "SQL", "Azure", "Git",
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <p className={styles.label}>About</p>
      <div className={styles.content}>
        <p>
          I'm a software development student at SAIT, graduating August 2025,
          with a strong interest in building purposeful, well-crafted applications
          across web, mobile, and cloud platforms.
        </p>
        <p>
          I enjoy the full journey — from whiteboarding a system design to pushing
          a clean commit. When I'm not coding, I'm thinking about the next project.
        </p>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill} className={styles.tag}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
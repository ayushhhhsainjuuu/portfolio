import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <p className={styles.tag}>Software Developer · Calgary, AB</p>
      <h1 className={styles.name}>
        Specializing in<br />
        <em>web, mobile</em><br />
        &amp; cloud.
      </h1>
      <p className={styles.sub}>
        Software developer specializing in web, mobile &amp; cloud. SAIT student
        graduating August 2025 — open to junior roles, co-ops &amp; internships.
      </p>
      <div className={styles.cta}>
        <a href="#projects" className={styles.btnPrimary}>View Projects</a>
        <a href="/resume.pdf" className={styles.btnGhost} target="_blank">
          Download Resume
        </a>
      </div>
    </section>
  );
}
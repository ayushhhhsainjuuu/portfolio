import styles from "./Contact.module.css";

const links = [
  { label: "Email", value: "asainju576@gmail.com", href: "mailto:asainju576@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/ayush-sainju", href: "https://www.linkedin.com/in/ayush-sainju/" },
  { label: "GitHub", value: "github.com/ayushhhhsainjuuu", href: "https://github.com/ayushhhhsainjuuu" },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <p className={styles.label}>Contact</p>
      <div className={styles.content}>
        <div className={styles.note}>
          <strong>Let's work together.</strong>
          Open to junior developer roles, co-ops, and internships. Always happy to connect.
        </div>
        <div className={styles.links}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className={styles.link} target="_blank">
              <span>{l.label}</span>
              <span className={styles.value}>{l.value} ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
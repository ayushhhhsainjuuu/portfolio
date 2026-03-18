import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>Ayush · 2025</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
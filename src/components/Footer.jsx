import styles from "./Footer.module.css";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/aliciacmoura/recent-activity/all/";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Follow my journey on LinkedIn
      </a>
    </footer>
  );
}

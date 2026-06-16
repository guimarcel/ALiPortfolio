import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const LOGO_URL =
  "https://cdn.myportfolio.com/b17b666e-7d24-4175-a143-46b2fc3c6eb8/576f224d-f822-4f35-a533-114e65338eec_rwc_6x2x186x94x4096.png?h=d65412792287609bbb6f265c0c157c09";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <Link to="/work" className={styles.navLink}>
          Work
        </Link>
      </nav>
      <Link to="/work" className={styles.logo}>
        <img src={LOGO_URL} alt="Alícia Moura" />
      </Link>
      <div className={styles.right} />
    </header>
  );
}

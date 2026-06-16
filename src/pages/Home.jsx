import { Helmet } from "react-helmet-async";
import projects from "../data/projects";
import ProjectGrid from "../components/ProjectGrid";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Alícia Moura — Portfolio</title>
        <meta name="description" content="Graphic Designer & Art Director" />
      </Helmet>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Designing experiences that move beyond the screen
          </h1>
          <p className={styles.heroSub}>Explore my work.</p>
        </section>

        <ProjectGrid projects={projects} />
      </main>

      <Footer />
    </>
  );
}

import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./YouMayAlsoLike.module.css";

export default function YouMayAlsoLike({ currentSlug, allProjects }) {
  const others = useMemo(() => {
    const pool = allProjects.filter((p) => p.slug !== currentSlug);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 3);
  }, [currentSlug, allProjects]);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>You may also like</h2>
      <div className={styles.grid}>
        {others.map((project) => (
          <Link key={project.id} to={project.link} className={styles.card}>
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className={styles.img}
              draggable={false}
            />
            <div className={styles.overlay}>
              <span className={styles.overlayTitle}>{project.title}</span>
              <span className={styles.overlayYear}>{project.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

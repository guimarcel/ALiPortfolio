import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, style }) {
  return (
    <Link to={project.link} className={styles.card} style={style}>
      <div className={styles.imageWrapper}>
        <img src={project.cover} alt={project.title} loading="lazy" />
      </div>
    </Link>
  );
}

import ProjectCard from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

export default function ProjectGrid({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          style={{ animationDelay: `${index * 80}ms` }}
        />
      ))}
    </div>
  );
}

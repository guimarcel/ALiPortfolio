import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import projects from "../data/projects";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import Footer from "../components/Footer";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  const images = project.gallery?.length ? project.gallery : [project.cover];

  return (
    <>
      <Helmet>
        <title>{project.title} — Alícia Moura</title>
        <meta name="description" content={project.description || project.title} />
        <meta property="og:title" content={project.title} />
        <meta property="og:image" content={project.cover} />
        <meta property="og:description" content={project.description || ""} />
      </Helmet>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          {project.description && (
            <p className={styles.description}>{project.description}</p>
          )}
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.gallery}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} — ${i + 1}`}
              loading="lazy"
              className={styles.galleryImg}
            />
          ))}
          {project.video && (
            <div className={styles.videoWrapper}>
              <iframe
                src={project.video}
                title={`${project.title} — vídeo`}
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div className={styles.backTop}>
          <button
            className={styles.backTopBtn}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top ↑
          </button>
        </div>

        <YouMayAlsoLike currentSlug={slug} allProjects={projects} />
      </main>

      <Footer />
    </>
  );
}

import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div style={styles.container}>
        {projects.map((project, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.header}>
              <h3 style={styles.title}>{project.title}</h3>
              <span style={styles.type}>{project.type}</span>
            </div>
            <p style={styles.description}>{project.description}</p>
            <div style={styles.techContainer}>
              {project.tech.map((tech, tIdx) => (
                <span key={tIdx} style={styles.tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    background: "rgba(20, 20, 30, 0.6)",
    padding: "30px",
    borderRadius: 12,
    marginBottom: "30px",
    boxShadow: "0 8px 32px rgba(0, 119, 255, 0.1)",
    border: "1px solid rgba(0, 119, 255, 0.2)",
    transition: "all 0.3s ease",
    animation: "fadeInUp 0.8s ease-out",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    flexWrap: "wrap",
    gap: "10px",
  },
  title: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#00d4ff",
    margin: 0,
    textShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
  },
  type: {
    fontSize: "12px",
    color: "#b0b0b0",
    background: "rgba(0, 119, 255, 0.2)",
    padding: "5px 12px",
    borderRadius: "15px",
    border: "1px solid rgba(0, 119, 255, 0.3)",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#d0d0d0",
    marginBottom: "15px",
  },
  techContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  tech: {
    fontSize: "13px",
    padding: "5px 12px",
    background: "rgba(0, 119, 255, 0.1)",
    color: "#00d4ff",
    borderRadius: "15px",
    border: "1px solid rgba(0, 119, 255, 0.3)",
    transition: "all 0.3s ease",
  },
};

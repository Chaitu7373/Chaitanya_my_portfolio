import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div style={styles.container}>
        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Languages</h3>
          <div style={styles.tagContainer}>
            {skills.languages.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Backend</h3>
          <div style={styles.tagContainer}>
            {skills.backend.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Frontend</h3>
          <div style={styles.tagContainer}>
            {skills.frontend.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Cloud & DevOps</h3>
          <div style={styles.tagContainer}>
            {skills.cloud.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Databases & NoSQL</h3>
          <div style={styles.tagContainer}>
            {skills.databases.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Messaging</h3>
          <div style={styles.tagContainer}>
            {skills.messaging.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Testing</h3>
          <div style={styles.tagContainer}>
            {skills.testing.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Monitoring</h3>
          <div style={styles.tagContainer}>
            {skills.monitoring.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>

        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Other</h3>
          <div style={styles.tagContainer}>
            {skills.other.map((skill, idx) => (
              <span key={idx} style={styles.tag}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  category: {
    marginBottom: "30px",
    animation: "fadeInUp 0.8s ease-out",
  },
  categoryTitle: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "15px",
    color: "#00d4ff",
    textShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    padding: "8px 16px",
    background: "rgba(0, 119, 255, 0.1)",
    border: "1px solid rgba(0, 119, 255, 0.3)",
    borderRadius: "20px",
    fontSize: "14px",
    boxShadow: "0px 2px 8px rgba(0, 119, 255, 0.2)",
    color: "#e0e0e0",
    transition: "all 0.3s ease",
    cursor: "default",
  },
};

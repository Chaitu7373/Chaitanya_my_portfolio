import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <h2>EDUCATION</h2>
      <div style={styles.container}>
        {education.map((edu, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.header}>
              <div>
                <h3 style={styles.institution}>{edu.institution}</h3>
                <p style={styles.location}>{edu.location}</p>
              </div>
              <div style={styles.meta}>
                <h4 style={styles.degree}>{edu.degree}</h4>
                <p style={styles.period}>{edu.period}</p>
              </div>
            </div>
            <div style={styles.project}>
              <strong>Major Project:</strong> {edu.project}
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
    alignItems: "flex-start",
    marginBottom: "15px",
    flexWrap: "wrap",
    gap: "15px",
  },
  institution: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#00d4ff",
    margin: 0,
    marginBottom: "5px",
    textShadow: "0 0 10px rgba(0, 212, 255, 0.3)",
  },
  location: {
    fontSize: "16px",
    color: "#b0b0b0",
    margin: 0,
  },
  meta: {
    textAlign: "right",
  },
  degree: {
    fontSize: "20px",
    fontWeight: 600,
    margin: 0,
    marginBottom: "5px",
    color: "#ffffff",
  },
  period: {
    fontSize: "14px",
    color: "#b0b0b0",
    margin: 0,
  },
  project: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#d0d0d0",
    paddingTop: "15px",
    borderTop: "1px solid rgba(0, 119, 255, 0.2)",
  },
};


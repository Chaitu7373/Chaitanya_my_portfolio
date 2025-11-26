import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <h2>CERTIFICATIONS</h2>
      <div style={styles.container}>
        {certifications.map((cert, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.content}>
              <h3 style={styles.name}>{cert.name}</h3>
              <span style={styles.date}>{cert.date}</span>
            </div>
            {cert.date === "In Progress" && (
              <span style={styles.badge}>In Progress</span>
            )}
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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(20, 20, 30, 0.6)",
    padding: "25px",
    borderRadius: 12,
    boxShadow: "0 8px 32px rgba(0, 119, 255, 0.1)",
    border: "1px solid rgba(0, 119, 255, 0.2)",
    position: "relative",
    transition: "all 0.3s ease",
    animation: "fadeInUp 0.8s ease-out",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#ffffff",
    margin: 0,
  },
  date: {
    fontSize: "14px",
    color: "#b0b0b0",
  },
  badge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "11px",
    padding: "4px 10px",
    background: "rgba(255, 193, 7, 0.2)",
    color: "#ffc107",
    borderRadius: "12px",
    fontWeight: 500,
    border: "1px solid rgba(255, 193, 7, 0.3)",
    animation: "pulse 2s infinite",
  },
};


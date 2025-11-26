import { summary } from "../data";

export default function About() {
  return (
    <section id="about">
      <h2>SUMMARY</h2>
      <div style={styles.summary}>
        <p style={styles.text}>{summary}</p>
      </div>
    </section>
  );
}

const styles = {
  summary: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "rgba(20, 20, 30, 0.6)",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid rgba(0, 119, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 119, 255, 0.1)",
    animation: "fadeInUp 0.8s ease-out",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#d0d0d0",
    textAlign: "justify",
  },
};

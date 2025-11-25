export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div style={styles.card}>
        <h3>Senior Java Developer</h3>
        <p>Designed microservices, built REST APIs, and managed cloud deployments.</p>
      </div>

      <div style={styles.card}>
        <h3>Full Stack Engineer</h3>
        <p>Created modern UIs using React and integrated backend services.</p>
      </div>
    </section>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: 8,
    marginBottom: "20px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },
};

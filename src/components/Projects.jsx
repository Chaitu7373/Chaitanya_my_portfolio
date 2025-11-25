export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div style={styles.card}>
        <h3>GeoKiks App</h3>
        <p>Location-based video posting platform built with Java + React.</p>
      </div>

      <div style={styles.card}>
        <h3>Smart Waste Management</h3>
        <p>AI-based waste classification system using Spring Boot + React.</p>
      </div>
    </section>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: 8,
    marginBottom: 20,
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },
};

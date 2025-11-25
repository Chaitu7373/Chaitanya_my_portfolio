import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div style={styles.card} key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "15px",
    background: "#fff",
    borderRadius: 8,
    textAlign: "center",
    boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
  },
};

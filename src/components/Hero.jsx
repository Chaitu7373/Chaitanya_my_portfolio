export default function Hero() {
  return (
    <section id="hero" style={styles.hero}>
      <h1>Hello, I'm <span style={styles.name}>Chaitanya</span></h1>
      <h3>Full Stack Java Developer</h3>
      <p>Building scalable applications with Java, Spring Boot, and React.</p>
      <a href="#contact" style={styles.button}>Contact Me</a>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  },
  name: { color: "#0077ff" },
  button: {
    marginTop: 20,
    padding: "10px 20px",
    background: "#0077ff",
    color: "#fff",
    borderRadius: 6,
    textDecoration: "none",
  },
};

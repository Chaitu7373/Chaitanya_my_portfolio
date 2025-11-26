import { profile } from "../data";

export default function Hero() {
  return (
    <section id="hero" style={styles.hero}>
      <h1 style={styles.h1}>CHAITANYA BODDU</h1>
      <h3 style={styles.h3}>Full Stack Java Developer</h3>
      <div style={styles.info}>
        <span>📍 {profile.location}</span>
        <span>📞 {profile.phone}</span>
        <span>✉️ <a href={`mailto:${profile.email}`} style={styles.link}>{profile.email}</a></span>
      </div>
      <a href="#contact" style={styles.button}>Contact Me</a>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
    paddingTop: "80px",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
    position: "relative",
    overflow: "hidden",
  },
  h1: {
    fontSize: "48px",
    fontWeight: 600,
    color: "#ffffff",
    margin: 0,
    animation: "fadeInUp 1s ease-out",
    textShadow: "0 0 20px rgba(0, 119, 255, 0.3)",
  },
  h3: {
    fontSize: "24px",
    fontWeight: 400,
    color: "#b0b0b0",
    margin: 0,
    animation: "fadeInUp 1.2s ease-out",
  },
  p: {
    fontSize: "18px",
    color: "#b0b0b0",
    margin: 0,
  },
  name: { 
    color: "#0077ff",
    textShadow: "0 0 10px rgba(0, 119, 255, 0.5)",
  },
  info: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "10px",
    fontSize: "16px",
    color: "#b0b0b0",
    animation: "fadeInUp 1.4s ease-out",
  },
  link: {
    color: "#00d4ff",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  button: {
    marginTop: 20,
    padding: "12px 30px",
    background: "linear-gradient(135deg, #0077ff 0%, #00d4ff 100%)",
    color: "#fff",
    borderRadius: 6,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: 500,
    transition: "all 0.3s ease",
    animation: "fadeInUp 1.6s ease-out",
    boxShadow: "0 4px 15px rgba(0, 119, 255, 0.4)",
  },
};

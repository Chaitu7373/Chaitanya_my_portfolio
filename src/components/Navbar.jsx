import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Portfolio</h3>
      <div style={styles.links}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <FaLinkedin size={20} style={{ marginLeft: 15 }} />
        <FaGithub size={20} />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "20px 10%",
    display: "flex",
    justifyContent: "space-between",
    background: "#fff",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
  },
  logo: { fontSize: 22, fontWeight: 600 },
  links: { display: "flex", gap: "20px", alignItems: "center" },
};

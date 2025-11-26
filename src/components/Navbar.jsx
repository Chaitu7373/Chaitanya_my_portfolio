import { FaLinkedin, FaGithub } from "react-icons/fa";
import { profile } from "../data";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Portfolio</h3>
      <div style={styles.links}>
        <a href="#about" style={styles.navLink}>Summary</a>
        <a href="#skills" style={styles.navLink}>Skills</a>
        <a href="#experience" style={styles.navLink}>Experience</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#education" style={styles.navLink}>Education</a>
        <a href="#certifications" style={styles.navLink}>Certifications</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaLinkedin size={20} />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaGithub size={20} />
        </a>
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
    background: "rgba(10, 10, 10, 0.95)",
    backdropFilter: "blur(10px)",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    boxShadow: "0px 2px 20px rgba(0, 119, 255, 0.1)",
    borderBottom: "1px solid rgba(0, 119, 255, 0.2)",
    transition: "all 0.3s ease",
  },
  logo: { 
    fontSize: 22, 
    fontWeight: 600, 
    color: "#0077ff",
    textShadow: "0 0 10px rgba(0, 119, 255, 0.5)",
    transition: "all 0.3s ease",
  },
  links: { 
    display: "flex", 
    gap: "20px", 
    alignItems: "center",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#b0b0b0",
    textDecoration: "none",
    transition: "all 0.3s ease",
    position: "relative",
  },
  iconLink: {
    color: "#b0b0b0",
    textDecoration: "none",
    marginLeft: "10px",
    transition: "all 0.3s ease",
  },
};

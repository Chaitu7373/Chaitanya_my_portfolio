import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact">
      <h2>CONTACT</h2>
      <div style={styles.contactInfo}>
        <p style={styles.infoItem}>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${profile.email}`} style={styles.link}>
            {profile.email}
          </a>
        </p>
        <p style={styles.infoItem}>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`} style={styles.link}>
            {profile.phone}
          </a>
        </p>
        <p style={styles.infoItem}>
          <strong>Location:</strong> {profile.location}
        </p>
      </div>
    </section>
  );
}

const styles = {
  contactInfo: {
    maxWidth: "600px",
    margin: "0 auto",
    background: "rgba(20, 20, 30, 0.6)",
    padding: "30px",
    borderRadius: 12,
    border: "1px solid rgba(0, 119, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 119, 255, 0.1)",
    animation: "fadeInUp 0.8s ease-out",
  },
  infoItem: {
    fontSize: "18px",
    marginBottom: "15px",
    lineHeight: "1.8",
    color: "#d0d0d0",
  },
  link: {
    color: "#00d4ff",
    textDecoration: "none",
    transition: "all 0.3s ease",
    textShadow: "0 0 5px rgba(0, 212, 255, 0.3)",
  },
};

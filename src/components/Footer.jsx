export default function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Chaitanya Boddu — All Rights Reserved
    </footer>
  );
}

const styles = {
  footer: {
    padding: "20px",
    color: "#b0b0b0",
    textAlign: "center",
    background: "rgba(10, 10, 10, 0.8)",
    marginTop: "50px",
    borderTop: "1px solid rgba(0, 119, 255, 0.2)",
  },
};

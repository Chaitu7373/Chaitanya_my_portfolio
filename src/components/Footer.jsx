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
    color: "#fff",
    textAlign: "center",
    background: "#111",
    marginTop: "50px",
  },
};

export default function Footer() {
  return (
    <footer>
      <span className="prompt">~$</span> build --status{" "}
      <span style={{ color: "var(--pass)" }}>success</span> · ©{" "}
      {new Date().getFullYear()} Sathyajith S
    </footer>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111827",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        SkillForge AI
      </Link>

      <div>
        <Link
          to="/login"
          style={{ color: "#fff", marginRight: "20px", textDecoration: "none" }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
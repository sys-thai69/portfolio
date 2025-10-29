import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: "flex", gap: "1.2rem", padding: "1rem 0", background: "#394867", borderRadius: "10px", justifyContent: "center", marginBottom: "2rem"
    }}>
      <Link style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} href="/">Home</Link>
      <Link style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} href="/about">About</Link>
      <Link style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} href="/education">Education</Link>
      <Link style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} href="/experience">Experience</Link>
      <Link style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} href="/skills">Skills</Link>
      <Link style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }} href="/contact">Contact</Link>
    </nav>
  );
}

export default function Home() {
  return (
    <section style={{
      textAlign: "center", padding: "2.5rem 1rem", background: "#fff", borderRadius: "10px", boxShadow: "0 2px 12px rgba(44,62,80,0.08)"
    }}>
      <h1 style={{ fontSize: "2.7rem", fontWeight: "bold", color: "#212A3E" }}>
        Pheav Chhengthai
      </h1>
      <p style={{ margin: "1rem auto", maxWidth: "520px", fontSize: "1.15rem", color: "#31374b" }}>
        A passionate student with a growth mindset, aspiring to become a great AI engineer and help society evolve.
      </p>
      <img src="/profile.png" alt="Profile" style={{
        width: "140px", height: "140px", objectFit: "cover", borderRadius: "100px", margin: "1.7rem auto" 
      }} />
    </section>
  );
}

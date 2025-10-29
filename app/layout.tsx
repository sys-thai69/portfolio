import Navbar from './navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ maxWidth: "820px", margin: "2rem auto", padding: "1rem", background: "#f5f6fa", borderRadius: "16px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}

import React from 'react';
import './globals.css';
import { Navbar, Footer } from './components';

// --- Metadata (Server Component) ---
export const metadata = {
  title: 'Pheav Chhengthai | AI Engineer & Developer',
  description: 'Aspiring AI Engineer and Developer Portfolio.',
};

// --- Root Layout Component ---
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 min-h-screen">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

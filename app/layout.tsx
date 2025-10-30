import React from 'react';
import './globals.css';
import { Navbar, Footer } from './components';
import CustomCursor from './components/CustomCursor';
import AIChatbot from './components/AIChatbot';

// --- Metadata (Server Component) ---
export const metadata = {
  title: 'Pheav Chhengthai | AI Engineer & Full-Stack Developer',
  description: 'Aspiring AI Engineer and Full-Stack Developer specializing in machine learning, web development, and innovative solutions. Currently studying at Paragon International University.',
  keywords: ['AI Engineer', 'Full-Stack Developer', 'Machine Learning', 'Web Development', 'Next.js', 'React', 'Python', 'PyTorch', 'Pheav Chhengthai', 'Cambodia Developer'],
  authors: [{ name: 'Pheav Chhengthai' }],
  creator: 'Pheav Chhengthai',
  publisher: 'Pheav Chhengthai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pheav Chhengthai | AI Engineer & Developer',
    description: 'Aspiring AI Engineer and Full-Stack Developer Portfolio',
    url: 'https://portfolio.chhengthai.tech',
    siteName: 'Pheav Chhengthai Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pheav Chhengthai | AI Engineer & Developer',
    description: 'Aspiring AI Engineer and Full-Stack Developer Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// --- Root Layout Component ---
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 min-h-screen">
        <CustomCursor />
        <AIChatbot />
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

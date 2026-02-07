"use client";

import React from "react";
import Link from "next/link";

// --- Navbar Component ---
const IconMenu = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {isOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    )}
  </svg>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white transition-colors hover:text-indigo-400"
          >
            Pheav Chhengthai
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-indigo-400 focus:outline-none"
            >
              <IconMenu isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// --- Footer Component ---
export function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/sys-thai69", icon: "🐙" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chhengthai-pheav-39a683255/",
      icon: "💼",
    },
    { name: "Email", url: "mailto:p.chhengthai@gmail.com", icon: "📧" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Pheav Chhengthai</h3>
            <p className="text-gray-400 mb-4">
              Aspiring AI Engineer & Developer passionate about building impactful solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-2xl hover:scale-110 transition-transform"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Phnom Penh, Cambodia</li>
              <li>
                <a
                  href="mailto:p.chhengthai@gmail.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  📧 p.chhengthai@gmail.com
                </a>
              </li>
              <li>🌐 Available for remote work</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pheav Chhengthai. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

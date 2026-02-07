"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingParticles from "./components/FloatingParticles";
import ScrollReveal from "./components/ScrollReveal";
import RotatingQuotes from "./components/RotatingQuotes";

// Stats Component
function Stats() {
  const stats = [
    { value: "3+", label: "Years Coding" },
    { value: "15+", label: "Projects Built" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Dedication" },
  ];

  return (
    <ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 glass rounded-xl"
          >
            <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
  );
}

// Featured Section
function FeaturedSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description:
        "Building intelligent solutions with PyTorch, TensorFlow, and modern ML frameworks",
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "Creating responsive web applications with React, Next.js, and Laravel",
    },
    {
      icon: "🎯",
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to complex technical challenges",
    },
  ];

  return (
    <div className="mt-20 grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <ScrollReveal key={index} direction="up" delay={index * 0.2}>
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 glass rounded-xl hover:glow-hover transition-all duration-300 h-full"
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 backdrop-blur-sm">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              {/* Main heading with gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold mb-4"
              >
                Hi, I am{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pheav Chhengthai
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6"
              >
                Aspiring <span className="text-indigo-400">AI Engineer</span> &{" "}
                <span className="text-purple-400">Developer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                A passionate student with a{" "}
                <span className="text-indigo-400 font-semibold">growth mindset</span>, eager to
                develop impactful AI and web solutions that help society evolve. Currently studying
                at Paragon International University and Institute of Foreign Languages.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 glow-hover"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass text-white font-semibold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative group">
                {/* Glow effect background */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl"
                />

                {/* Image container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-indigo-500 transition-all duration-300 shadow-2xl"
                >
                  <Image
                    src="/Pheav_Chhengthai_Profile_Picture.png"
                    alt="Pheav Chhengthai"
                    width={384}
                    height={384}
                    className="object-cover w-full h-full scale-[1.15]"
                    style={{ objectPosition: "center 35%" }}
                    quality={100}
                    unoptimized
                    priority
                  />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold shadow-lg"
                >
                  Open to Work
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-white text-sm font-semibold shadow-lg"
                >
                  🇰🇭 Cambodia
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <Stats />

          {/* Inspirational Quotes */}
          <ScrollReveal>
            <div className="mt-20">
              <RotatingQuotes />
            </div>
          </ScrollReveal>

          {/* Featured Section */}
          <FeaturedSection />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return <Hero />;
}

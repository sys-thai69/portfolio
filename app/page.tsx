'use client';

import React from 'react';
import Image from 'next/image';

// Stats Component
function Stats() {
  const stats = [
    { value: '3+', label: 'Years Coding' },
    { value: '15+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Dedication' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 glass rounded-xl animate-scale-in"
          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
        >
          <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// Featured Section
function FeaturedSection() {
  const features = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Building intelligent solutions with PyTorch, TensorFlow, and modern ML frameworks',
    },
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Creating responsive web applications with React, Next.js, and Laravel',
    },
    {
      icon: '🎯',
      title: 'Problem Solving',
      description: 'Analytical thinking and creative solutions to complex technical challenges',
    },
  ];

  return (
    <div className="mt-20 grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 glass rounded-xl hover:glow-hover transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
          style={{ animationDelay: `${1.2 + index * 0.2}s` }}
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-block mb-6 animate-fade-in-down">
                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 backdrop-blur-sm">
                  👋 Welcome to my portfolio
                </span>
              </div>

              {/* Main heading with gradient */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Pheav Chhengthai
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                Aspiring <span className="text-indigo-400">AI Engineer</span> & <span className="text-purple-400">Developer</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
                A passionate student with a <span className="text-indigo-400 font-semibold">growth mindset</span>, eager to develop impactful AI and web solutions that help society evolve. Currently studying at Paragon International University and Institute of Foreign Languages.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
                <a
                  href="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 glow-hover"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 glass text-white font-semibold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center md:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                {/* Glow effect background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-2xl transition-opacity duration-500 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-indigo-500 transition-all duration-300 shadow-2xl">
                  <Image 
                    src="/Pheav_Chhengthai_Profile_Picture.png" 
                    alt="Pheav Chhengthai" 
                    width={384} 
                    height={384} 
                    className="object-cover w-full h-full scale-150"
                    style={{ objectPosition: 'center 30%' }}
                    priority
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold shadow-lg animate-bounce">
                  Open to Work
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-white text-sm font-semibold shadow-lg">
                  🇰🇭 Cambodia
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <Stats />

          {/* Featured Section */}
          <FeaturedSection />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <Hero />;
}

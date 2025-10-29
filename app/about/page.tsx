import React from 'react';

// --- SVG Icon Components ---
const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87c0-.94-.52-1.84-1.38-2.22c-.01-.01-.02-.02-.03-.03c-2.31-.79-4.73-1.18-7.2-1.18c-2.47 0-4.89.39-7.2 1.18c-.01.01-.02.02-.03-.03c-.86.38-1.38 1.28-1.38 2.22V19"></path>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zM12 2c-1.846 0-3.543.518-5 1.38c-.01.01-.02-.02-.03-.03C4.52 4.2 2 7.31 2 12c0 4.523 4.477 10 10 10s10-4.477 10-10c0-4.69-2.52-7.8-5-8.62c-.01-.01-.02-.02-.03-.03C15.543 2.518 13.846 2 12 2z" clipRule="evenodd"></path>
    <path d="M12 2c-3.038 0-5.8 1.17-7.8 3.17c-.01.01-.02-.02-.03-.03C2.17 7.2 2 9.42 2 12c0 2.58 0 4.8.17 6.8c.01.01.02.02.03.03C4.2 20.83 6.962 22 12 22c5.038 0 7.8-1.17 9.8-3.17c.01-.01-.02-.02-.03-.03C21.83 16.8 22 14.58 22 12c0-2.58 0-4.8-.17-6.8c-.01-.01-.02-.02-.03-.03C19.8 3.17 17.038 2 12 2zM4.14 11c-.13.65-.14 1.32-.14 2 0 .68.01 1.35.14 2h15.72c.13-.65.14-1.32.14-2 0-.68-.01-1.35-.14-2H4.14z"></path>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87c0-.94-.52-1.84-1.38-2.22C14.61 15.8 13.3 15.5 12 15.5s-2.61.3-3.62.91c-.86.38-1.38 1.28-1.38 2.22V19"></path>
  </svg>
);

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

// Interests/Hobbies Component
function InterestsSection() {
  const interests = [
    { icon: '♟️', title: 'Chess', description: 'Strategic thinking and planning' },
    { icon: '📚', title: 'Learning', description: 'Continuous self-improvement' },
    { icon: '💡', title: 'Innovation', description: 'Exploring new technologies' },
    { icon: '🎮', title: 'Gaming', description: 'Problem-solving & creativity' },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Interests & Hobbies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="text-center p-6 glass rounded-xl hover:glow-hover transition-all duration-300">
            <div className="text-4xl mb-3">{interest.icon}</div>
            <h3 className="font-semibold text-white mb-1">{interest.title}</h3>
            <p className="text-sm text-gray-400">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Core Values Component
function CoreValues() {
  const values = [
    { title: 'Growth Mindset', description: 'Believing in continuous learning and improvement' },
    { title: 'Innovation', description: 'Creating solutions that make a difference' },
    { title: 'Collaboration', description: 'Working together to achieve greater outcomes' },
    { title: 'Excellence', description: 'Striving for quality in everything I do' },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Core Values</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <div key={index} className="p-6 glass rounded-xl border-l-4 border-indigo-500 hover:border-purple-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-indigo-400 mb-2">{value.title}</h3>
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Component
export default function AboutPage() {
  return (
    <div className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Profile Image Placeholder */}
          <div className="md:col-span-1">
            <div className="glass rounded-2xl p-8 text-center sticky top-24">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold glow">
                PC
              </div>
              <h2 className="text-2xl font-bold mb-2">Pheav Chhengthai</h2>
              <p className="text-indigo-400 mb-4">AI Engineer & Developer</p>
              <p className="text-sm text-gray-400 mb-6">Phnom Penh, Cambodia 🇰🇭</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/sys-thai69" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg text-gray-400 hover:text-indigo-400 hover:glow transition-all transform hover:scale-110" aria-label="GitHub">
                  <IconGithub />
                </a>
                <a href="https://www.linkedin.com/in/chhengthai-pheav-39a683255/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg text-gray-400 hover:text-indigo-400 hover:glow transition-all transform hover:scale-110" aria-label="LinkedIn">
                  <IconLinkedin />
                </a>
                <a href="mailto:p.chhengthai@gmail.com" className="p-3 glass rounded-lg text-gray-400 hover:text-indigo-400 hover:glow transition-all transform hover:scale-110" aria-label="Email">
                  <IconMail />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-lg text-gray-400 hover:text-indigo-400 hover:glow transition-all transform hover:scale-110" aria-label="Twitter">
                  <IconTwitter />
                </a>
              </div>
              
              {/* Quick Links */}
              <div className="mt-6 space-y-2">
                <a href="/contact" className="block w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
                  Hire Me
                </a>
                <a href="#" className="block w-full px-4 py-2 border border-gray-700 rounded-lg font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all">
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">My Story</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm a passionate student at <strong className="text-white">Paragon International University</strong> and the <strong className="text-white">Institute of Foreign Language (IFL)</strong>. I'm driven by a <span className="text-indigo-400 font-semibold">growth mindset</span> and a desire to become a great <span className="text-purple-400 font-semibold">AI Engineer</span>.
                </p>
                <p>
                  My journey in technology started with curiosity about how things work, which evolved into a passion for building solutions that make a real difference. I thrive in challenging environments that require complex problem-solving and continuous learning.
                </p>
                <p>
                  My strengths include <strong className="text-indigo-400">analytical problem-solving</strong>, team collaboration, and adapting quickly to new technologies. When I'm not coding, I enjoy playing chess, exploring new tech trends, and contributing to open-source projects.
                </p>
                <p>
                  I am actively seeking opportunities to apply my technical skills in real-world projects, particularly those involving <span className="text-indigo-400">machine learning</span>, <span className="text-purple-400">artificial intelligence</span>, and <span className="text-pink-400">scalable web solutions</span>.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-indigo-400">Quick Facts</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-semibold text-white">Education</p>
                    <p className="text-gray-400 text-sm">Paragon International University</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <p className="font-semibold text-white">Languages</p>
                    <p className="text-gray-400 text-sm">Khmer (Native), English (C1)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-semibold text-white">Status</p>
                    <p className="text-gray-400 text-sm">Open to opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-white">Focus</p>
                    <p className="text-gray-400 text-sm">AI/ML & Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <CoreValues />

        {/* Interests */}
        <InterestsSection />

        {/* Call to Action */}
        <div className="mt-16 text-center glass p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, and projects. Let's create something amazing together!
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 glow-hover">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

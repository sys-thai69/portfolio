'use client';

import React from 'react';

// --- Data ---
const projects = [
  {
    title: 'School Education Website',
    description: 'A complete functional website for school education management built with modern web technologies. Features include student management, grade tracking, and parent portal.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    link: '#', // TODO: Add actual project link
    github: '#', // TODO: Add GitHub repository link
    image: '🎓',
    status: 'Completed',
    category: 'Full-Stack',
  },
  {
    title: 'Hospital Management System',
    description: 'Comprehensive hospital management solution for patient records, appointments, and staff management. Built with cutting-edge technologies for optimal performance.',
    technologies: ['NextJS', 'ReactJS', 'TypeScript', 'TailwindCSS'],
    link: '#', // TODO: Add actual project link
    github: '#', // TODO: Add GitHub repository link
    image: '🏥',
    status: 'Completed',
    category: 'Full-Stack',
  },
  {
    title: 'Crime Mapping Application',
    description: 'Interactive crime mapping system to visualize and analyze crime data in real-time. Helps communities stay informed and safe with data-driven insights.',
    technologies: ['ReactJS', 'Leaflet', 'API Integration', 'Chart.js'],
    link: '#', // TODO: Add actual project link
    github: '#', // TODO: Add GitHub repository link
    image: '🗺️',
    status: 'Completed',
    category: 'Data Visualization',
  },
  {
    title: 'Fishing Game (ParagonU Hackathon)',
    description: '3rd place winner - An engaging fishing game built with Python during a hackathon competition. Features include realistic physics and scoring system.',
    technologies: ['Python', 'Pygame', 'Game Development'],
    link: '#', // TODO: Add actual project link
    github: '#', // TODO: Add GitHub repository link
    image: '🎮',
    status: 'Completed',
    category: 'Game Dev',
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by machine learning that can answer questions and assist users. Built with modern NLP techniques.',
    technologies: ['Python', 'PyTorch', 'NLP', 'FastAPI'],
    link: '#', // TODO: Add actual project link
    github: '#', // TODO: Add GitHub repository link
    image: '🤖',
    status: 'In Progress',
    category: 'AI/ML',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing my projects and skills. Built with Next.js 14 and modern design principles.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS v4'],
    link: '#', // TODO: Add actual project link
    github: 'https://github.com/sys-thai69/portfolio',
    image: '💼',
    status: 'Live',
    category: 'Web Dev',
  },
];

// --- Component ---
function ProjectCard({ title, description, technologies, link, github, image, status, category }: {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
  status: string;
  category: string;
}) {
  return (
    <div className="glass rounded-2xl p-6 hover:glow-hover transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {image}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
            status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
            'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
          }`}>
            {status}
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold border border-purple-500/30">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 mb-5 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 bg-indigo-600/30 text-indigo-300 text-sm rounded-lg border border-indigo-500/30 hover:bg-indigo-600/50 transition-colors">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-700">
        {link !== '#' && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          >
            View Live
          </a>
        )}
        {github !== '#' && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 text-center font-medium rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
          >
            View Code
          </a>
        )}
        {link === '#' && github === '#' && (
          <div className="flex-1 px-4 py-2 bg-gray-700/50 text-gray-500 text-center font-medium rounded-lg cursor-not-allowed">
            Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const categories = ['All', 'Full-Stack', 'AI/ML', 'Web Dev', 'Game Dev', 'Data Visualization'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development, AI/ML, and problem-solving. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'glass text-gray-300 hover:text-white hover:border-indigo-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-indigo-400 mb-2">{projects.length}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-gray-400">Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {projects.filter(p => p.status === 'In Progress').length}
              </div>
              <div className="text-gray-400">In Progress</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Interested in collaborating on a project?
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 glow-hover">
            Let's Work Together
          </a>
        </div>
      </div>
    </div>
  );
}

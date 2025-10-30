'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

// --- Data ---
const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 85, color: 'from-blue-500 to-yellow-500' },
      { name: 'C++', level: 75, color: 'from-blue-600 to-blue-400' },
      { name: 'JavaScript/TypeScript', level: 80, color: 'from-yellow-500 to-yellow-300' },
      { name: 'SQL', level: 70, color: 'from-orange-500 to-red-500' },
      { name: 'PHP', level: 65, color: 'from-purple-600 to-purple-400' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'PyTorch', level: 75, color: 'from-red-500 to-orange-500' },
      { name: 'TensorFlow', level: 70, color: 'from-orange-600 to-yellow-500' },
      { name: 'Pandas', level: 85, color: 'from-blue-600 to-purple-500' },
      { name: 'NumPy', level: 80, color: 'from-blue-500 to-cyan-500' },
      { name: 'Matplotlib', level: 75, color: 'from-green-500 to-blue-500' },
      { name: 'Jupyter Notebook', level: 85, color: 'from-orange-500 to-red-500' },
    ]
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: [
      { name: 'Next.js', level: 85, color: 'from-gray-800 to-gray-600' },
      { name: 'React.js', level: 85, color: 'from-cyan-500 to-blue-500' },
      { name: 'Laravel', level: 75, color: 'from-red-600 to-orange-500' },
      { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'Node.js', level: 70, color: 'from-green-600 to-green-400' },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git/GitHub', level: 85, color: 'from-gray-800 to-purple-600' },
      { name: 'Docker', level: 65, color: 'from-blue-600 to-cyan-500' },
      { name: 'VS Code', level: 90, color: 'from-blue-600 to-blue-400' },
      { name: 'MySQL/PostgreSQL', level: 75, color: 'from-blue-700 to-blue-500' },
      { name: 'RESTful APIs', level: 80, color: 'from-green-600 to-cyan-500' },
    ]
  },
  {
    title: 'Soft Skills',
    icon: '🎯',
    skills: [
      { name: 'Analytical Problem-Solving', level: 90, color: 'from-indigo-500 to-purple-500' },
      { name: 'Team Collaboration', level: 85, color: 'from-pink-500 to-rose-500' },
      { name: 'Technical Communication', level: 80, color: 'from-violet-500 to-purple-500' },
      { name: 'Adaptability', level: 85, color: 'from-blue-500 to-indigo-500' },
      { name: 'Growth Mindset', level: 95, color: 'from-green-500 to-emerald-500' },
    ]
  }
];

// Skill Bar Component
function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-indigo-400 font-semibold">{level}%</span>
      </div>
      <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

// Skill Category Component
function SkillCategory({ title, icon, skills, index }: { title: string; icon: string; skills: any[]; index: number }) {
  return (
    <ScrollReveal direction="up" delay={index * 0.1}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass p-8 rounded-2xl hover:glow-hover transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className="text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            {icon}
          </motion.div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div>
          {skills.map((skill, idx) => (
            <SkillBar key={idx} {...skill} index={idx} />
          ))}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

// --- Component ---
export default function SkillsPage() {
  // Calculate overall statistics
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const avgLevel = Math.round(
    skillCategories.reduce((acc, cat) => 
      acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0
    ) / totalSkills
  );

  return (
    <div className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies, built through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Stats Overview */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-indigo-400 mb-2">{totalSkills}+</div>
              <div className="text-gray-400">Total Skills</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">{skillCategories.length}</div>
              <div className="text-gray-400">Categories</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">{avgLevel}%</div>
              <div className="text-gray-400">Avg Proficiency</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">3+</div>
              <div className="text-gray-400">Years Learning</div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="glass p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Always Learning, Always Growing</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and methodologies to stay at the cutting edge of development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                View My Projects
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

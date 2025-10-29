import React from 'react';

// --- Data ---
const skills = [
  'Python', 'C++', 'SQL', 'Laravel', 'NextJS', 'ReactJS', 
  'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 
  'Github', 'Docker', 'SolidEdge', 'Analytical Problem-Solving',
  'Team Collaboration', 'Technical Communication',
];

// --- Component ---
export default function SkillsPage() {
  return (
    <div className="py-20 md:py-28 bg-gray-900 text-white min-h-[calc(100vh-140px)]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-600 pb-2 max-w-lg mx-auto">
          Skills & Technologies
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400 mb-10 text-lg">
            A comprehensive list of the technical and core competencies I use in my projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gray-800 text-gray-300 font-medium rounded-full shadow-md transition-all duration-300 hover:bg-indigo-600 hover:text-white border border-gray-700 hover:border-indigo-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

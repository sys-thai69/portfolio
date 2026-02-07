import React from "react";

// --- Data ---
const educationHistory = [
  {
    years: "2023 - Present",
    degree: "Bachelor Degree",
    institution: "Paragon International University",
    notes: "Focus on technology and engineering principles.",
  },
  {
    years: "2023 - Present",
    degree: "Foreign Language Study",
    institution: "Institute of Foreign Language (IFL)",
    notes: "Studying English at the C1 (Advanced) level.",
  },
  {
    years: "2019 - 2022",
    degree: "High School",
    institution: "E2STEM Education PreahYukunthor",
    notes: "Completed secondary education.",
  },
  {
    years: "2016 - 2019",
    degree: "Secondary School",
    institution: "Pursat Secondary School",
    notes: "",
  },
  {
    years: "2009 - 2016",
    degree: "Primary School",
    institution: "Pursat Primary School",
    notes: "",
  },
];

// --- Component ---
function EducationEntry({
  years,
  degree,
  institution,
  notes,
}: {
  years: string;
  degree: string;
  institution: string;
  notes: string;
}) {
  return (
    <div className="mb-8 p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-indigo-500 hover:border-indigo-400 transition-all duration-300">
      <div className="flex justify-between items-start flex-wrap">
        <h3 className="text-2xl font-semibold text-white">{degree}</h3>
        <p className="text-indigo-400 font-medium text-lg">{years}</p>
      </div>
      <p className="text-gray-300 mt-1 mb-3">{institution}</p>
      {notes && <p className="text-gray-400 text-sm italic">{notes}</p>}
    </div>
  );
}

export default function EducationPage() {
  return (
    <div className="py-20 md:py-28 bg-gray-900 text-white min-h-[calc(100vh-140px)]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-600 pb-2 max-w-lg mx-auto">
          Education
        </h1>
        {educationHistory.map((edu, index) => (
          <EducationEntry key={index} {...edu} />
        ))}
      </div>
    </div>
  );
}

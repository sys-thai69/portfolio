import React from "react";

// --- Data ---
const achievements = [
  "Achieved **3rd place** at ParagonU Hackathon by building a fishing game using Python with a teammate.",
  "Led a team of 5 people to complete a **SolidEdge Training project** for ACADEMIA 4.0.",
  "Successfully led a class of 20 students, teaching them about **soft skills**.",
  "Built a **complete functional website** for school education, hospital management, crime mapping, and more (using Laravel, NextJS, ReactJS).",
  "Participated in a Financial Literacy training program taught by a Singaporean Professor.",
  "Volunteered in SEAGAME 2023 as part of the organizer and coordinator team.",
  "Completed a research paper on seating arrangement and participated in the IFL poster presentation.",
];

// --- Component ---
export default function ExperiencePage() {
  return (
    <div className="py-20 md:py-28 bg-gray-900 text-white min-h-[calc(100vh-140px)]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-600 pb-2 max-w-lg mx-auto">
          Experience & Achievements
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
            My experience reflects strong capabilities in development, teamwork, and leadership,
            highlighted by competitive achievements and successful projects.
          </p>
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-indigo-400 font-bold text-xl leading-none pt-0.5">
                  &raquo;
                </span>
                <p
                  className="text-gray-200"
                  dangerouslySetInnerHTML={{
                    __html: achievement.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

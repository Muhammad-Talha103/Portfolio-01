
import React from 'react';

const Education = () => {
  const educationList = [
    {
      institution: "The Educators School",
      degree: "Matriculation",
      year: "2017-18",
      description: "Completed secondary education with a focus on science subjects."
    },
    {
      institution: "The Leeds College",
      degree: "Intermediate",
      year: "2019-21",
      description: "Achieved a strong foundation in engineering principles and mathematics, graduating with honors.",
    },
    {
      institution: "University of Sindh",
      degree: "Bachelors in Arts",
      year: "2022 - Present",
      description: "Pursuing a comprehensive education in arts with an emphasis on critical thinking and creative expression.",
    },
    {
      institution: "Monetechnical",
      degree: "Diploma in Electrical Engineering",
      year: "2022 - Present",
      description: "Currently studying electrical engineering, focusing on practical skills and foundational concepts in electronics and circuit design.",
    },
    {
      institution: "Governor Sindh Initiative of Artificial Intelligence, Web 3.0 and Metaverse (GIAIC)",
      degree: "Pursuing Software Development",
      year: "2022 - Present",
      description: "Engaged in advanced studies of software development, specializing in AI, Web 3.0 technologies, and immersive applications in the metaverse.",
    }
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center py-1 uppercase">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, index) => (
            <div key={index} className="p-6 bg-gray-100 shadow-md rounded-md transition-transform transform hover:scale-105 duration-500">
              <h3 className="text-xl font-bold text-gray-800 uppercase">{edu.degree}</h3>
              <p className="text-gray-600 font-semibold py-2">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
              <p className="text-gray-500">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

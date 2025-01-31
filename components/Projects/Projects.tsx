"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import projects from "./ProjectsNames";

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showProjects && (
        <div className="h-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our Projects
            </h1>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  whileHover={{ transition: { duration: 0.2 } }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 transform hover:shadow-xl"
                >
                  <div className="p-6 min-h-[200px]">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 h-20 flex items-center">
                    {project.description.length > 50
        ? project.description.slice(0, 100) + "..."
        : project.description}
                    </p>
                    <div className="flex justify-between  py-3 mr-3 mt-3">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border border-gray-300 hover:bg-gray-300 font-semibold rounded px-4 py-2 text-gray-800 hover:text-gray-600 hover:border-gray-400 transition text-center"
                      >
                        <FiGithub className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-black text-white rounded px-4 py-2 hover:bg-gray-800 font-semibold transition  text-center"
                      >
                        <FiExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    {hoveredId === project.id && (
                      <motion.div
                        className="bg-main h-2 absolute bottom-0 left-0 right-0"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

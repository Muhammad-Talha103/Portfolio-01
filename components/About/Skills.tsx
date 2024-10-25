"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  textColor?: string;
  label?: string;
  isVisible?: boolean;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size = 120,
  strokeWidth = 10,
  circleColor = "text-gray-200",
  progressColor = "text-blue-500",
  textColor = "text-gray-700",
  label,
  isVisible,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
          <circle
            className={`${circleColor} stroke-current`}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            className={`${progressColor} stroke-current`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
            }}
            animate={
              isVisible
                ? { strokeDashoffset: offset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <motion.span
            className={`text-xl font-semibold ${textColor}`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      {label && (
        <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>
      )}
    </div>
  );
};

const skills = [
  { label: "HTML", percentage: 99, color: "text-red-600" },
  { label: "CSS", percentage: 95, color: "text-blue-500" },
  { label: "JAVASCRIPT", percentage: 85, color: "text-yellow-400" },
  { label: "TYPESCRIPT", percentage: 90, color: "text-blue-600" },
  { label: "NEXT.JS", percentage: 80, color: "text-black" },
  { label: "REACT", percentage: 65, color: "text-[#61DAFB]" },
  { label: "TAILWIND CSS", percentage: 87, color: "text-sky-400" },
  { label: "GIT", percentage: 70, color: "text-orange-700" },
  { label: "GITHUB", percentage: 80, color: "text-gray-600" },
  { label: "REDUX", percentage: 72, color: "text-purple-600" },
  { label: "CMS", percentage: 83, color: "text-blue-600" },
  { label: "FIREBASE", percentage: 70, color: "text-yellow-500" },
];

const SkillsComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-[600px] bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 my-12"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CircularProgressBar
                percentage={skill.percentage}
                progressColor={skill.color}
                label={skill.label}
                isVisible={isVisible}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;

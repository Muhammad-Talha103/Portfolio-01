"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "@/images/image12.png";
import Skills from "./Skills";
import Education from "./education";
import Container from "@/shared/Container";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Container>
        <motion.div
          className="w-full"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="uppercase hidden md:block font-bold text-2xl text-center py-8">
            The spark of passion spreads light on the path of our purpose.
          </h2>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center px-4 py-8 md:py-0 "
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2 flex flex-col justify-center items-start mb-8 md:mb-0">
              <h2 className="text-lg font-bold uppercase mb-2">Biography</h2>
              <p className="text-base leading-relaxed mb-2">
                I&apos;m{" "}
                <span className="font-semibold text-main uppercase">
                  Muhammad Talha
                </span>
                , a{" "}
                <span className="font-semibold text-main uppercase">
                  Frontend developer
                </span>{" "}
                dedicated to creating engaging and intuitive user experiences.
                Specializing in{" "}
                <span className="font-semibold text-main">HTML, CSS</span>, and{" "}
                <span className="font-semibold text-main">JavaScript</span>, as
                well as{" "}
                <span className="font-semibold text-main">Next.js 14</span> and{" "}
                <span className="font-semibold text-main">Tailwind CSS</span>, I
                transform ideas into beautiful, functional web applications.
              </p>
              <p className="text-base leading-relaxed mb-2">
                I thrive in collaborative environments, where I can blend
                creativity with technical skills to deliver high-quality results
                that stand out and perform seamlessly. Each project offers a
                chance to explore the latest design trends and ensure seamless
                functionality.
              </p>
              <p className="text-base leading-relaxed">
                My goal is to craft digital experiences that resonate with users,
                forging meaningful connections that extend beyond the screen.
              </p>
              <p className="mt-2 leading-relaxed">
                I am committed to continuous learning, keeping up with industry
                trends to implement innovative solutions. By leveraging agile
                methodologies, I ensure efficient project management and
                collaboration, delivering high-quality results on time.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-end">
              <div className="rounded-lg py-4 md:py-8 flex justify-center items-center relative">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={ProfileImage}
                    alt="ProfileImage"
                    className="rounded-br-2xl rounded-bl-2xl h-[450px] w-[400px]"
                    height={500}
                    width={500}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      <Skills />
      <Education />
    </>
  );
};

export default About;

'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import FrontendText from "./FrontendText";
import RunningSlider from "./Slider";
import HomePageOutCome from "./HomePageOutCome";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-full">
      <div className="mx-auto h-full">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <HeroSection />
              <FrontendText />
              <div className="mt-20">
                <RunningSlider />
              </div>
              <div className="mt-20">
                <HomePageOutCome />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomePage;

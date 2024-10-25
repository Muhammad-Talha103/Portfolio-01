"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import services from "./servicesNames";
import { ServiceCardProps } from "./types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 duration-500  hover:border-2 border-2 hover:border-main"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-white">
      {isVisible && (
        <>
          <header className="bg-main text-white py-16 px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase"
              >
                Our Front-End Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl sm:text-2xl font-semibold"
              >
                Crafting beautiful and performant web experiences
              </motion.p>
            </div>
          </header>

          <main className="py-16 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {services.map((service, index) => (
                <ServiceCard key={index}  {...service} index={index} />
              ))}
            </div>
          </main>

          <section className="bg-main relative text-white py-16 px-4">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold uppercase mb-4">
                Ready to elevate your web presence?
              </h2>
              <p className="text-xl mb-8 font-semibold">
                Let&apos;s create something amazing together!
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-main font-semibold py-3 px-8 rounded-full text-lg hover:scale-110 duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

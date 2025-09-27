// components/AboutSection2.tsx
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { highlights } from "./messages";

const titleVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const subVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.6 },
  },
};

const pillarVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotate: 5 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.5 + i * 0.12,
      duration: 0.9,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export default function AboutSection2() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: "url('/grid-png.png')",
        backgroundSize: "120px",
        backgroundRepeat: "repeat",
      }}
      className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden w-full py-12 px-4 md:px-8 lg:px-16 bg-[#060c1b90]"
    >
      <div className="z-10 w-full max-w-5xl text-center">
        <div className="overflow-hidden">
          <motion.h1
            className="font-extrabold museo leading-tight text-4xl md:text-6xl lg:text-7xl"
            variants={titleVariant}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ce5fa] to-[#058bae]">
              Mission
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 mont text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
          variants={subVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
{`Student living is challenging, but it doesn’t have to be.  `}      </motion.p>

        {/* Pillars - Diagonal Cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {highlights.map((highlight, i) => (
            <motion.div
              key={highlight.id}
              className="group relative overflow-hidden"
              variants={pillarVariant}
              custom={i}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Diagonal background */}
              <div 
                className="absolute inset-0 -skew-x-12 bg-gradient-to-br from-[#058bae]/10 to-[#05c0e0]/5"
              />
              
              {/* Border glow */}
              <div className="absolute inset-0 border border-[#05c0e0]/30 rounded-lg shadow-lg group-hover:shadow-[0_0_25px_rgba(5,192,224,0.25)] transition-all duration-300" />
              
              {/* Content */}
              <div className="relative p-6  z-10 h-full flex items-center">
                <p className="mont flex justify-center items-center text-center text-sm md:text-base text-gray-200 leading-relaxed   group-hover:text-white transition-colors">
                  {highlight.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>
    </section>
  );
}
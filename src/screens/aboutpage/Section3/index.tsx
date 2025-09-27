// components/VisionSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const visionItems = [
  "Structured profiles with lifestyle details",
  "Smart roommate matching",
  "Conflict detection and compromise suggestions",
  "Housing recommendations",
  "Transparent explanations for every match",
];


export default function VisionSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative w-full py-24 md:py-36 px-4 md:px-8 overflow-hidden text-white"
    >
      {/* Decorative accents */}
      <div className="absolute top-1/4 left-8 w-1 h-24 bg-[#05c0e0] opacity-20 blur-sm rounded-full" />
      <div className="absolute bottom-1/3 right-12 w-1 h-32 bg-[#058bae] opacity-10 blur-sm rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold museo mb-6">
            Our <span className="text-[#05c0e0]">Vision</span>
          </h2>
          <p className="text-lg mont md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are building the{" "}
            <span className="text-white font-medium">Student Living Operating System</span> for the new era of campus life
            <br />
            One platform that grows with you
          </p>
        </motion.div>

        {/* The Growth Path */}
        <div className="relative flex justify-center">
          {/* Central glowing line — ANIMATED WITH HEIGHT (not scaleY) */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-[#05c0e0]/40 to-transparent"
            style={{ height: "100%" }}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          />

          {/* Vision items */}
          <div className="w-full max-w-2xl">
            {visionItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center mb-16 relative"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {/* Glowing node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-[#05c0e0] shadow-[0_0_16px_rgba(5,192,224,0.6)]" />
                </div>

                {/* Content (alternating sides) */}
                <div
                  className={`w-1/2 ${
                    i % 2 === 0 ? "text-right pr-12" : "text-left pl-12 ml-auto"
                  }`}
                >
                  <motion.div
                    className="p-5 rounded-xl bg-[rgba(4,18,28,0.4)] border border-[rgba(5,139,174,0.2)] backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <p className="mont text-lg md:text-xl text-gray-200">{item}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Final Climax */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <p className="mont text-2xl md:text-3xl font-medium text-gray-300">
From your first roommate to safe, compatible living              </p>
              <p className="mont text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6ce5fa] to-[#05c0e0] mt-2">
               Next Door Mate grows with you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
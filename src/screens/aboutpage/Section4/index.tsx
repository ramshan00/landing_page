// components/ValuesSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const values = [
  {
    title: "Clarity",
    desc: "Real jobs. No spam. No noise.",
  },
  {
    title: "Efficiency",
    desc: "Automate the grind. Save time.",
  },
  {
    title: "Authenticity",
    desc: "Your proposals. Your voice. Your win.",
  },
  {
    title: "Growth",
    desc: "Smarter with every use. Better every day.",
  },
];

export default function ValuesSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative w-full py-24 md:py-36 px-4 md:px-8 overflow-hidden text-white bg-gradient-to-b from-[#010407] to-[#020a14]"
     
    >
      {/* Subtle accents */}
      <div className="absolute top-1/3 left-6 w-0.5 h-20 bg-[#05c0e0] opacity-20 blur-sm" />
      <div className="absolute bottom-1/4 right-10 w-0.5 h-28 bg-[#058bae] opacity-10 blur-sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold museo">
            Our <span className="text-[#05c0e0]">Values</span>
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ y: -10 }}
            >
              {/* Glowing Pillar */}
              <motion.div
                className="relative w-1.5 h-32 mb-6 rounded-full"
                style={{
                  background: "linear-gradient(to top, transparent, #05c0e0, transparent)",
                }}
                animate={inView ? { 
                  boxShadow: "0 0 20px rgba(5, 192, 224, 0.5)" 
                } : {}}
                transition={{ duration: 0.6 }}
                whileHover={{
                  height: "40px",
                  boxShadow: "0 0 30px rgba(5, 192, 224, 0.7)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Pulse ring (optional) */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-[#05c0e0]"
                  animate={inView ? { 
                    opacity: [0, 0.4, 0],
                    scale: [0.8, 1.2, 1.4],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: inView ? Infinity : 0,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="museo text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#05c0e0] transition-colors">
                  {value.title}
                </h3>
                <p className="mont text-gray-300 text-sm md:text-base leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
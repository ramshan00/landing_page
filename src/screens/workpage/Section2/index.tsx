// components/WorkReimagined.tsx
"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { workSteps } from "./messages";
import { WorkStep } from "./types";

// Card entrance
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

const numberVariants: Variants = {
  hover: { 
    scale: 1.15, 
    color: "#05c0e0",
    textShadow: "0 0 12px rgba(5, 192, 224, 0.7)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  },
};

export default function WorkSection2() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <>
      {/* Custom Pulse Animation */}
      <style jsx>{`
        @keyframes flowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.8;
            transform: scaleY(1.1);
          }
        }
        .animate-flow-pulse {
          animation: flowPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      <section
        id="work-reimagined"
        ref={ref}
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-12 py-20 overflow-hidden text-white"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(5, 192, 224, 0.08) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(5, 139, 174, 0.06) 0%, transparent 25%),
            #020a14
          `,
        }}
      >
        <div className="absolute top-0 left-1/4 w-1 h-1/3 bg-[#05c0e0] opacity-20 blur-sm rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-1/2 bg-[#058bae] opacity-10 blur-sm rounded-full"></div>

        <div className="flex flex-col gap-16 w-full max-w-5xl relative z-10">
          {workSteps.map((step: WorkStep, i) => (
            <React.Fragment key={step.id}>
              <motion.div
                className="group flex flex-col md:flex-row gap-8 md:gap-12 items-start p-6 md:p-8 rounded
                          backdrop-blur-sm bg-[rgba(4,18,28,0.4)] border border-[rgba(5,139,174,0.2)] 
                          shadow-xl hover:shadow-[0_0_30px_rgba(5,192,224,0.15)] 
                          transition-all duration-500 ease-out relative"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                custom={i}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="mont text-5xl md:text-6xl min-w-[60px] md:min-w-[80px] text-center"
                  variants={numberVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="block group-hover:text-[#05c0e0] group-hover:drop-shadow-[0_0_18px_rgba(5,192,224,0.7)] transition-all">
                    {step.step}
                  </span>
                </motion.div>

                <div className="flex flex-col gap-4 flex-1">
                  <h3 className="mont text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a0d8f1]">
                    {step.title}
                  </h3>
                  <p className="museo text-xl md:text-2xl text-[#05c0e0] font-medium leading-tight">
                    {step.highlight}
                  </p>
                  <p className="mont text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Pulsing Vertical Line BETWEEN Cards (not after last one) */}
              {i < workSteps.length - 1 && (
                <div className="relative flex justify-center -mb-8 md:-mb-10">
                  <div 
                    className="w-1 animate-flow-pulse rounded-full"
                    style={{
                      height: "90px", // adjust as needed
                      background: "linear-gradient(to bottom, transparent, #05c0e0, transparent)",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
// components/WorkReimagined.tsx
"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const buttonVariant: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 16px 40px rgba(16, 185, 129, 0.25)",
  },
  tap: {
    scale: 0.97,
  },
};
const revealHeadline: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WorkReimagined: React.FC = () => {
    const { ref } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });
  return (
    <section
      id="work-reimagined" ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-16 bg-none overflow-hidden text-white"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020a14] via-[#021427]/60 to-[#020a14]"/>
        {/* side floating shape left */}
        <motion.div
          aria-hidden
          className="absolute left-10 top-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl"
          animate={{ x: [-20, 0, -20], opacity: [0.6, 1, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: "rgba(4,217,255,0.05)" }}
        />
        {/* side floating shape right */}
        <motion.div
          aria-hidden
          className="absolute right-10 bottom-1/3 w-40 h-40 md:w-56 md:h-56 rounded-full blur-3xl"
          animate={{ x: [20, 0, 20], opacity: [0.6, 1, 0.9] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: "rgba(5,139,174,0.05)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center flex flex-col gap-8">
        {/* Headline */}
        <motion.h1
          className="mont text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tight"
          variants={revealHeadline}
          initial="hidden"
          whileInView="show"
          
        >
          WORK.<br />REIMAGINED.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mont text-md sm:text-lg md:text-xl text-gray-300"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
      
        >
          From resumes to proposals, from first gig to career growth this is the future of freelancing.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
        >
           <Button
            className="font-semibold shadow-lg cursor-pointer bg-gradient-to-r from-[#41dffa] to-[#058bae] text-black mont"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
            aria-label="Start Now"
          >
            Start Building Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkReimagined;

// components/WhyUrdu.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const revealFromBottom: Variants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 0.9, 0.28, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariant: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 16px 40px rgba(16, 185, 129, 0.25)",
  },
  tap: { scale: 0.97 },
};
const WhyUrdu: React.FC = () => {
    const { ref} = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });
  return (
    <section
    ref={ref}
      id="why-urdu"
      className="relative w-full min-h-screen py-20 px-6 md:px-16 lg:px-28 flex items-center"
    >

      {/* CONTENT */}
      <motion.div
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1300px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} // replays when you go up/down
      >
        {/* LEFT: Big Headline (grows from bottom like tree) */}
        <div className="flex items-start">
          <div className="w-full">
            <div className="overflow-hidden">
              <motion.h2
                className="mont text-6xl md:text-7xl  font-extrabold leading-tight tracking-tight text-white"
                variants={revealFromBottom}
              >
                Why <span className="text-[#05c0e0]">URDU CAREER?</span>
              </motion.h2>
            </div>

            {/* small animated underline */}
            <motion.div
              className="mt-6 h-1 w-36 rounded-full bg-gradient-to-r from-[#05c0e0] to-[#60dfff] opacity-95"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
              viewport={{ once: false, amount: 0.25 }}
            />
          </div>
        </div>

        {/* RIGHT: Content card */}
        <motion.article
          className="relative mont bg-[#021318]/70 border border-[#058bae] backdrop-blur-md rounded-2xl p-8 py-15  hover:shadow-[0_0_15px_#05c0e0] duration-500 transition-all"
          variants={fadeUp}
        >
          <motion.p
            className="mont text-1xl  text-gray-200 leading-relaxed"
            variants={fadeUp}
          >
            This is not just building a tool.<br /><strong className="text-white">This is Refind version of freelancing.</strong>
          </motion.p>

          <motion.p
            className="mont mt-4 text-md text-gray-300"
            variants={fadeUp}
          >
            Our mission is to empower talent in a world where <strong>attention is currency</strong>. You focus on your craft.
            We will handle the rest  from discovery to proposal to client-fit.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.25 }}
          >
             <Button
            className="font-semibold py-3 px-8 shadow-lg cursor-pointer bg-gradient-to-r from-[#41dffa] to-[#058bae] text-black mont"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
            aria-label="Start Now"
          >
            Start Now
          </Button>

           <Link href={"/work"}> <button
              className="text-sm cursor-pointer text-gray-300 underline underline-offset-4 hover:text-gray-100 transition"
            >
              Learn how URDU works →
            </button></Link>
          </motion.div>
        </motion.article>
      </motion.div>
    </section>
  );
};

export default WhyUrdu;

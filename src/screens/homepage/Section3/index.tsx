"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// Variants with type safety
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

const buttonVariant: Variants= {
  hover: {
    scale: 1.05,
    boxShadow: "0px 16px 40px rgba(16, 185, 129, 0.25)",
  },
  tap: { scale: 0.97 },
};

export default function Imagine() {
  // Intersection observer for scroll-based animation
  const { ref, inView } = useInView({
    triggerOnce: false, // replay on scroll up/down
    threshold: 0.2, // trigger when 20% visible
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: "url('/grid-png.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
      className="relative flex-col min-h-screen flex items-center justify-center text-white overflow-hidden w-full py-12 px-6 md:px-12 lg:px-24 bg-[#060c1b]/80"
    >
      {/* Main content */}
      <div className="z-10 w-full max-w-6xl text-center">
        <div className="overflow-hidden">
          <motion.h1
            className="font-extrabold museo leading-tight text-[3rem] md:text-[5rem] lg:text-[6rem]"
            variants={titleVariant}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            Own. Your.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ce5fa] to-[#058bae]">
              Room.
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 mont text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          variants={subVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
         Bring your lifestyle, habits, and budget. We will match you with roommates who truly fit, and even suggest housing that feels like home.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex  items-center justify-center gap-6 mont flex-wrap md:flex-nowrap"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="font-semibold shadow-lg cursor-pointer bg-gradient-to-r from-[#41dffa] to-[#058bae] text-black mont"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
            aria-label="Start Now"
          >
            Find Roommates
          </Button>
<Link href={"/work"}>

          <Button
            className=""
           whileHover="hover"
            whileTap="tap"
            variant={"outline"}
            variants={buttonVariant}
          >
            Learn more
          </Button></Link>
        </motion.div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>
    </section>
  );
}

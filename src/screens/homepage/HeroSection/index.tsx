"use client";
import { motion } from "framer-motion";
import ScrollDownButton from "@/components/ScrollButton";
import { Button } from "@/components/ui/button";

import { Variants } from "framer-motion";

const buttonVariant: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 16px 40px rgba(16, 185, 129, 0.25)",
  },
  tap: {
    scale: 0.97,
  },
};


export default function HeroSection() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center py-15 px-6 md:px-16 relative text-white gap-2">
      {/* Hero Text */}
      <div className="overflow-hidden ">
        <motion.p
          className="text-right text-5xl sm:text-6xl md:text-8xl mont font-bold hover:scale-95 transition-all duration-300 uppercase  "
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Dream big
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <motion.p
          className="text-right text-5xl sm:text-6xl md:text-8xl mont  font-medium hover:scale-95 transition-all duration-300 uppercase"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          We will handle the{" "}
          <span className="font-bold text-[#05c0e0]">hustle</span>
        </motion.p>
      </div>

      {/* Subtext */}
      <motion.div
        className="text-lg sm:text-xl md:text-2xl lg:text-2xl museo text-gray-300 hover:scale-95 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <p>No more guessing. No more templates.</p>
        <p>
          We build your resume, find perfect gigs, write proposals, so you
          dominate every opportunity.
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-end mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
      >
          <Button
            className="font-semibold shadow-lg cursor-pointer bg-gradient-to-r from-[#41dffa] to-[#058bae] text-black mont"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
            aria-label="Start Now"
          >
            Get Started
          </Button>
      </motion.div>

      {/* Scroll Button */}

      <ScrollDownButton />
    </section>
  );
}

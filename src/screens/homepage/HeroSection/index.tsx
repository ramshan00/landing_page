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
    <section className="w-full min-h-[85vh] flex flex-col justify-center py-15 px-5 md:px-16 relative text-white gap-2">
      {/* Hero Text */}
      <div className="overflow-hidden ">
        <motion.p
          className="text-right text-5xl sm:text-6xl md:text-7xl mont font-bold hover:scale-95 transition-all duration-300 uppercase  "
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Live Smarter
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <motion.p
          className="text-right text-5xl sm:text-6xl md:text-7xl mont  font-medium hover:scale-95 transition-all duration-300 uppercase"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          We will handle your roommate{" "}
          <span className="font-bold text-[#05c0e0]">hustle</span>
        </motion.p>
      </div>

      {/* Subtext */}
      <motion.div
        className="text-lg sm:text-xl md:text-2xl lg:text-2xl museo text-gray-300 hover:scale-95 transition-all duration-300 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <p>No more endless scrolling. No more mismatched living.</p>
        <p>
         Our AI finds your perfect roommate and home checking profiles, scoring compatibility, and flagging red flags, so you get the right fit without stress.
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-end mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
      >
        <Link href="https://sample-door.vercel.app/signup">
          <Button
            className="font-semibold shadow-lg cursor-pointer bg-gradient-to-r from-[#41dffa] to-[#058bae] text-black mont"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
            aria-label="Start Now"
          >
            Get Started
          </Button>
        </Link>
      </motion.div>

      {/* Scroll Button */}

      <ScrollDownButton />
    </section>
  );
}

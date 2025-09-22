"use client";
import { motion } from "framer-motion";
import ScrollDownButton from "@/components/ScrollButton";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center py-5 px-6 md:px-16 relative text-white gap-2">
      {/* Hero Text */}
      <div className="overflow-hidden ">
        <motion.p
          className="text-right text-5xl sm:text-6xl md:text-8xl mont uppercase font-bold hover:scale-95 transition-all duration-300  "
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Dream big
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <motion.p
          className="text-right text-5xl sm:text-6xl md:text-8xl mont uppercase font-medium hover:scale-95 transition-all duration-300"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          We will handle the <span className="font-bold text-[#05c0e0]">hustle</span>
        </motion.p>
      </div>

      {/* Subtext */}
      <motion.div
        className="text-lg sm:text-xl md:text-2xl lg:text-2xl museo text-gray-300 hover:scale-95 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 , ease: "easeOut", delay: 0.6 }}
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
        <motion.button
          className="mont cursor-pointer bg-white text-gray-900 px-8 md:px-10 py-3 font-medium shadow-md hover:bg-gray-100  hover:shadow-[0_0_15px_rgba(5,192,224,0.6)] transition-all duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Scroll Button */}
     
        <ScrollDownButton />
      
    </section>
  );
}

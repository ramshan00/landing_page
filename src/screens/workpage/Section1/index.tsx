"use client";
import { motion } from "framer-motion";
import ScrollDownButton from "@/components/ScrollButton";



export default function WorkSection1() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col justify-center items-center py-15 px-6 md:px-16 relative text-white gap-2">
      {/* Hero Text */}
      <div className="overflow-hidden ">
        <motion.p
          className="text-5xl sm:text-6xl md:text-8xl mont font-medium hover:scale-95 transition-all duration-300 uppercase  "
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         How it
        </motion.p>
      </div>

      <div className="overflow-hidden">
        <motion.p
          className=" text-[#05c0e0] text-5xl sm:text-6xl md:text-8xl mont font-bold hover:scale-95 transition-all duration-300 uppercase"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Works
        </motion.p>
      </div>

      {/* Subtext */}
      <motion.div
        className="text-lg text-center mt-5 sm:text-xl md:text-2xl lg:text-2xl museo text-gray-300 hover:scale-95 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <p>Simple. Reliable. Step-by-step to smarter living.


</p>
        <p>
          
AI handles the messy roommate search. You focus on your studies and growth.
        </p>
      </motion.div>


      {/* Scroll Button */}

      <ScrollDownButton />
    </section>
  );
}

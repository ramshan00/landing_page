"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
const buttonVariant = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 16px 40px rgba(16, 185, 129, 0.25)",
  },
  tap: { scale: 0.97 },
};

export default function Believe() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.15, // thoda pehle trigger ho
  });

  return (
    <main
      ref={ref}
      className="bg-black relative min-h-screen w-full flex flex-col md:flex-row justify-around items-start gap-8 p-5 py-20 md:p-8"
    >
      {/* Animated Heading */}
      <motion.div
        className="font-bold museo text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex-2 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <h2>
          We believe in{" "}
          <span className="text-[#05c0e0]">people</span>, until they{" "}
          <span className="text-[#05c0e0]">believe</span> in themselves again.
        </h2>
      </motion.div>

      {/* Animated Paragraph & Button Container */}
      <motion.div
        className="left flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      >
        <p className="text-base sm:text-lg md:text-md mont leading-relaxed text-gray-300">
          Every feature we build is designed to{" "}
          <span className="text-white font-semibold">restore confidence</span>,{" "}
          unlock opportunities, and help freelancers break free from endless job
          struggles.
          <br />
          With every profile we optimize, every proposal we generate, and every
          job we match{" "}
          <span className="text-[#05c0e0] font-semibold">
            we are rewriting the future of work
          </span>
          . You are not alone in the hustle. Our agents walk beside you,
          ensuring you rise, compete, and win.
          <br />
          <span className="font-bold text-xl sm:text-2xl mt-4 block text-white">
            Start your journey. <br /> Own your career.
          </span>
        </p>

        {/* Animated Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
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
      </motion.div>
    </main>
  );
}
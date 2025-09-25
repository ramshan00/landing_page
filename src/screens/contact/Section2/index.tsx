"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LampContainer } from "@/components/ui/lamp";
import { Button  } from "@/components/ui/button";

export default function ContactComponent() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}

      style={{
        backgroundImage: "url('/grid-png.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
      className="relative w-full gap-10 flex-wrap min-h-screen flex justify-center items-center mont overflow-x-hidden pb-20 px-6 md:px-12 lg:px-24 bg-[#060c1b]/80 "
    >
      {/* Animated Grid Background */}
      <div />
      <LampContainer>
        <div className="flex flex-col items-center justify-center text-center gap-8 ">
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mont"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}
          >
            Got an idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23D2EE] to-[#5FA6FA]">
             {` Let’s build it.`}
            </span>
          </motion.h1>
          {/* tagline */}
          <motion.p
            className="text-gray-400  museo text-lg text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We reply fast. No bots. No templates. Just real humans ready to
            help.
          </motion.p>
        </div>
      </LampContainer>

      
      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Form Card */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-[rgba(35,210,238,0.15)] rounded-3xl p-6 sm:p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -8 }}
           viewport={{ once: false, amount: 0.3 }}
        >
          {/* Right Section (Contact Form) */}
          <div className="">
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    className="peer w-full px-4 py-3 bg-gray-900 border border-[#23D2EE] rounded  outline-none focus:border-[#2E9DF2] transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#23D2EE] peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:text-[#2E9DF2] transition-all"
                  >
                    Your name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    className="peer w-full px-4 py-3 bg-gray-900 border border-[#23D2EE] rounded  outline-none focus:border-[#2E9DF2] transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#23D2EE] peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:text-[#2E9DF2] transition-all"
                  >
                    Your email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=" "
                    className="peer w-full px-4 py-3 bg-gray-900 border border-[#23D2EE] rounded  outline-none focus:border-[#2E9DF2] transition-colors resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-3 text-[#23D2EE] peer-placeholder-shown:top-3 peer-focus:top-3 peer-focus:text-xs peer-placeholder-shown:text-base peer-focus:text-[#2E9DF2] transition-all"
                  >
                    Your message
                  </label>
                </div>
              </div>

                <Button
            className=" w-full font-semibold shadow-lg cursor-pointer bg-gradient-to-r from-[#41dffa] to-[#058bae] text-black mont"
          
      
            aria-label="Start Now"
          >
            Submit
          </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black" />
    </section>
  );
}

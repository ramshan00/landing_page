"use client";
import { motion} from "framer-motion";
import services from "./messages";



const AboutSection = () => {
  return (
    <section className="w-full p-4 min-h-screen flex flex-col items-center justify-center relative z-50 md:p-10 gap-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }} // ✅ animation again on scroll up/down
        className="flex justify-center"
      >
        <h2 className="text-5xl mont font-semibold text-center">
          The{" "}
          <span className="text-[#05C0E0] drop-shadow-[0_0_8px_rgba(5,139,174,0.6)]">
            URDU
          </span>{" "}
          Edge
        </h2>
      </motion.div>
      {/* Services */}
      <div className="space-y-8 md:max-w-[90%]  cursor-pointer w-full p-">

        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 border-b-2 border-[#058bae] bg-[#011217cc] shadow-[0_0_10px_rgba(5,139,174,0.2)] hover:shadow-[0_0_20px_rgba(5,139,174,0.5)] hover:border-[#05C0E0] transition-all duration-300 ease-in-out group"
          >

            <div className="w-full flex gap-8 items-center">
    
              <p className="text-[#058bae] text-2xl font-bold hover:text-[#05C0E0] group-hover:scale-110 transition-transform duration-300">
    
                {service.id.toString().padStart(2, "0")}{" "}
              </p>{" "}
              <h3 className="text-2xl museo group-hover:scale-110 transition-transform duration-300">
    
                {service.title}{" "}
              </h3>{" "}
            </div>{" "}
            <p className="mont mt-3 text-gray-200 group-hover:text-gray-50 transition-colors duration-300">
    
              {service.description}{" "}
            </p>{" "}
          </div>
        ))}{" "}
      </div>
    </section>
  );
};

export default AboutSection;

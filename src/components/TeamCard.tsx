// components/TeamCard.tsx
"use client";
import { Button } from "./ui/button";

import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { CometCard } from "./ui/comet-card";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  socials:string; 
  index?: number;
}

/** ---------- Focus context (internal to this file) ---------- **/
type FocusContextType = {
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
};

const FocusContext = createContext<FocusContextType | null>(null);

/** Provider wrapper you can use to wrap a list of TeamCard components.
 *  Usage:
 *  <TeamCardGroup>
 *    {cards.map((c, i) => <TeamCard key={i} index={i} ... />)}
 *  </TeamCardGroup>
 */
// Replace the old TeamCardGroup with this:
export const TeamCardGroup: React.FC<{
  children: React.ReactNode;
  layout?: "grid" | "flex" | "none";
}> = ({ children, layout = "flex" }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <FocusContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      {layout === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
          {children}
        </div>
      ) : layout === "flex" ? (
        // <-- FLEX wrapper (responsive, same feel as your previous main)
        <div className="flex flex-wrap justify-center gap-8 px-4 py-12">
          {children}
        </div>
      ) : (
        // layout === "none" -> render children exactly as-is (no wrapper)
        <>{children}</>
      )}
    </FocusContext.Provider>
  );
};


/** ---------- TeamCard component (unchanged inner markup/classes) ---------- **/
export default function TeamCard({
  name,
  role,
  imageUrl,
  socials,
  index,
}: TeamCardProps) {
  const ctx = useContext(FocusContext);
  const hoveredIndex = ctx?.hoveredIndex ?? null;
  const setHoveredIndex = ctx?.setHoveredIndex ?? (() => {});

  // Determine whether this card should be dimmed (when some other card is hovered)
  const isDimmed = hoveredIndex !== null && index !== undefined && hoveredIndex !== index;

  // outer wrapper classes for the dim/scale effect — does NOT modify inner class strings
  const outerClass = `transition-all duration-300 ease-out ${isDimmed ? "blur-sm scale-[0.98] opacity-80" : ""}`;

  return (
    <div
      // only the OUTER wrapper gets this dynamic class — inner markup left exactly as you wrote it
      className={outerClass}
      onMouseEnter={() => (index !== undefined ? setHoveredIndex(index) : null)}
      onMouseLeave={() => setHoveredIndex(null)}
      onFocus={() => (index !== undefined ? setHoveredIndex(index) : null)}
      onBlur={() => setHoveredIndex(null)}
      tabIndex={0}
    >
      <CometCard>
        <div className="w-[260px] h-[350px]  bg-white flex justify-center items-center rounded shadow-lg">
          <motion.div
            // parent motion div so framer-motion can be used if needed
            className="relative w-[260px] h-[350px] rounded overflow-hidden group transition-transform duration-300 
            will-change-transform border-2 shadow-2xl shadow-black/20
                "
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            aria-label={`Team member ${name} - ${role}`}
          >
            {/* Dark scrim for better contrast */}
            <div className="absolute inset-0 bg-black/40 " />

            {/* Bottom info panel - initially hidden, slides up on hover */}
            <div
              className="absolute  left-0 right-0 bottom-0 p-4 w-full h-28 bg-black/40 backdrop-blur-xs flex flex-col items-center text-center
                   transform md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                   transition-all duration-300"
            >
              <div className="w-full px-1">
                <p className="text-gray-200 text-shadow-2xs font-bold text-lg tracking-wider mont leading-tight">{name}</p>
                <p className="text-[#05c0e0] text-md museo text-shadow-2xs mt-1">{role}</p>
              </div>

              {/* Social icons row */}
             
  
              <Link href={socials} target="_blank" rel="noopener noreferrer">
               <Button
                          className=" text-sm font-light bg-transparent mt-2  px-2  py-1 hover:text-white hover:bg-black/50"
                          variant={"outline"}
                        
                        >
                          Show more
                        </Button>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </CometCard>
    </div>
  );
}


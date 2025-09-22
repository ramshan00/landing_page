// components/ScrollToNext.tsx
"use client";

import { useRef } from "react";

export default function ScrollToNext() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    const button = buttonRef.current;
    if (!button) {
      console.error("ScrollToNext: Button ref not attached");
      return;
    }

    const currentSection = button.closest("section");
    if (!currentSection) {
      console.error("ScrollToNext: No parent <section> found");
      return;
    }

    const allSections = Array.from(document.querySelectorAll("section"));
    const currentIndex = allSections.indexOf(currentSection);
    const nextSection = allSections[currentIndex + 1]; // Get very next <section> in DOM order

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("No next section. Scrolling to top.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Scroll down for more content"
      role="button"
      ref={buttonRef}
      onClick={handleScroll}
      className={`absolute cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden sm:block transition-opacity duration-300 `}
    >
      <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
        <div className="w-1 h-1.5 bg-current rounded-full"></div>
      </div>
    </button>
  );
}

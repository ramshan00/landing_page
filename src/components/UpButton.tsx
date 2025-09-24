// components/ScrollToTopButton.tsx
'use client'; // 👈 Required for hooks and event listeners
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed shadow-[0_0_10px_#05c0e0] bottom-6 right-6 z-50 w-12 h-12 cursor-pointer bg-[#05c0e0] hover:bg-[#058bae] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
    >
      <MdKeyboardDoubleArrowUp size={25} />
    </button>
  );
};

export default ScrollToTopButton;
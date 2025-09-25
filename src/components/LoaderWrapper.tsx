"use client";

import React, { useEffect, useState, ReactNode } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/loader.json";

interface LoaderWrapperProps {
  children: ReactNode; // ✅ unknown ki jagah ReactNode
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full min-h-screen z-[10000] bg-black flex items-center justify-center">
        <Lottie animationData={animationData} loop={true} className="w-56 h-56" />
      </div>
    );
  }

  return <div>{children}</div>; 
};

export default LoaderWrapper;

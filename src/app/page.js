"use client"

import Image from "next/image";
import Hero from "@/components/hero";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import gsap from 'gsap';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Animate hero section from bottom
    gsap.fromTo(heroRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  };

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      <div ref={heroRef} style={{ opacity: isLoading ? 0 : 1 }}>
        <Hero />
      </div>
    </div>
  );
}

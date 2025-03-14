"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CarouselProps {
  Sliders: React.ReactNode[];
  Next: React.ReactNode;
  Prev: React.ReactNode;
  className?: string;
}

export default function Carousel({
  Sliders,
  Next,
  Prev,
  className,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Handle next slide navigation
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Sliders.length);
  };

  // Handle previous slide navigation
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Sliders.length) % Sliders.length
    );
  };

  // Auto-slide effect: advances the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update direction and slide index
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Sliders.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, [Sliders.length]);

  // Animation variants for slides
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      zIndex: 0,
    }),
    center: {
      x: 0,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      zIndex: 0,
    }),
  };

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {/* Slide Container */}
      <div className="relative w-full h-full touch-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{
              duration: 0.6,
              ease: [0.45, 0.05, 0.55, 0.95],
            }}
          >
            {Sliders[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={handlePrev}>{Prev}</button>
      <button onClick={handleNext}>{Next}</button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {Sliders.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-5" : "bg-white/50"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

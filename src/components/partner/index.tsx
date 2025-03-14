"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AutoScrollingPartners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollX = useRef(0);

  // Set the total scrollable width on mount and update on window resize.
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const updateContentWidth = () => {
      setContentWidth(container.scrollWidth);
    };
    updateContentWidth();
    window.addEventListener("resize", updateContentWidth);
    return () => window.removeEventListener("resize", updateContentWidth);
  }, []);

  // Set up the auto-scrolling effect.
  useEffect(() => {
    if (!contentWidth) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const interval = setInterval(() => {
      scrollX.current += 1; // Move 1 pixel per tick.
      // Reset scroll when half the duplicated content has been scrolled.
      if (scrollX.current >= contentWidth / 2) {
        scrollX.current = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollX.current;
      }
    }, 16); // Roughly 60 frames per second.
    return () => clearInterval(interval);
  }, [contentWidth]);

  // List your partner logos (assumed to be in your public folder).
  const logos = [
    "/logo/partners/one.png",
    "/logo/partners/two.png",
    "/logo/partners/three.png",
    "/logo/partners/four.png",
    "/logo/partners/five.png",
    "/logo/partners/six.png",
    "/logo/partners/seven.png",
    "/logo/partners/eight.png",
    "/logo/partners/nine.png",
    "/logo/partners/ten.png",
  ];

  // Duplicate the array for a seamless scroll.
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="mb-10"
      style={{
        marginTop: "45px",
        backgroundColor: "white",
        padding: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h5 className="text-3xl font-bold mb-4">
        We are trusted by reputable clients & partners
      </h5>
      <div
        style={{
          height: "40px",
          overflow: "hidden",
          marginTop: "5px",
          width: "100%",
        }}
      >
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For IE and Edge
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              style={{
                width: "80px",
                height: "40px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={logo}
                alt={`Partner ${index}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Hide scrollbar in Webkit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AutoScrollingPartners;

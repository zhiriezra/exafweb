"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AutoScrollingPartners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollX = useRef(0);

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

  useEffect(() => {
    if (!contentWidth) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const interval = setInterval(() => {
      scrollX.current += 1;
      if (scrollX.current >= contentWidth / 2) {
        scrollX.current = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollX.current;
      }
    }, 16);
    return () => clearInterval(interval);
  }, [contentWidth]);

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
      <h5 className="text-3xl font-bold mb-4 text-center">
        We are trusted by reputable clients & partners
      </h5>
      <div
        className="max-w-[1200px] mx-auto"
        style={{
          height: "50px",
          overflow: "hidden",
          marginTop: "5px",
        }}
      >
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            justifyContent: "center",
            // gap: "10px", // Adjust spacing
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              style={{
                width: "200px", // Reduce width
                height: "50px",
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
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AutoScrollingPartners;

"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function YouChoose() {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50% (centered)
  const [isClient, setIsClient] = useState(false);

  // Ensure the component is rendered on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle slider drag
  const handleMouseMove = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - sliderRect.left;
    const newSliderPosition = Math.min(
      Math.max((offsetX / sliderRect.width) * 100, 0),
      100
    );
    setSliderPosition(newSliderPosition);
  };

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Choose Your Style</h1>

      {/* Description paragraph */}
      <p className="text-lg text-gray-300 mb-6 max-w-lg text-center">
        Use the slider to explore two styles of London&apos;s Carnaby Street.
        Slide to the left for a full-color view, or to the right for a
        sepia-toned perspective. Drag across the image to choose your preferred
        style in real-time!
      </p>

      <div
        className="relative w-full max-w-3xl h-80 overflow-hidden rounded-lg"
        ref={sliderRef}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        {/* Full-color image */}
        <Image
          src="/Londons_Carnaby_Street.jpg"
          alt="Full-color version of classic London"
          fill
          className="object-cover"
        />

        {/* Sepia overlay image with mask effect */}
        <div
          className="absolute inset-0"
          style={{
            width: "100%",
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, // Reveal left part as per slider
          }}
        >
          <Image
            src="/Carnabystrt.jpg"
            alt="Sepia version of classic London"
            fill
            className="object-cover"
          />
        </div>

        {/* DaisyUI Divider for Slider */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-2 h-full bg-white daisy-divider daisy-divider-horizontal cursor-ew-resize transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function YouChoose() {
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50%
  const sliderRef = useRef(null);

  // Update the slider position based on drag
  const handleMouseMove = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - sliderRect.left;
    const newSliderPosition = Math.min(
      Math.max((offsetX / sliderRect.width) * 100, 0),
      100
    );
    setSliderPosition(newSliderPosition);
  };

  // Directly map sliderPosition to opacity for immediate feedback
  const overlayOpacity = sliderPosition / 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Choose Your Style</h1>

      {/* Diff-like component with immediate opacity blend */}
      <div
        className="relative w-full max-w-3xl h-80 overflow-hidden rounded-lg"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        {/* Full-color version of the image as the background */}
        <Image
          src="/Londons_Carnaby_Street.jpg"
          alt="Full-color version of classic London"
          fill
          className="absolute inset-0 object-cover"
        />

        {/* Black-and-white or sepia version overlay with controlled opacity */}
        <div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
          <Image
            src="/Carnabystrt.jpg"
            alt="Black-and-white version of classic London"
            fill
            className="object-cover sepia" // Apply sepia or black-and-white filter on top image
          />
        </div>

        {/* Slider Control */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-1 bg-white h-full transform -translate-x-1/2 cursor-ew-resize"></div>
        </div>
      </div>
    </div>
  );
}

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
        Use the slider to explore two styles of London's Carnaby Street. Slide
        to the left for a full-color view, or to the right for a sepia-toned
        perspective. Drag across the image to choose your preferred style in
        real-time!
      </p>

      <div
        className="relative w-full max-w-3xl h-80 overflow-hidden rounded-lg"
        ref={sliderRef}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        {/* Full-color classic London photo in the background */}
        <Image
          src="/Londons_Carnaby_Street.jpg"
          alt="Full-color version of classic London"
          fill
          className="object-cover"
        />

        {/* Sepia overlay of the London photo with scale effect */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src="/Carnabystreet.jpg"
            alt="b&w version of classic London"
            fill
            className="object-cover sepia transform scale-105" // Apply scale effect
          />
        </div>

        {/* Slider */}
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

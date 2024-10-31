"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function YouChoose() {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50% (centered)

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Choose Your Style</h1>
      <div
        className="relative w-full max-w-3xl h-80 overflow-hidden rounded-lg"
        ref={sliderRef}
        onMouseMove={(e) => handleMouseMove(e)}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        {/* Full-color classic London photo in the background */}
        <Image
          src="/Londons_Carnaby_Street,_1966.jpg"
          alt="Full-color version of classic London"
          fill
          className="object-cover"
        />

        {/* Sepia overlay of the London photo */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src="/Week10/Week10-assignment/daisy-gallery/public/Londons-Carnaby-Street_black_and_ white.jpeg"
            alt="b&w version of classic London"
            fill
            className="object-cover sepia"
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

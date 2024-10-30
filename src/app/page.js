// src/app/page.js
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* min-h-screen: full viewport height, bg-base-100: light background color */}

      {/* Banner section with a background image, positioned centrally */}
      <section className="relative flex items-center justify-center h-80 bg-cover bg-center bg-[url('/path/to/banner-image.jpg')]">
        <div className="glass p-8 rounded-lg text-center max-w-xl">
          {/* glass: DaisyUI's glass effect, p-8: padding, rounded-lg: rounded corners, text-center: center-aligns text, max-w-xl: max width */}
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to MyApp
          </h1>
          {/* text-4xl: large title, font-bold: bold text, text-white: white color, mb-4: margin below */}
          <p className="text-lg text-white mb-6">
            Explore our services and learn more about what we offer.
          </p>
          {/* text-lg: medium text, text-white: white color, mb-6: margin below */}
          <button className="btn btn-primary">Discover More</button>
          {/* btn-primary: primary button style from DaisyUI */}
        </div>
      </section>

      {/* Accordion section with collapsible items */}
      <section className="p-6">
        {/* p-6: padding around the accordion section */}
        <div className="accordion w-full max-w-lg mx-auto">
          {/* accordion container, w-full: full width, max-w-lg: max width 32rem, mx-auto: centers horizontally */}

          {/* First Accordion Item */}
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-lg font-medium">About Us</div>
            <div className="collapse-content">
              <p>
                We are dedicated to providing top-notch solutions to our
                clients.
              </p>
            </div>
          </div>

          {/* Second Accordion Item */}
          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-lg font-medium">Services</div>
            <div className="collapse-content">
              <p>
                Our services are designed to meet your business needs
                effectively.
              </p>
            </div>
          </div>

          {/* Third Accordion Item */}
          <div
            tabIndex={2}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box"
          >
            <div className="collapse-title text-lg font-medium">Contact Us</div>
            <div className="collapse-content">
              <p>Reach out to our team for any inquiries or support.</p>
            </div>
          </div>
          {/* collapse and collapse-plus: DaisyUI for collapsible sections, border/base-300: border styling,
              bg-base-200: light background color, rounded-box: rounded corners, mb-2: bottom margin */}
        </div>
      </section>
    </div>
  );
}

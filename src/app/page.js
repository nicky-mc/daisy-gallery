// src/app/page.js
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-100 font-sans text-gray-800">
      {/* Banner section with a background image, positioned centrally */}
      <section className="relative flex items-center justify-center h-80 bg-cover bg-center bg-[url('/theWall.jpg')]">
        <div className="glass p-8 rounded-lg text-center max-w-xl">
          <h1 className="text-5xl font-extrabold text-black mb-4">
            Welcome To the Daisy Gallery
          </h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Interact with our Gallery pages by clicking on the top left to see
            how we used DaisyUI&apos;s features along with Tailwind&apos;s ease
            of use without the need for multiple style sheets.
          </p>
        </div>
      </section>

      {/* Accordion section with collapsible items */}
      <section className="p-6">
        <div className="accordion w-full max-w-lg mx-auto space-y-4">
          {/* Site Overview */}
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-semibold">
              About the Gallery Site
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                Welcome to our gallery site, showcasing the versatility of
                Tailwind and DaisyUI! Explore different pages to see live
                examples of DaisyUI's styling options and interactive elements.
                To browse galleries, open the side drawer where you can select
                from a range of gallery options, each demonstrating a unique set
                of features.
              </p>
            </div>
          </div>

          {/* Carousel Integration */}
          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-semibold">
              Carousel Integration
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                DaisyUI's carousel component enhances the user experience by
                enabling smooth, responsive content sliders. This feature is
                ideal for creating image galleries or showcasing services. With
                Tailwind’s control over layout and spacing, you can design
                carousels that adjust seamlessly across different devices.
              </p>
            </div>
          </div>

          {/* Interactive Modals */}
          <div
            tabIndex={2}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-semibold">
              Interactive Modals
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                Modals in DaisyUI are crafted to deliver dynamic pop-ups that
                are perfect for user prompts, contact forms, or gallery item
                previews. Tailwind CSS utilities make it easy to style and
                position modals, while DaisyUI ensures they’re accessible and
                responsive, delivering a refined user interaction.
              </p>
            </div>
          </div>

          {/* Theme Customization */}
          <div
            tabIndex={3}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-semibold">
              Theme Customization
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                DaisyUI’s theme system allows for effortless customization. With
                multiple themes available, users can switch between light, dark,
                and colorful options without modifying individual components.
                This provides a cohesive look throughout the site and allows
                users to personalize their experience.
              </p>
            </div>
          </div>

          {/* Styling Components */}
          <div
            tabIndex={4}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-semibold">
              Tailwind and DaisyUI Styling
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                Tailwind’s utility-first approach pairs seamlessly with
                DaisyUI’s styled components, offering pre-built classes for
                buttons, cards, badges, and more. This allows for fast
                prototyping with beautiful designs right out of the box,
                enabling developers to focus on functionality without
                sacrificing aesthetics.
              </p>
            </div>
          </div>

          {/* Button Variants */}
          <div
            tabIndex={5}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box mb-2"
          >
            <div className="collapse-title text-xl font-semibold">
              Button Variants
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                DaisyUI provides a range of button styles, from primary and
                secondary options to subtle and outlined variants. Combined with
                Tailwind’s customization options, these buttons can be adapted
                to fit the design needs of each page, enhancing both aesthetics
                and functionality.
              </p>
            </div>
          </div>

          {/* Typography & Text Components */}
          <div
            tabIndex={6}
            className="collapse collapse-plus border border-base-300 bg-base-200 rounded-box"
          >
            <div className="collapse-title text-xl font-semibold">
              Typography & Text Components
            </div>
            <div className="collapse-content text-gray-700 leading-relaxed">
              <p className="mt-2">
                With Tailwind and DaisyUI, typography becomes a core part of the
                user experience. DaisyUI includes styles for headings, body
                text, and captions, allowing for expressive and readable text
                that aligns with the theme. Tailwind's responsive font-sizing
                and spacing options ensure that text is both accessible and
                visually appealing across devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

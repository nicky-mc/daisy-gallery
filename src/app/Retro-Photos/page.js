"use client";

import { useState } from "react";

function Modal({ id, title, content, onClose }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        <div className="modal-action flex justify-center">
          <button
            onClick={onClose}
            className="btn bg-orange-500 text-white --tw-border-opacity: 1;
border-color: rgba(55, 65, 81, var(--tw-border-opacity)); hover:bg-slate-700 "
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default function RetroPhotos() {
  const [activeModal, setActiveModal] = useState(null);

  const images = [
    "/retro-photo-1.webp.png",
    "/retro-photo-2.webp.png",
    "/retro-photo-3.jpeg.png",
    "/retro-photo-5_cropped.jpg",
    "/retro-photo-6_cropped.webp",
    "/retro-photo-7_cropped.webp",
    "/retro-photo-8_cropped.webp",
    "/retro-photo-9.jpg",
    "/retro-photo-4_cropped.jpg",
  ];
  const modalContents = [
    {
      title: "Even Nun's Smoke",
      content:
        "This image is a famous image from the Hulton-Deutsch collection.",
    },
    {
      title: "Arabian Tea Ceremony",
      content: "This image captures the essence of Arabian cuture.",
    },
    {
      title: "PUNK",
      content:
        "A fantastic image illustrating punk culture, fashion and attitude.",
    },
    {
      title: "Palm Springs in the 1950s",
      content:
        "Even to this day if you go to Palm Springs it is like you have been transported back to the 1950s.",
    },
    {
      title: "Tokyo Cool",
      content:
        "Japan are not just technology trend setters but also in fashion and they definitely matched America for coolness in the 1960s.",
    },
    {
      title: "Uhura",
      content:
        "Uhura brought the fashion to Star Trek - the epitome of cool and I especially remember her incredible hair styles and earings.  Just a bit of a shame that her role was essentially that of a telephone operator.",
    },
    {
      title: "Vinyl Will Never Die",
      content:
        "Long live vinyl.  You cannot beat the warmth anologue richness of a vunyl record. FACT!",
    },
    {
      title: "Typewriters",
      content:
        "Not just for secretarys. There's something about hitting the keys of a typewriter.",
    },
    {
      title: "The Girl from Impanema",
      content:
        "If you want to experience exhuburant, exotic and flaboyant fashion Rio De Janeiro was the place to go in the 1960s.",
    },
  ];
  const openModal = (id) => {
    setActiveModal(id);
    document.getElementById(id).showModal();
  };

  const closeModal = () => {
    if (activeModal) {
      document.getElementById(activeModal).close();
      setActiveModal(null);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            // className="max-h-full max-w-full rounded-lg"
            className="w-80 h-80 rounded-lg border-r-slate-700 border-2"
            src={src}
            alt={`Gallery Image ${index + 1}`}
          />
          <button
            className="btn mt-2 bg-white text-orange-600"
            onClick={() => openModal(`modal_${index}`)}
          >
            Click Here For More Info
          </button>
          <Modal
            id={`modal_${index}`}
            title={modalContents[index].title}
            content={modalContents[index].content}
            onClose={closeModal}
          />
        </div>
      ))}
    </div>
  );
}

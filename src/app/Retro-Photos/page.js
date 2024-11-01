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
      title: "Gallery Image 1",
      content: "This is the first image in the gallery.",
    },
    {
      title: "Gallery Image 2",
      content: "This is the second image in the gallery.",
    },
    {
      title: "Gallery Image 3",
      content: "This is the third image in the gallery.",
    },
    {
      title: "Gallery Image 4",
      content: "This is the fourth image in the gallery.",
    },
    {
      title: "Gallery Image 5",
      content: "This is the fifth image in the gallery.",
    },
    {
      title: "Gallery Image 6",
      content: "This is the sixth image in the gallery.",
    },
    {
      title: "Gallery Image 7",
      content: "This is the seventh image in the gallery.",
    },
    {
      title: "Gallery Image 8",
      content: "This is the eighth image in the gallery.",
    },
    {
      title: "Gallery Image 9",
      content: "This is the ninth image in the gallery.",
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

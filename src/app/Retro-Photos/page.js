"use client";

import { useState } from "react";

function Modal({ id, title, content, onClose }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        <div className="modal-action flex justify-center">
          <button onClick={onClose} className="btn">
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
    "https://visitpalmsprings.s3.amazonaws.com/wp-content/uploads/2021/08/11150756/classic-car.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
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
            className="max-h-fit max-w-full rounded-lg"
            src={src}
            alt={`Gallery Image ${index + 1}`}
          />
          <button
            className="btn mt-2"
            onClick={() => openModal(`modal_${index}`)}
          >
            Open Modal
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

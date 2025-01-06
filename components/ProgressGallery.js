import React, { useState } from "react";
import styles from "../styles/ProgressGallery.module.css";

const ProgressGallery = ({ images, captions }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.imageWrapper}>
        <p className={styles.caption}>{captions[currentImage]}</p>
        <img
          src={images[currentImage]}
          alt={captions[currentImage]}
          onClick={openModal}
        />
        <button className={styles.arrowLeft} onClick={showPrevImage}>
          &lt;
        </button>
        <button className={styles.arrowRight} onClick={showNextImage}>
          &gt;
        </button>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <img
              src={images[currentImage]}
              alt={captions[currentImage]}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressGallery;

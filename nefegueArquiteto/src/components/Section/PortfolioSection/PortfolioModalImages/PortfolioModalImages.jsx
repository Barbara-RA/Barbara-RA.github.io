import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../../../Loader/Loader";
import styles from "./PortfolioModalImages.module.css";

const PortfolioModalImages = ({ isOpen, onClose, category, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setZoom(false); // 🔹 Reseta o zoom ao abrir o modal
    }
  }, [isOpen]);

  useEffect(() => {
    setIsLoading(true);
    setZoom(false); // 🔹 Reseta o zoom ao trocar de imagem
    const img = new Image();
    img.src = images[currentIndex];
    img.onload = () => setIsLoading(false);
  }, [currentIndex, images]);

  if (!isOpen) return null;

  const goToPrevious = () => {
    if (!zoom) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsLoading(true);
    }
  };

  const goToNext = () => {
    if (!zoom) {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsLoading(true);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || zoom) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      goToNext();
      setIsDragging(false);
    } else if (diffX < -50) {
      goToPrevious();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {/* Botão de fechar estilizado */}
        <button className={styles.closeButton} onClick={onClose}>✖</button>

        {/* Título da categoria */}
        <h2 className={styles.modalTitle}>
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </h2>


        {/* Loader enquanto a imagem carrega */}
        {isLoading && <Loader />}

        {/* Área da imagem principal com transição suave */}
        <div
          className={styles.imageWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className={styles.navButton} onClick={goToPrevious}>‹</button>

          <img
            src={images[currentIndex]}
            alt={`${category}-${currentIndex}`}
            className={`${styles.mainImage} ${zoom ? styles.zoomed : styles.normal}`}
            onClick={toggleZoom}
          />

          <button className={styles.navButton} onClick={goToNext}>›</button>
        </div>

        {/* Miniaturas das imagens */}
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${category}-thumb-${index}`}
              className={`${styles.thumbnail} ${currentIndex === index ? styles.activeThumbnail : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PortfolioModalImages.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PortfolioModalImages;

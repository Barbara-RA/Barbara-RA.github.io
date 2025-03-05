import { useEffect, useState } from "react";
import portfolioSlides from "../../../../data/portfolioSlides.json";
import portfolioImages from "../../../../data/portfolioImages.json";
import PortfolioModalImages from "../PortfolioModalImages/PortfolioModalImages";
import Button from "../../../Common/Button.jsx";
import styles from "./PortfolioMobile.module.css";

const PortfolioMobile = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    if (portfolioSlides.slides) {
      setSlides(portfolioSlides.slides);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      goToNextSlide();
      setIsDragging(false);
    } else if (diffX < -50) {
      goToPreviousSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Abre o modal com as imagens da categoria selecionada
  const openModal = (category) => {
    const images = portfolioImages[category] || [];
    setCategoryImages(images);
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory("");
    setCategoryImages([]);
  };

  // ** WhatsApp Link **
  const whatsappNumber = "553484283527";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (slides.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <section className={styles.portfolioSection}>
      <div
        className={styles.carouselContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={goToPreviousSlide}
          className={`${styles.navButtonLeft}`}
          disabled={currentIndex === 0}
        ></button>

        {/* Quando o usuário clica na imagem, o modal é aberto com a categoria correta */}
        <div
          className={styles.slidePortfolio}
          onClick={() => openModal(slides[currentIndex].id)}
        >
          <img
            src={slides[currentIndex]?.imageMobile}
            alt={slides[currentIndex]?.title}
            className={styles.portfolioImage}
          />
          <div className={styles.overlay}>
            <h3 className={styles.overlayTitle}>{slides[currentIndex]?.title}</h3>
            <button className={styles.detailsButton}>
              <img src="/icons/seta.png" alt="Ver Mais" className={styles.arrow} />
            </button>
          </div>
        </div>

        <button
          onClick={goToNextSlide}
          className={`${styles.navButtonRight}`}
          disabled={currentIndex === slides.length - 1}
        ></button>
      </div>

      <div className={styles.pagination}>
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`${styles.dotPortfolio} ${currentIndex === index ? styles.activeDotPortfolio : ""
              }`}
          ></span>
        ))}
      </div>

      {/* ✅ Botão atualizado para usar o componente `Button.jsx` */}
      <div className={styles.ctaContainer}>
        <Button text="Solicite um orçamento" link={whatsappLink} backgroundColor="var(--cor-secundaria)" />
      </div>


      {/* Chama o modal para exibir as imagens da categoria selecionada */}
      {isModalOpen && selectedCategory && (
        <PortfolioModalImages
          isOpen={isModalOpen}
          onClose={closeModal}
          category={selectedCategory}
          images={categoryImages}
        />
      )}
    </section>
  );
};

export default PortfolioMobile;

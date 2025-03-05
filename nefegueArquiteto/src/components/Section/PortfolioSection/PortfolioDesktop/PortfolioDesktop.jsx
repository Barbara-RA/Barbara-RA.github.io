import { useState } from "react";
import portfolioSlides from "../../../../data/portfolioSlides.json";
import portfolioImages from "../../../../data/portfolioImages.json";
import PortfolioModalImages from "../PortfolioModalImages/PortfolioModalImages";
import Button from "../../../Common/Button.jsx";
import styles from "./PortfolioDesktop.module.css";

const PortfolioDesktop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryImages, setCategoryImages] = useState([]);

  const slides = portfolioSlides.slides;

  const openModal = (category) => {
    // Busca as imagens da categoria no JSON
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

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className={styles.gridContainer}>
        {slides.map((slide) => (
          <div key={slide.id} className={styles.card} onClick={() => openModal(slide.id)}>
            <img
              src={slide.imageDesktop}
              alt={slide.title}
              className={styles.cardImage}
            />
            <div className={styles.cardOverlay}>
              <h3 className={styles.cardTitle}>{slide.title}</h3>
              <button className={styles.cardButton}>
                <img src="/icons/seta.png" alt="Ver Mais" className={styles.arrow} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Botão atualizado para usar o componente `Button.jsx` */}
      <div className={styles.ctaContainer}>
        <Button text="Solicite um orçamento" link={whatsappLink} backgroundColor="var(--cor-secundaria)" />
      </div>


      {/* Chamando o modal para exibir as imagens da categoria */}
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

export default PortfolioDesktop;

import React, { useEffect, useState } from 'react';
import Button from "../../Common/Button";
import ModalFormSection from '../ModalFormSection/ModalFormSection';
import styles from "./HomeSection.module.css";

const HeroContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className={styles.heroContent}>
      <img src="images/logo.svg" alt="logo" />
      <p className={styles.heroDescription}>
        Venha descobrir quem é você por trás de suas inseguranças e medos, 
        reconstruindo seu mundo interno e colorindo-o com mais autoestima!
      </p>
      <Button name="Entre em contato" style="homeButton" onClick={openModal} />
      <ModalFormSection isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroContent;

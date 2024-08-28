import React from 'react';
import styles from './ModalFormSection.module.css';

function ModalFormSection({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.modalContent}>
                    <div className={styles.imageContainer}></div> {/* A imagem será definida no CSS */}
                    <div className={styles.formContainer}>
                        <h2>Entre em contato</h2>
                        <form>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" name="name" placeholder="" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="phone1">Celular:</label>
                                <input type="text" id="phone1" name="phone1" placeholder="" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" name="email" placeholder="" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Mensagem:</label>
                                <textarea id="message" name="message" placeholder="Olá, tudo bem? Gostaria de agendar uma consulta"></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFormSection;

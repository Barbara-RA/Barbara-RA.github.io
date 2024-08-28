import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Ajuste a altura de rolagem conforme necessário
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Aqui estamos combinando as classes
    const headerClasses = scrolled ? `${styles.stickyHeader} ${styles.scrolled}` : styles.stickyHeader;

    return (
        <span>
            <header className={headerClasses}>
                <nav>
                    <ul>
                        <li><a href="#terapia">TERAPIA</a></li>
                        <li><a href="#sobre">SOBRE</a></li>
                        <li><a href="#servicos">SERVIÇOS</a></li>
                        <li><a href="#duvidas">DÚVIDAS</a></li>
                        <li><a href="#contato">CONTATO</a></li>
                    </ul>
                </nav>
            </header>
        </span>
    );
};

export default Header;

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.css';
import {HashLink as Link} from "react-router-hash-link";

export default function Header() {

    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { titulo: 'HOME', id: 'home' },
        { titulo: 'PORTFÓLIO', id: 'portfolio' },
        { titulo: 'SOBRE MIM', id: 'about-me' },
        { titulo: 'OBRAS', id: 'social-proof' },
        { titulo: 'DÚVIDAS', id: 'faq' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className={styles.header}>
                <Link smooth to="#home" scroll={(el) => {
                    const scrollThreshold = window.innerHeight * (isDesktop ? 0.15 : 0.2);
                    const y = el.getBoundingClientRect().top + window.scrollY - scrollThreshold;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }}><img src="/images/homeLogo.png" className={styles.homeLogo} /></Link>
                <button onClick={toggleMenu} className={styles.menuButton} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={64}/> : <Menu size={64}/>}
                </button>
                <nav className={styles.navbar}>
                    <ul className={styles.menuListDesktop}>
                        {menuItems.map((item) => (
                            <li key={item.id} className={styles.navbarItem}>
                                <Link
                                    smooth
                                    to={`#${item.id}`}
                                    className={styles.navbarLink}
                                    scroll={(el) => {
                                        const scrollThreshold = window.innerHeight * 0.2;
                                        const y = el.getBoundingClientRect().top + window.scrollY - scrollThreshold;
                                        window.scrollTo({top: y, behavior: 'smooth'});
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.titulo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a className={styles.instagramNavbarLink} target="_blank" href="https://www.instagram.com/nefeguearquitetura/"><img src={'/icons/InstaFooter.png'} alt="instagram" /></a>
            </header>

            <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`} onClick={toggleMenu}></div>

            <nav className={`${styles.sideMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <ul className={styles.menuList}>
                    {menuItems.map((item) => (
                        <li key={item.id} className={styles.menuItem}>
                            <Link
                                smooth
                                to={`#${item.id}`}
                                className={styles.menuLink}
                                scroll={(el) => {
                                    const scrollThreshold = window.innerHeight * 0.2;
                                    const y = el.getBoundingClientRect().top + window.scrollY - scrollThreshold;
                                    window.scrollTo({top: y, behavior: 'smooth'});
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.titulo}
                            </Link>
                        </li>
                    ))}
                    <li><a target="_blank" href="https://www.instagram.com/nefeguearquitetura/"><img src={'/icons/InstaFooter.png'} alt="instagram" className={styles.instagram}/></a></li>
                </ul>
            </nav>
        </>
    );
}
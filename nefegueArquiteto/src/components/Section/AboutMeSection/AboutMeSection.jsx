import React from 'react';
import { useMediaQuery } from 'react-responsive'; // Importação do useMediaQuery
import styles from './AboutMeSection.module.css';
import Titles from '../../Common/Titles';

function AboutMeSection() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <section className={styles.aboutMeSection} id="about-me">
            {isDesktop ? (
                // Layout para desktop
                <div>
                    <div>
                            <Titles text='Expertise em Arquitetura e Design' />
                            <p>Meu nome é <strong>Eliel Neffeggue</strong> e desde <strong>2016</strong>, atuo como <strong>arquiteto e designer de interiores</strong>, desenvolvendo soluções que valorizam a individualidade de cada cliente.</p>
                            <p>Meu foco é criar <strong>espaços</strong> que tragam <strong>bem-estar e funcionalidade</strong>.</p>
                            <p>Cada projeto é uma oportunidade de transformar ambientes em <strong>experiências únicas</strong>, com atenção aos detalhes que fazem a diferença.</p>
                    </div>
                    
                    <div className={styles.imgArquiteto}></div>
                </div>
            ) : (
                // Layout para mobile
                <div>
                    <div>
                        <Titles text='Expertise em Arquitetura e Design' />
                    </div>

                    <div>
                        <div className={styles.imgArquiteto}></div>
                        <div>
                            <p>Meu nome é <strong>Eliel Neffeggue</strong> e desde <strong>2016</strong>, atuo como <strong>arquiteto e designer de interiores</strong>, desenvolvendo soluções que valorizam a individualidade de cada cliente.</p>
                            <p>Meu foco é criar <strong>espaços</strong> que tragam <strong>bem-estar e funcionalidade</strong>.</p>
                            <p>Cada projeto é uma oportunidade de transformar ambientes em <strong>experiências únicas</strong>, com atenção aos detalhes que fazem a diferença.</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default AboutMeSection;

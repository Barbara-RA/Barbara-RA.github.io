import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import styles from './CardAuthority.module.css';

function CardAuthority() {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef(null);

    const data = [
        {
            img: '/icons/authorityPencil.png',
            quantity: 50,
            description: 'PROJETOS CONCEBIDOS',
        },
        {
            img: '/icons/authorityRuler.png',
            quantity: 70000,
            suffix: ' m²',
            description: 'ÁREA PLANEJADA',
        },
        {
            img: '/icons/authorityHouse.png',
            quantity: 35,
            description: 'PROJETOS EXECUTADOS',
        },
    ];

    // Observa quando a seção entra na viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // Desconecta para contar apenas uma vez
                }
            },
            { threshold: 0.5 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.cardAuthority} ref={sectionRef}>
            {data.map((item, index) => (
                <div key={index} className={styles.cardCont}>
                    <img src={item.img} alt={item.description} className={styles.image} />
                    <p className={styles.quantity}>
                        {startCount && (
                            <CountUp
                                start={0}
                                end={item.quantity}
                                duration={2.5}
                                prefix="+"
                                suffix={item.suffix || ''}
                            />
                        )}
                    </p>
                    <p className={styles.description}>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default CardAuthority;

import { useEffect, useState } from "react";
import styles from './HomeSection.module.css';
import Button from "../../Common/Button.jsx";

export default function HomeSection() {
    const [animateTitle, setAnimateTitle] = useState(false);

    useEffect(() => {
        setAnimateTitle(true);
    }, []);

    const whatsappNumber = "553484283527";
    const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <h1
                    className={`${styles.homeTitle} ${animateTitle ? styles.animate : ""}`}
                >
                    Transformando espaços em experiências únicas.
                </h1>
                <Button text="Solicite um orçamento" link={whatsappLink} />
            </div>
        </section>
    );
}

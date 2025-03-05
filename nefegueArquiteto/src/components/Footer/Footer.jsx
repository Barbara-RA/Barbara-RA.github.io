import React from 'react';
import { useMediaQuery } from 'react-responsive'; // Importação do useMediaQuery
import styles from './Footer.module.css';


function Footer() {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    return (
        <section className={styles.footer}>
            {isDesktop ? (
                // Layout para desktop
                <div>
                    <div>
                        <img  className={styles.logoFooter} src="images/Footer_logo.jpg" alt="Logomarca Nefegue" />
                    </div>
                    <div>
                        <p><b>Horário de Atendimento:</b> Segunda a Sexta, das 9h às 18h.</p>
                        <p><b>Contato:</b>  (34) 9 8428-3527</p>
                        <p><b>Todos os direitos reservados</b></p>
                    </div>
                    <div>
                        <div>
                        <p><b>Siga-me no Instagram</b></p>
                        <a href="https://www.instagram.com/nefeguearquitetura/" target="_blank" aria-label="link para instagran Nefegue Arquitetura">
                        <div className={styles.instafooter}></div>
                        </a>
                        </div>
                        <img className={styles.celularFooter} src="/images/FooterCelular.png" alt="" />
                    </div>
                </div>
            ) : (
                // Layout para mobile
                <div>
                    <div>
                        <p><b>Siga-me no Instagram</b></p>
                        <a href="https://www.instagram.com/nefeguearquitetura/" target="_blank" aria-label="link para instagran Nefegue Arquitetura">
                        <div className={styles.instafooter}></div>
                        </a>
                    </div>

                    <div>
                        <p><b>Horário de Atendimento:</b> Segunda a Sexta, das 9h às 18h.</p>
                        <p><b>Contato:</b>  (34) 9 8428-3527</p>
                    </div>

                    <div>
                        <img className={styles.logoFooter} src="images/Footer_logo.jpg" alt="Logomarca Nefegue" />
                        <p><b>Todos os direitos reservados</b></p>
                    </div>

                </div>
            )}
        </section>
    );
}

export default Footer;
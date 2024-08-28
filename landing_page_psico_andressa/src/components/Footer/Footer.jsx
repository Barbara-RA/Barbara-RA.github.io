import React from 'react';
import css from './Footer.module.css'
import SocialMedia from './SocialMedia/SocialMedia';

function Footer() {

    const infoSocialMedia = [
        {
            image:"/footer/instagram.png",
            link:"https://www.instagram.com/psiandressaa/",
            descricao:"Icone instagram"
        }, 
        {
            image:"/footer/linkedin.png",
            link:"https://www.linkedin.com/in/andressa-borges-machado-b843691a3/",
            descricao:"Icone linkedin"
        },
        {
            image:"/footer/ebook.png",
            link:"https://hotmart.com/pt-br/marketplace/produtos/autoestima-e-vida/A88644031R",
            descricao:"Icone ebook"
        }
    ]

    return (
        <footer className={css.footer}>
            <div className={css.footerTop}></div>
            <div>
                <div>
                    {infoSocialMedia.map((item, index) => (
                        <SocialMedia
                            key={index}
                            image={item.image}
                            link={item.link}
                            descricao={item.descricao}
                        />
                    ))}
                </div>
                <div>
                    <img src="/footer/logo_footer.png" alt="Logo psicologa" />
                </div>
                <div>
                    <ol>
                        <li><a href="">Terapia</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Dúvidas</a></li>
                        <li><a href="">Contato</a></li>
                    </ol>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
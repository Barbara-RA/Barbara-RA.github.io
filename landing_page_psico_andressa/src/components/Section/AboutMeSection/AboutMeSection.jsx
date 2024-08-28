import React from 'react';
import Title from '../../Common/Title';
import styles from './AboutMeSection.module.css';
import ContentBlock from '../../Common/ContentBlock';

function AboutMeSection() {
    const boxTopicos = [
        { id: 0, title: "Formação Acadêmica", description: "Graduada em Psicologia e pós-graduada em Psicologia Analítica de Carl Gustav Jung. Invisto constantemente em cursos que abordam a cura do feminino, maternidade, autoconhecimento e relacionamentos." },
        { id: 1, title: "Abordagem Terapêutica", description: "Combino a psicoterapia com a psicoeducação, utilizando as teorias da Análise Transacional, Psicologia Analítica e Psicanálise, para atuar no desenvolvimento da autonomia do paciente." },
        { id: 2, title: "Valores e Missão", description: "Comprometida com a formação contínua, ajudo minhas clientes a desenvolver autoestima através de um profundo processo de autoconhecimento, com o objetivo de alcançar saúde integral, autonomia e relacionamentos mais saudáveis." },
        { id: 3, title: "Diferenciais", description: "Trabalho com uma abordagem dinâmica e personalizada, buscando desenvolver a sua autonomia e focando em um processo fluido, com cada vez menos dependência da psicoterapia para compreender conflitos internos e externos." },
        { id: 4, title: "Experiência", description: "Ministrei palestras e treinamentos na área da saúde, além de atuar com Terapia Sistêmica, o que me possibilitou trabalhar com dinâmicas e padrões familiares." }
    ]

    return (
        <section className={styles.aboutMeSection}>
            <div>
                <Title title={'Sobre Minha Jornada'}/>
                <div>
                    <div>
                        <ContentBlock title={boxTopicos[0].title} description={boxTopicos[0].description} />
                        <ContentBlock title={boxTopicos[1].title} description={boxTopicos[1].description} />
                    </div>
                    <div className={styles.boxImages}>
                        <img src="images/andressa1.svg" alt="Foto da Psicolaga Andressa em um auditório" />
                        <img src="images/andressa2.svg" alt="Foto da Psicolaga Andressa" />
                    </div>
                    <div>
                    <ContentBlock title={boxTopicos[2].title} description={boxTopicos[2].description} />
                    <ContentBlock title={boxTopicos[3].title} description={boxTopicos[3].description} />
                    </div>
                </div>
                <div className={styles.centralizedContent}>
                <ContentBlock title={boxTopicos[4].title} description={boxTopicos[4].description} />
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;
import { useEffect, useState } from 'react';
import FAQItem from './FAQItem';
import style from './FAQSection.module.css';
import Titles from '../../Common/Titles';

function FAQSection() {

    const [questions, setQuestions] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        fetch('/questions/faq.json')
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
            .catch(
                err => console.error(err)
            )
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className={style.faqSection} id='faq'>
            <div className={style.FaqWrapper}>
                <div id={'faq'} className={style.faqBody}>
                    <Titles text='Perguntas Frequentes' />
                    <div className={style.faqList}>
                        {questions.map((item, index) => (
                            <FAQItem
                                key={index}
                                index={index}
                                item={item}
                                isOpen={openIndex === index}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                </div>
                <div className={style.faqContainerImage}>
                    <div className={style.faqBorderLeft}></div>
                    <div className={style.faqImage}>
                        <img src="/images/imageFaq.jpeg" alt="imagem de uma casa" />
                    </div>
                    <div className={style.faqBorderRight}></div>
                </div>
            </div>
        </section>
        
    );
}

export default FAQSection;
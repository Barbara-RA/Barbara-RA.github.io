import React from 'react';
import style from './FAQSection.module.css';

function FAQItem({ index, item, isOpen, onToggle }) {

    return (
        <div
            className={`${style.faqDetails} ${isOpen ? style.faqDetailsOpen : ''}`}
            onClick={() => onToggle(index)}
        >
            <summary className={style.faqSummary}>
                {item.question}
            </summary>
            <p className={`${style.faqDetailsContent} ${isOpen ? style.faqContentOpen : ''}`}>
                {item.response}
            </p>
        </div>
    );
}

export default FAQItem;
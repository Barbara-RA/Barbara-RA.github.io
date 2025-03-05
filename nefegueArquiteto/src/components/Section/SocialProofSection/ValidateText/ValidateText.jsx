import React from 'react';
import style from '../ValidateText/ValidateText.module.css'

function ValidateText( {text} ) {

    const wordsToHighlight = ["desconectar", "refúgio", "ideal", "conforto", "e", "tranquilidade,", "lar", "projetado", "funcionalidades", "modernos", "acolhedores", "elegância", "rusticidade", "convivência", "bem-estar", "luz", "natural", "materiais", "naturais", "detalhes", "sofisticados."];

    const highlightedText = text.split(" ").map((word, index) => {
        return wordsToHighlight.includes(word) ? (
            <span key={index} className={style.highlight}>{word} </span>
          ) : (
            word + " "
        );
    });

    return (
        <p>{highlightedText}</p>
    );
}

export default ValidateText;
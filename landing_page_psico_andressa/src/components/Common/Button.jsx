import React from 'react';
import styles from './css/Common.module.css';

function Button({ name, path, onClick, style: variant = "" }) {
    return (
        <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
            {name}
        </button>
    );
}

export default Button;

import styles from './css/Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ text, link, backgroundColor }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button 
                className={styles.button} 
                style={{ backgroundColor: backgroundColor || 'var(--cor-primaria)' }}
            >
                {text}
            </button>
        </a>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string, // ✅ Agora aceita cores dinâmicas
};

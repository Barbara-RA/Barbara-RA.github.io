import styles from './css/Common.module.css';

function Title({ title, style: variant }) {
    return ( 
        <h2 className={`${styles.titleDefault} ${styles[variant]}`}>{title}</h2>
    );
}

export default Title;

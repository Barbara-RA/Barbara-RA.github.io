import styles from './css/Common.module.css';

function ContentBlock({title, description}) {
    return (
        <div className={styles.contentBlock}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ContentBlock;
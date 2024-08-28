import styles from './SpecialtySection.module.css';
import ContentBlock from './../../Common/ContentBlock';

function ContentBox({ image, title, description, imageDescription }) {
    return (
        <div className={styles.contentBox}>
            <img src={image} alt={imageDescription} />
            <ContentBlock title={title} description={description} />
        </div>
    );
}

export default ContentBox;

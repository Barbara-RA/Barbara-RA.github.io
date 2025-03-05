
import styles from './AuthoritySection.module.css';
import CardAuthority from './CardAuthority/CardAuthority';


function AuthoritySection() {
    return (
        <section className={styles.authoritySection} id="authority">
            <div>
                <CardAuthority/>
            </div>
        </section>
    );
}

export default AuthoritySection;
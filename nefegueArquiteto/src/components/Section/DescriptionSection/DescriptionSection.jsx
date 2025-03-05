import styles from './DescriptionSection.module.css';

export default function DescriptionSection() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContent}>
                <img src="/images/Footer_logo.jpg" alt="NEFEGUE" className={styles.logo}/>
                <aside className={styles.sidebar}>
                  <p>
                      Nefegue Arquitetura cria <strong>projetos personalizados</strong> que combinam <strong>design</strong> e funcionalidade. Atendemos <strong>em todo o Brasil</strong>, sempre focados em refletir a <strong>identidade</strong> dos clientes.
                  </p>
                  <p>
                      Transformamos ambientes com <strong>soluções práticas</strong> e cheias de <strong>estilo</strong>.
                  </p>
                </aside>
            </div>
        </section>
    );
}

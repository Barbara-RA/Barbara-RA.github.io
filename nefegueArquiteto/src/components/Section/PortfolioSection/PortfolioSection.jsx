import { useMediaQuery } from 'react-responsive';
import Titles from '../../Common/Titles';
import PortfolioDesktop from './PortfolioDesktop/PortfolioDesktop';
import PortfolioMobile from './PortfolioMobile/PortfolioMobile';
import css from './PortfolioSection.module.css';

const PortfolioSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section className={css.PortfolioSection} id="portfolio">
      <div className={css.publications}>
      <Titles text="Portfólio" />
        {isMobile ? <PortfolioMobile /> : <PortfolioDesktop />}
      </div>
    </section>
  );
};

export default PortfolioSection;

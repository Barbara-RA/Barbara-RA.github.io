import PropTypes from 'prop-types';
import styles from './css/Common.module.css';

function Titles ({ text }) {
    return (
      <div className={styles.titles}>
        <h2>{text}</h2>
      </div>
    );
}
Titles.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Titles;

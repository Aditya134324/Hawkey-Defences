import styles from './navigation.module.css';
import logo from './logo.png';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      

      <img src={logo} className={styles.logo} alt="logo" />


      <ul>
        <li>
          <Link to="/" className={styles.link}>Capabilities</Link>
        </li>
        <li>
          <Link to="/serve" className={styles.link}>Who We Serve</Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>About</Link>
        </li>
        <li>
          <Link to="/news" className={styles.link}>NewsRoom</Link>
        </li>
      </ul>
      <Link to="/contact" className={styles.btn}>
        CONTACT US
      </Link>

    </nav>
  );
};

export default Navigation;
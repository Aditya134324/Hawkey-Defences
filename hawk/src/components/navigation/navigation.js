import styles from './navigation.module.css';
import logo from './logo.png';

const Navigation =()=>{
    return(
        <>
            <nav className={styles.nav}>
                <img src={logo} className={styles.logo} alt='logo'/>
                <ul>
                    <li><a href="index.html">Capabilities</a></li>
                    <li><a href="about.html">Who We Serve</a></li>
                    <li><a href="contact.html">About</a></li>
                    <li><a href="contact.html">NewsRoom</a></li>
                </ul>
                <button><a href="">CONTACT US</a></button>
            </nav>
    </>
    );
}
export default Navigation;
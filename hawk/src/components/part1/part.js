import styles from './part.module.css';

const Part = () => {
  return (
    <div className={`${styles.container} hidden`} >
     <div>
        <h2 className={styles.heading}>OUR CAPABILITES</h2>
        <p className={styles.paragraph}>
          At Hawk, we are committed to delivering cutting-edge defence solutions that meet the evolving needs of our clients. Our capabilities span a wide range of areas, including:       
        </p>
        <ul className={styles.list}>
            <li>Advanced Weapon Systems</li>
            <li>Intelligence, Surveillance, and Reconnaissance (ISR)</li>
            <li>Cybersecurity Solutions</li>
            <li>Unmanned Aerial Vehicles (UAVs)</li>
            <li>Electronic Warfare Systems</li>
            <li>Training and Simulation</li>
        </ul>
        <p className={styles.paragraph}>
            Our team of experts works closely with our clients to understand their unique challenges and develop tailored solutions that enhance their operational capabilities. We leverage the latest technologies and industry best practices to ensure that our products and services are of the highest quality and reliability.
        </p>
     </div>
     <div className={styles.imageContainer}>    
        <img src="/assets/capabilities.png" alt="Capabilities" className={styles.image} />
     </div>
     <div className={styles.imageContainer}>
        <img src="/assets/capabilities2.png" alt="Capabilities" className={styles.image} />
     </div>
    </div>
  );
};

export default Part;
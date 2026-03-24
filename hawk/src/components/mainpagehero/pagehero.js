import { useEffect, useState } from 'react';
import styles from './pagehero.module.css';

const PageHero =()=>{
    const [planeOffset, setPlaneOffset] = useState(0);

    useEffect(() => {
      const updatePlanePosition = () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = height > 0 ? winScroll / height : 0;
        const maxTravel = Math.max(window.innerWidth - 30, 0);
        const nextOffset = scrollProgress * maxTravel;
        setPlaneOffset(Math.min(Math.max(nextOffset, 0), maxTravel));
      };

      window.addEventListener('scroll', updatePlanePosition);

      return () => {
        window.removeEventListener('scroll', updatePlanePosition);
      };
    }, []);

    return (
        <div className='hero'>
        <section className={`${styles.section} hidden`}>
           <p className={styles.p1}>--------------------------------<br/>TRUSTED DEFENCE SOLUTIONS <br/>--------------------------------</p>
           
           <pre className={styles.stripes}> ///////////////////////////////////</pre>
            REVOLUTIONISING <br/> THE DEFENCE 
            <strong> WITH MORDERN TECHNOLOGY</strong>
           <pre className={styles.stripes}> ///////////////////////////////////</pre>
           <div className={styles.planeTrack}>
            <img
              className={styles.plane}
              style={{ transform: `translateX(${planeOffset}px)` }}
              src='/assets/icons8-fighter-jet-30.png'
              alt='fighter jet'
            />
           </div>
        </section>
        </div>
    )
}
export default PageHero;
import styles from './pagehero.module.css';

const PageHero =()=>{

    return (
        <div className='hero'>
        <section className={`${styles.section} hidden`}>
           <p className={styles.p1}>--------------------------------<br/>TRUSTED DEFENCE SOLUTIONS <br/>--------------------------------</p>
           
           <pre> ///////////////////////////////////</pre>
            REVOLUTIONISING <br/> THE DEFENCE 
            <strong> WITH MORDERN TECHNOLOGY</strong>
           <pre> ///////////////////////////////////</pre>
        </section>
        </div>
    )
}
export default PageHero;
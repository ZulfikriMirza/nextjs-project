'use client'

import styles from './profile.module.css';
import { useState } from 'react'; 

export default function Profile(){
    const [aboutMe, setAboutMe] = useState(false);

    const toggleAboutMe = () => {
        setAboutMe(!aboutMe);
    }
    return(

        <section className={styles.Profile}>

            <div className={styles.Profile__content}>
                    {!aboutMe ? (
                        <>

                            {/* <div className={styles.Profile__title}>
                                <h1 className='text-5xl font-extrabold'>Frontend Web Developer</h1>
                            </div> */}
                            <div className={styles.title}>
                                <h1 className={`${styles.Profile__title} text-5xl font-extrabold`}>Frontend </h1>
                                <h1 className={`${styles.Profile__title} text-5xl font-extrabold`}>Web </h1>
                                <h1 className={`${styles.Profile__title} text-5xl font-extrabold`}>Developer </h1>
                            </div>

                            {/* <p className='text-xs'>or husband?!</p> */}
                        </>
                    ) : (
                        <>
                            <div class="lines"></div>
                            <article className={`${styles.newArticle} text-xl font-bold`}>
                                Highly motivated and diligent software engineer with a strong will to succeed and a passion for continuous learning.Equipped with a genuine 
                                curiosity for emerging technologies,I always eager to expand my knowledge base.
                            </article>
                        </>
                    )}
                    <div className={styles.informationButton}>
                        <button className={styles.newInformation} onClick={toggleAboutMe}>About me</button>
                    </div>

            </div>
        </section>
    )
}
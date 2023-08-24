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
                            <h1 className='text-5xl font-extrabold'>Your Future Frontend Developer</h1>
                            <p className='text-xs'>or husband?!</p>
                        </>
                    ) : (

                        <article className={`${styles.newArticle} text-xl font-bold`}>
                            Highly motivated and diligent software engineer with a strong will to succeed <br />
                            and a passion for continuous learning. Equipped with a genuine 
                            curiosity for  <br />emerging technologies,I always eager to expand my knowledge base.
                        </article>
                    )}
                    <div className={styles.informationButton}>
                        <button className={styles.newInformation} onClick={toggleAboutMe}>About me</button>
                    </div>

            </div>
        </section>
    )
}
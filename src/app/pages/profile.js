'use client'

import styles from './profile.module.css';
import { useState } from 'react';
import photo from '../assets/Photo.jpg'
import Image from 'next/image';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedln from '../assets/linkedln-white.png'
import Link from 'next/link';

export default function Profile(){
    // const [aboutMe, setAboutMe] = useState(false);

    // const toggleAboutMe = () => {
    //     setAboutMe(!aboutMe);
    // }
    return(

        <section className={styles.Profile}>

            <div className={styles.Profile__content}>
                            <div className={styles.title}>
                                <h5 className={`${styles.Profile__title} text-5xl font-extrabold`}>About </h5>
                                <h5 className={`${styles.Profile__title} text-5xl font-extrabold`}>Me </h5>
                                {/* <h5 className={`${styles.Profile__title} text-5xl font-extrabold`}>Frontend </h5>
                                <h5 className={`${styles.Profile__title} text-5xl font-extrabold`}>Developer </h5> */}
                            </div>
                            <div className={styles.aboutContent}>
                                <div className={styles.note}>
                                    <article className={`${styles.newArticle} text-xl font-bold`}>
                                        Highly motivated and diligent software engineer with a strong will to succeed and a passion for continuous learning. Equipped with a genuine  
                                        curiosity for emerging technologies, I always eager to expand my knowledge base. 

                                    </article>
                                    <ul>
                                            <li>Name: Zulfikri Mirza</li>
                                            <li>Degree: Bachelor of Computer Science/Informatics</li>
                                            <li>Email: zulfikrimirza3@gmail.com</li>
                                        </ul>
                                </div>

                                <div className={styles.photos}>
                                    <Image
                                                src={photo}
                                                width={200}
                                                height={200}
                                                alt="my Photo" />
                                </div>
                            </div>
                            <ul className={styles.socialMedia}>
                                <li>
                                    <Link href="https://github.com/ZulfikriMirza" target='_blank'>
                                        <Image
                                                    src={github}
                                                    width={50}
                                                    height={50}
                                                    alt="Github" />
                                    </Link>
                                </li>

                                <li>
                                    <Link href="https://www.instagram.com/fikri.mirzaa3/"  target='_blank'>
                                    <Image
                                                src={instagram}
                                                width={50}
                                                height={50}
                                                alt="Instagram" />
                                    </Link>
                                </li>
                                                
                                <li>
                                    <Link href="https://www.linkedin.com/in/zulfikri-mirza-11a7061a2/"  target='_blank'>
                                    <Image
                                                src={linkedln}
                                                width={50}
                                                height={50}
                                                alt="Linkedln" />
                                    </Link>
                                </li>

                            </ul>

                    {/* <div className={styles.informationButton}>
                        <button className={styles.newInformation} onClick={toggleAboutMe}>About me</button>
                    </div> */}

            </div>
        </section>
    )
}
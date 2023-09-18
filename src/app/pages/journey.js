'use client'

import styles from './journey.module.css';
import { useState } from 'react';
import Image from 'next/image';
import study from '../assets/study.jpeg'
import himpunan from '../assets/himpunan.jpg'
import PPI from '../assets/PPI.JPG'


export default function Journey() {
    const [HideJourney, setHideJourney] = useState(false)
    const [showEducation, setShowEducation] = useState(false)

    const toggleShowEducation = () => {
        setShowEducation(!showEducation)
    }

    const togglePhoto = () => {
        setHideJourney(!HideJourney)
    }

    return (
        <>
        <section className={styles.Journey} id='journey'>
            <h1 className={`${styles.Journey__title} 2xl:text-8xl xl:text-4xl md:text-base`} data-aos="fade-down" data-aos-duration="1000">My Journey !</h1>
            {!showEducation ? (
                <>
                    <button className={styles.ContentToggle} onClick={toggleShowEducation}>
                        <p className={styles.ToggleText}>See Education</p>
                    </button>
                    <div className={`${styles.Journey__content} flex justify-center`}>
        
                        <div className={`${styles.Journey__Experience} grid gap-16 md:gap-8`}>
                            <h2 data-aos="fade-down" data-aos-duration="1000" className={`${styles.Experience__title} 2xl:text-4xl xl:text-2xl md:text-base font-bold`}>Work and Organization Experience!</h2>
                            <div className={styles.timeline}>    
                                <ul className={`${styles.Experience__list} list-disc list-inside`}>
                                    <li>
                                        <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                            {!HideJourney ? (
                                                <>
                                                    <h2 className={styles.date}>Sep 2019 - Feb 2020</h2>
                                                    <h1>Study Abroad Scholarship awardee</h1>
                                                    <p>Study in Szent Istvan University(Known as M.A.T.E Today) Godollo, Hungary. funded by Erasmus and Dikti Indonesia,<br />Organized by Institut Teknologi Nasional Bandung</p>
                                                    <p>Skill : English</p>
                                                    <button className={styles.PhotosButton} onClick={togglePhoto}>See the Photo &#8594;</button>
                                                </>
                                            ) : (
                                                <>
                                                    <h2 className={styles.date}>Sep 2019 - Feb 2020</h2>
                                                    <Image
                                                    src={study}
                                                    width={400}
                                                    height={400}
                                                    alt="Picture of Study Abroad" />
                                                    <button onClick={togglePhoto}>Back to Description</button>
                                                </>
                                                )}
        
                                        </div>
                                        
                                    </li>
                                    <li>
                                    <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                    {!HideJourney ? (
                                                <>
                                                    <h2 className={styles.date}>Desember 2019 - January 2020</h2>
                                                    <h1>Leader of Food and Beverages Division in Road to PPI Program</h1>
                                                    <p>Helping Road to PPI Program that Held by Perhimpunan Pelajar Indonesia in Hungary</p>
                                                    <p>Skill : English, Communication</p>
                                                    <button className={styles.PhotosButton} onClick={togglePhoto}>See the Photo &#8594;</button>
                                                </>
                                            ) : (
                                                <>
                                                    <h2 className={styles.date}>Desember 2019 - January 2020</h2>
                                                    <Image
                                                    src={PPI}
                                                    width={1000}
                                                    height={1000}
                                                    alt="Picture of PPI" />
                                                    <button onClick={togglePhoto}>Back to Description</button>
                                                </>
                                                )}
                                            
        
                                        </div>
                                    </li>
        
                                    <li>
                                    <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                            <h2 className={styles.date}>Feb 2020 - Jul 2020</h2>
                                            <h1>Lab Assistant of Digital Image Processing</h1>
                                            <p>Teaching Informatics Students Digital Image Processing in Institut Teknologi Nasional Bandung</p>
                                            <p>Skill : Python, Deep Learning</p>
                                        </div>
                                    </li>
        
                                    <li>
                                    <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                            <h2 className={styles.date}>Jul 2020 - Sep 2020</h2>
                                            <h1>Internship as Web Developer</h1>
                                            <p>Developing UntukMasarin.com using Laravel Framework in PT Teknologi Wirausaha Bangsa</p>
                                            <p>Skill : Laravel, HTML, CSS</p>
                                        </div>
                                    </li>
        
                                    <li>
                                    <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                        {!HideJourney ? (
                                                <>
                                                    <h2 className={styles.date}>Jun 2020 - Jan 2021</h2>
                                                    <h1>Head Of Public Relations Division</h1>
                                                    <p>Himpunan Mahasiswa Informatika Itenas</p>
                                                    <p>Skill : Communication</p>
                                                    <button className={styles.PhotosButton} onClick={togglePhoto}>See the Photo &#8594;</button>
                                                </>
                                            ) : (
                                                <>
                                                    <h2 className={styles.date}>Jun 2020 - Jan 2021</h2>
                                                    <Image
                                                    src={himpunan}
                                                    width={400}
                                                    height={400}
                                                    alt="Picture of Himpunan" />
                                                    <button onClick={togglePhoto}>Back to Description</button>
                                                </>
                                                )}
                                            
        
                                        </div>
                                    </li>
        
        
                                    <li>
                                    <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                            <h2 className={styles.date}>Sep 2022 - Current</h2>
                                            <h1>Helpdesk Remittance Operation Application</h1>
                                            <p>Currently Working in PT Pos Indonesia (Persero) Under Outsourcing contract</p>
                                            <p>Skill : SQLServer, Analyzing Big Data and Transaction Log</p>
                                        </div>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
        
                        {/* <div className="Journey__Skill__Content grid gap-8">
                            <div data-aos="fade-left" data-aos-duration="2000" className="Journey__Skill ">
                                <h2 className='Skill__title 2xl:text-4xl xl:text-2xl md:text-base font-bold'>My Current Skill!</h2>
                                <ul className='Skill__list list-disc list-inside mt-8'>
                                    <li>
                                    Programming Language: Python, PHP, SQL
                                    </li>
                                    <li>
                                    Web Developing: Laravel Framework, Bootstrap, HTML, CSS, JS
                                    </li>
                                    <li>
                                    Other: VSCode, Git, Microsoft SQL Management Studio
                                    </li>
                                </ul>
                            </div>
                            
                        </div> */}
                    </div>

                </>
                ) : (
                <>
                    <button className={styles.ContentToggle} onClick={toggleShowEducation}>
                        <p className={styles.ToggleText}>See Work Experience</p>
                    </button>
                    <div className={`${styles.Journey__content} flex justify-center`}>
        
                        <div className={`${styles.Journey__Experience} grid gap-16 md:gap-8`}>
                            <h2 data-aos="fade-down" data-aos-duration="1000" className={`${styles.Experience__title} 2xl:text-4xl xl:text-2xl md:text-base font-bold`}>Education Journey!</h2>
                            <div className={styles.timeline}>    
                                <ul className={`${styles.Experience__list} list-disc list-inside`}>
                                    <li>
                                        <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                                    <h2 className={styles.date}>2014 - 2017</h2>
                                                    <h1>SMA Negeri 1 Bandung</h1>
                                                    <p>Address: Jl. Ir. H. Juanda No.93, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>

        
                                        </div>
                                        
                                    </li>
                                    <li>
                                    <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                                    <h2 className={styles.date}>Sep 2017 - Feb 2022</h2>
                                                    <h1>Institut Teknologi Nasional Bandung</h1>
                                                    <p>Fakultas Teknologi Industri, Jurusan Informatika</p>
                                        </div>
                                    </li>
        
                                    <li>
                                        <div className={styles.timeline__content} data-aos="fade-right" data-aos-duration="1000" style={{ order: 1 }}>
                                            {!HideJourney ? (
                                                <>
                                                    <h2 className={styles.date}>Sep 2019 - Feb 2020</h2>
                                                    <h1>Study Abroad Scholarship awardee</h1>
                                                    <p>Study in Szent Istvan University(Known as M.A.T.E Today) Godollo, Hungary. funded by Erasmus and Dikti Indonesia,<br />Organized by Institut Teknologi Nasional Bandung</p>
                                                    <p>Skill : English</p>
                                                    <button className={styles.PhotosButton} onClick={togglePhoto}>See the Photo &#8594;</button>
                                                </>
                                            ) : (
                                                <>
                                                    <h2 className={styles.date}>Sep 2019 - Feb 2020</h2>
                                                    <Image
                                                    src={study}
                                                    width={400}
                                                    height={400}
                                                    alt="Picture of Study Abroad" />
                                                    <button onClick={togglePhoto}>Back to Description</button>
                                                </>
                                                )}
        
                                        </div>
                                    </li>

                                
                                </ul>
                            </div>
                        </div>
        
                        {/* <div className="Journey__Skill__Content grid gap-8">
                            <div data-aos="fade-left" data-aos-duration="2000" className="Journey__Skill ">
                                <h2 className='Skill__title 2xl:text-4xl xl:text-2xl md:text-base font-bold'>My Current Skill!</h2>
                                <ul className='Skill__list list-disc list-inside mt-8'>
                                    <li>
                                    Programming Language: Python, PHP, SQL
                                    </li>
                                    <li>
                                    Web Developing: Laravel Framework, Bootstrap, HTML, CSS, JS
                                    </li>
                                    <li>
                                    Other: VSCode, Git, Microsoft SQL Management Studio
                                    </li>
                                </ul>
                            </div>
                            
                        </div> */}
                    </div>
                </>
                )}

    </section>
    </>
    )
}
import Link from 'next/link'
import styles from './skills.module.css'
import Image from 'next/image'
import sql from '../assets/sql-database.png'
import HTML from '../assets/developing.png'
import { BsFiletypeSql } from "react-icons/bs";
import github from '../assets/github.png'
import python from '../assets/python.png'
import analysis from '../assets/analysis.png'

export default function Skills() {
    return (
        <section className={styles.SkillsPage} id='skills'>
            <div className={styles.Skills__content}>
                <h1 className={`${styles.Skills_title} text-4xl font-extrabold p-10`}>Skills in IT Related Field</h1>
                <div className={styles.Skills__container}>

                    <div className={`${styles.Skills__badge}`}>
                        <div className={styles.Skills__circle}>
                            <Image 
                            src={sql}
                            width={120}
                            height={120}
                            alt='Card Project Image'/>
                        </div>
                        <p><b>BASIC SQL</b></p>
                    </div>

                    <div className={`${styles.Skills__badge}`}>
                        <div className={styles.Skills__circle}>
                            <Image 
                            src={HTML}
                            width={120}
                            height={120}
                            alt='Card Project Image'/>
                        </div>
                        <p><b>Basic Website</b></p>
                    </div>

                    <div className={`${styles.Skills__badge}`}>
                        <div className={styles.Skills__circle}>
                            <Image 
                            src={github}
                            width={120}
                            height={120}
                            alt='Card Project Image'/>
                        </div>
                        <p><b>Basic GIT</b></p>
                    </div>

                    <div className={`${styles.Skills__badge}`}>
                        <div className={styles.Skills__circle}>
                            <Image 
                            src={python}
                            width={120}
                            height={120}
                            alt='Card Project Image'/>
                        </div>
                        <p><b>Basic Python</b></p>
                    </div>

                    <div className={`${styles.Skills__badge}`}>
                        <div className={styles.Skills__circle}>
                            <Image 
                            src={analysis}
                            width={120}
                            height={120}
                            alt='Card Project Image'/>
                        </div>
                        <p><b>Basic Data Analysis</b></p>
                    </div>

                </div>

                <p className={styles.Skills__footer}><b>Craving for more to broaden my knowledge in this field</b></p>        
            </div>
        </section>
    )
}
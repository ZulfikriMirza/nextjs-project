import Link from 'next/link'
import styles from './project.module.css'
import Image from 'next/image'
import study from '../assets/study.jpeg'
import not from '../assets/not.png'

export default function Project() {
    return (
        <section className={styles.Project}>
            <div className={styles.Project__content}>
                <h1 className={`${styles.Project__title} text-4xl font-extrabold`}>Last Current Project that i've been work on</h1>
                <div className={`${styles.Project__card}`}>

                    <div className={`${styles.card}`}>
                            <Image 
                            src={not}
                            width={180}
                            height={200}
                            alt='Card Project Image'/>
                            <h5>Project 1</h5>
                            <Link href="/">Source code</Link>
                        </div>

                    <div className={`${styles.card}`}>
                        <Image 
                        src={not}
                        width={180}
                        height={200}
                        alt='Card Project Image'/>
                        <h5>Project 1</h5>
                        <Link href="/">Source code</Link>
                    </div>

                    <div className={`${styles.card}`}>
                        <Image 
                        src={not}
                        width={180}
                        height={100}
                        alt='Card Project Image'/>
                        <h5>Project 1</h5>
                        <Link href="/">Source code</Link>
                    </div>
                </div>
                <div className={`${styles.Project__Button}`}>
                    <Link className={`${styles.Project__Link}`} href="/">Check More on my Github</Link>
                </div>
            </div>
        </section>
    )
}
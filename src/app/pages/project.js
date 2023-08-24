import Link from 'next/link'
import styles from './project.module.css'
import Image from 'next/image'
import study from '../assets/study.jpeg'

export default function Project() {
    return (
        <section className={styles.Project}>
            <div className={styles.Project__content}>
                <h1 className={`${styles.Project__title} text-4xl font-extrabold`}>Last Current Project that i've been work on</h1>
                <div className={`${styles.Project__card}`}>

                    <div className={`${styles.card}`}>
                        <Image 
                        src={study}
                        width={200}
                        height={200}
                        alt='Card Project Image'/>
                        <h5>Project 1</h5>
                        <p>Project asdasd check out the link below to checkk the source code of the project</p>
                        <Link href="/">Click here</Link>
                    </div>

                    <div className={`${styles.card}`}>
                        <Image 
                        src={study}
                        width={200}
                        height={200}
                        alt='Card Project Image'/>
                        <h5>Project 1</h5>
                        <p>Project asdasd check out the link below to checkk the source code of the project</p>
                        <Link href="/">Click here</Link>
                    </div>

                    <div className={`${styles.card}`}>
                        <Image 
                        src={study}
                        width={200}
                        height={200}
                        alt='Card Project Image'/>
                        <h5>Project 1</h5>
                        <p>Project asdasd check out the link below to checkk the source code of the project</p>
                        <Link href="/">Click here</Link>
                    </div>
                </div>
                <Link className={`${styles.Project__Link}`} href="/">Check More on my Github</Link>
            </div>
        </section>
    )
}
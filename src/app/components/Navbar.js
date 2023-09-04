'use client'

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';

const navLinks = [
    {text: 'Home', href:'/'},
    {text: 'About', href:'/about'},
    {text: 'Services', href: '/services'},
    {text: 'Contact', href: '/contact'},
];

const navButton = [
    {text: 'Login', href:'/login'},
    {text: 'Sign Up', href:'/signup'},
]

export default function Navbar() {
    const [HideNavbar, setHideNavbar] = useState(false)
    const [DarkMode, setDarkMode] = useState(false)

    const toggleNavbar = () => {
        setHideNavbar(!HideNavbar)
    }

    return (
        <nav className={styles.navbar}>
            <p className={styles.note}>If you click my name, the navbar will shown<br />(although the navbar is useless lol)</p>
            <div className={styles.logo}>
                <Link href="/" onClick={toggleNavbar}>Zulfikri Mirza</Link>
                {/* <button onClick={toggleNavbar}>About me</button> */}
            </div>
            {/* <div className={styles.logo}>
                <Link href="/">Zulfikri Mirza</Link>
            </div> */}

            {!HideNavbar ? (
                        <>

                        </>
                    ) : (
                        <>
                            <ul className={styles.navLinks}>
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href}>{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                            
                            <ul className={styles.navButton}>
                                {navButton.map((Nbutton, index) => (
                                    <li key={index}>
                                        <Link href={Nbutton.href}>{Nbutton.text}</Link>
                                    </li>
                                ))}
                            </ul>
                            <p className={styles.learning}>only for toggle learning purpose</p>
                        </>
            )}

        </nav>
    )
}


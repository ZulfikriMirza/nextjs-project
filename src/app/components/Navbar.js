'use client'

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';

const navLinks = [
  { text: 'Home', href: '#' },
  { text: 'Experience', href: '#journey' },
  { text: 'Project', href: '#project' },
  { text: 'Skills', href:'#skills'},
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={activeTab === index ? styles.highlighted : ''}
                onClick={() => handleTabClick(index)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}



import Navbar from './components/Navbar'
import Profile from './pages/profile'
import Journey from './pages/journey'
import { Inter } from 'next/font/google'
import Project from './pages/project'
import styles from '../app/globals.css'
import Skills from './pages/skills'

const inter = Inter ({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Home() {
  return (
      <div className={`${inter.variable} ${styles.Body}`}>

        <Profile />
        <Journey />
        <Project /> 
        <Skills />
      </div>

  )
}

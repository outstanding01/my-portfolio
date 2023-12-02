 import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"
export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState (false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">OLAISGREAT</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} style={{height: '23px' }} src={menuOpen
                 ?getImageUrl('nav/closeIcon.png') : getImageUrl('nav/barmenu.png')} alt="meun-button"
                 onClick={() => setmenuOpen(!menuOpen)} />
                 
                <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}` }
                onClick={() => setmenuOpen(false)}>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                </ul>
        </div>
    </nav>
  )
}

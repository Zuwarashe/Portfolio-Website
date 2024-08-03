import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className={styles.navbar}>
        < a className={styles.title} href="/">
       
            <span className={styles.spanr}>Z</span>uwarashe<span className={styles.spanr}>M</span>akarimayi
        
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={ menuOpen
                 ? getImageUrl("nav/closeIcon.png")
                 : getImageUrl("nav/menuIcon.png")
                }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about"><span className={styles.span}>01. </span>About</a>
                </li>
                <li>
                    <a href="#experience"><span className={styles.span}>02. </span>Experience</a>
                </li>
                <li>
                    <a href="#projects"><span className={styles.span}>03. </span>Projects</a>
                </li>
                <li>
                    <a href="#contact"><span className={styles.span}>04. </span>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};
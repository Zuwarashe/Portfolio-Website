import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className={styles.navbar}>
        < a className={styles.title} href="/">
       
            <span className={styles.spanr}>Z</span>uwarashe <span className={styles.spanr}> M</span>akarimayi
        
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
                    <a href="#Education"><span className={styles.span}>01. </span>Education</a>
                </li>
                <li>
                    <a href="#skills"><span className={styles.span}>02. </span>Skills</a>
                </li>
                <li>
                    <a href="#Experience"><span className={styles.span}>03. </span>Experience</a>
                </li>
                <li>
                    <a href="#contact"><span className={styles.span}>04. </span>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};
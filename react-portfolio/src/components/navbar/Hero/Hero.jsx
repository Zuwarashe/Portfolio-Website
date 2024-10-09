"use client";
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils"
import { TextHeroCard } from "../TextRevealCard/TextHeroCard";
export const Hero = () => {
  return (
    
    <section>

<section className={styles.container} id="home">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zuwa</h1>
        <h3 className={styles.textAnimation}>I'm a <span></span></h3>
        <TextHeroCard />
        <div className = {styles.socialIcons}>
                    <a href="#"><i class='bx bxl-linkedin' ></i></a>
                    <a href="#"><i class='bx bxl-github' ></i></a>
        </div>
        <div className = {styles.btnGroup}>
                    <a href="#" className={styles.btn}>Download Cv</a>
                    <a href="#contact" className={styles.btn}>Contact</a>
        </div>

        
        <div className={styles.navbar}>
         <ul>
        <li> <a href="#"><i class='bx bxl-linkedin' ></i></a></li>
        <li> <a href="#"><i class='bx bxl-github' ></i></a></li>
        <li><a href="#home">01</a></li>
        <li><a href="#Education">02</a></li>
        <li><a href="#skills">03</a></li>
        <li><a href="#experience">04</a></li>
        <li> <a href="#contact"><i class='bx bx-phone-call'></i></a></li>
        </ul>
       </div>
      </div>
     
      <div className={styles.homeImg} >
      <img 
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
      />
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>

    </section>
   
  );
};
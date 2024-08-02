"use client";
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils"
import { TextHeroCard } from "../TextRevealCard/TextHeroCard";
export const Hero = () => {
  return (
    
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zuwarashe</h1>
        <h3 className={styles.textAnimation}>I'm a <span></span></h3>
        <TextHeroCard />
       
      

       

        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
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
  );
};
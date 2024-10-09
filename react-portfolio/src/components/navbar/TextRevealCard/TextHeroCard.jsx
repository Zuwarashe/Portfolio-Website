"use client";
import React from "react";
import styles from "./TextHeroCard.module.css";
import {
  TextRevealCard,
} from "../TextRevealCard/text-reveal-card";

export function TextHeroCard() {

  return (
    
    <div className="flex items-center justify-center ">
    <TextRevealCard
      text = ""
      revealText= {
        <p className={styles.description}>
        <p>From excelling in high school through the <span>&lt; Cambridge /&gt;</span> system, my journey has been one of growth and passion for learning. As a <span>&lt; Bachelor of Computer and Information Sciences in Application Development  /&gt;</span> student in Cape Town, I focus on  programming, databases, cloud development, and networking . 
                    At Stellenbosch, I as a <span>&lt; student mentor /&gt;</span>, I supported first-year BCom students academically and emotionally. As a house commitee member I led as Head of  <span>&lt; Sports, Alumni, and Social Relations  /&gt;</span>at Capri, honing my leadership skills. 
                    . My role as head bartender at Stones refined my <span>&lt; interpersonal skills /&gt;</span>, teaching me to <span>&lt; thrive under pressure /&gt;</span>. I am a passionate student, continuously seeking new challenges and solutions, always eager to learn and grow.
        </p>
        </p>
      }
    >
     
    </TextRevealCard>
  </div>
   
  );
}

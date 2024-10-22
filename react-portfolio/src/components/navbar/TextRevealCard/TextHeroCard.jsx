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
       <p>From excelling in high school under the <span>&lt;Cambridge&gt;</span> system to pursuing a <span>&lt;Bachelor of Computer and Information Sciences in Application Development&gt;</span> in Cape Town, I focus on programming, databases, cloud development, and networking. As a <span>&lt;student mentor&gt;</span> at Stellenbosch, I supported first-year BCom students, and as Head of <span>&lt;Sports, Alumni, and Social Relations&gt;</span> at Capri, I honed my leadership skills. My experience as head bartender at Stones also strengthened my <span>&lt;interpersonal skills&gt;</span> and ability to <span>&lt;thrive under pressure&gt;</span>. I am a passionate student, continuously seeking new challenges and solutions, always eager to learn and grow.</p>
        </p>
      }
    >
     
    </TextRevealCard>
  </div>
   
  );
}

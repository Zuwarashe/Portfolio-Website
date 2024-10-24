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
            I’m currently completing my <span>&lt;Bachelor of Computer and Information Sciences in Application Development&gt;</span> in Cape Town, where I focus on <span>&lt;programming&gt;</span>, <span>&lt;databases&gt;</span>, <span>&lt;cloud development&gt;</span>, and <span>&lt;networking&gt;</span>. My experience includes internships at <span>&lt;JPMorgan Chase&gt;</span> and <span>&lt;Mastercard&gt;</span>, where I specialized in <span>&lt;cybersecurity&gt;</span> and <span>&lt;application security&gt;</span>. Beyond tech, I’ve held leadership roles, honing my <span>&lt;leadership&gt;</span> and <span>&lt;teamwork&gt;</span> skills. I’m always eager to <span>&lt;innovate&gt;</span> and solve complex problems.
          </p>
      }
    >
     
    </TextRevealCard>
  </div>
   
  );
}

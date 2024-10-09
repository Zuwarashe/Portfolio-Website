import React, { useState } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../../utils";

export const Experience = () => {
  const [activeCard, setActiveCard] = useState(null); // State to track active card

  const skills = [
    { 
      name: "Css", 
      icon: "css", 
      githubLinks: ["https://github.com/user/css-project1", "https://github.com/user/css-project2"]
    },
    { 
      name: "Figma", 
      icon: "figma", 
      githubLinks: ["https://github.com/user/figma-project1"]
    },
    { 
      name: "GraphQL", 
      icon: "graphql", 
      githubLinks: ["https://github.com/user/graphql-project1"]
    },
    { 
      name: "Html", 
      icon: "html", 
      githubLinks: ["https://github.com/user/html-project1", "https://github.com/user/html-project2"]
    },
    { 
      name: "MongoDB", 
      icon: "mongodb", 
      githubLinks: ["https://github.com/user/mongodb-project1"]
    },
    { 
      name: "Nodejs", 
      icon: "node", 
      githubLinks: ["https://github.com/user/node-project1"]
    },
    { 
      name: "React", 
      icon: "react", 
      githubLinks: ["https://github.com/user/react-project1", "https://github.com/user/react-project2"]
    }
  ];

  const openCard = (skill) => {
    setActiveCard(skill); // Set the clicked card
  };

  const closeCard = () => {
    setActiveCard(null); // Close the modal
  };

  return (
    <section id="skills">
      <img
        src={getImageUrl("skills/sneak.png")}
        alt="sneakylook"
        className={styles.skillsImage}
      />
      <h2 className={styles.titlemain}>Skills</h2>
      <div className={styles.container} id="experience">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => openCard(skill)}
          >
            <h3 className={styles.title}>{skill.name}</h3>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.circle}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
              >
                <circle className={styles.stroke} cx="60" cy="60" r="50" />
                <image
                  className={styles.image}
                  href={getImageUrl(`skills/${skill.icon}.png`)}
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Modal */}
        {activeCard && (
          <div className={styles.modalOverlay} onClick={closeCard}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <h2>{activeCard.name}</h2>
              <p>Check out the projects:</p>
              <ul>
                {activeCard.githubLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {`Project ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
              <button onClick={closeCard} className={styles.closeButton}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

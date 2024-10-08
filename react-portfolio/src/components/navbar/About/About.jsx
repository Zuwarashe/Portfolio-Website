import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  const [activeIcon, setActiveIcon] = useState(null); // State to track active icon for modal

  const openIconModal = (icon) => {
    setActiveIcon(icon); // Set the active icon for the modal
  };

  const closeIconModal = () => {
    setActiveIcon(null); // Close the modal
  };

  const modalContent = {
    icon1: "Details about IIE VARISTY COLLEGE",
    icon2: "Details about RIVERTON ACADEMY MASVINGO",
    // Add more icons and their content as needed
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/sticker.png")}
          alt="Me standing with books"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/University.png")} alt=" icon" />
            <div className={styles.aboutItemText}>
              <h3 onClick={() => openIconModal('icon1')}>IIE VARISTY COLLEGE</h3>
              <p>
                Bachelor of Computer and Application Development
              </p>
              <i className={`${styles.icons} bx bx-file-blank`} onClick={() => openIconModal('icon1')} />
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/highschool.png")} alt=" icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.hsh} onClick={() => openIconModal('icon2')}> RIVERTON ACADEMY MASVINGO</h3>
              <p className={styles.hsh}>
                Cambridge Advanced Level
                Cambridge Ordinary Level
              </p>
              <i className={`${styles.icons} ${styles.hsh} bx bx-file-blank`} onClick={() => openIconModal('icon2')} />
            </div>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {activeIcon && (
        <div className={styles.modalOverlay} onClick={closeIconModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeIconModal}>
              &times;
            </button>
            <div>{modalContent[activeIcon]}</div>
          </div>
        </div>
      )}
    </section>
  );
};

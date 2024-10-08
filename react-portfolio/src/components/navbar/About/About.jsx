import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  const [activeIcon, setActiveIcon] = useState(null); // State to track active icon for modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image

  const openIconModal = (icon) => {
    setActiveIcon(icon); // Set the active icon for the modal
    setCurrentImageIndex(0); // Reset image index when opening a new modal
  };

  const closeIconModal = () => {
    setActiveIcon(null); // Close the modal
    setCurrentImageIndex(0); // Reset image index when closing the modal
  };

  const modalContent = {
    icon1: {
      text: "Details about IIE VARISTY COLLEGE",
      images: [
        getImageUrl("about/vc.png"), // First image
        getImageUrl("about/vc2.png"), // Second image
      ],
    },
    icon2: {
      text: "Details about RIVERTON ACADEMY MASVINGO",
      images: [
        getImageUrl("about/ALevel.jpg"), // First image
        getImageUrl("about/OLevel.jpg"), // Second image
      ],
    },
    // Add more icons and their content as needed
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % modalContent[activeIcon].images.length
    ); // Move to the next image, wrap around if needed
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + modalContent[activeIcon].images.length) %
      modalContent[activeIcon].images.length
    ); // Move to the previous image, wrap around if needed
  };

  return (
    <section className={styles.container} id="Education">
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
              <h3 onClick={() => openIconModal("icon1")}>IIE VARISTY COLLEGE</h3>
              <p>Bachelor of Computer and Application Development</p>
              <i
                className={`${styles.icons} bx bx-file-blank`}
                onClick={() => openIconModal("icon1")}
              />
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/highschool.png")} alt=" icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.hsh} onClick={() => openIconModal("icon2")}>
                RIVERTON ACADEMY MASVINGO
              </h3>
              <p className={styles.hsh}>
                Cambridge Advanced Level
                <br />
                Cambridge Ordinary Level
              </p>
              <i
                className={`${styles.icons} ${styles.hsh} bx bx-file-blank`}
                onClick={() => openIconModal("icon2")}
              />
            </div>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {activeIcon && (
        <div className={styles.modalOverlay} onClick={closeIconModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeIconModal}>
              &times;
            </button>
            <div>{modalContent[activeIcon].text}</div>

            <img
              src={modalContent[activeIcon].images[currentImageIndex]}
              alt={`Modal content for ${activeIcon}`}
              className={styles.modalImage}
            />

            {/* Navigation Buttons */}
            <div className={styles.navigationButtons}>
              <button onClick={handlePrevImage} className={styles.navButton}>
                &larr; Previous
              </button>
              <button onClick={handleNextImage} className={styles.navButton}>
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

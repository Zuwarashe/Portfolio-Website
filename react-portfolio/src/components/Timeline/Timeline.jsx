import React, { useState } from 'react';
import styles from './Timeline.module.css';
import { getImageUrl } from "../../utils";

const Timeline = () => {
  const [activeIcon, setActiveIcon] = useState(null); // Track which icon is clicked

  const openIconModal = (icon) => {
    setActiveIcon(icon); // Set the active icon for the modal
  };

  const closeIconModal = () => {
    setActiveIcon(null); // Close the modal
  };

  return (
    <section className={styles.timeliner}>
        <img
        src={getImageUrl("timeline/experience.png")}
        alt="sneakylook"
        className={styles.exImage}
      />
        <h2 className={styles.title}>Experience</h2>
      {/* Timeline content */}
      <div className={`${styles.containerr} ${styles.leftContainer}`}>
        <img src={getImageUrl("timeline/mastercard.png")} alt="Company logo" />
        <div className={styles.textBoxr}>
          <h2>Mastercard Cybersecurity Virtual Experience Program</h2>
          <div className={styles.line}></div>
          <small>August 2024</small>
          <ul className={styles.bulletList}>
            <li>Completed a job simulation as an analyst on Mastercard’s Security Awareness Team.</li>
            <li>Helped identify and report security threats such as phishing.</li>
            <li>Analyzed areas of the business needing robust security training and implemented training courses and procedures for those teams.</li>
          </ul>
          <i className={`${styles.icons} bx bx-file-blank`} onClick={() => openIconModal('Mastercard document')} />
        </div>
      </div>

      <div className={`${styles.containerr} ${styles.rightContainer}`}>
        <img src={getImageUrl("timeline/jpm.png")} alt="Company logo" />
        <div className={styles.textBoxr}>
          <h2>JPMorgan Chase & Co</h2>
          <div className={styles.line}></div>
          <small>September 2024</small>
          <ul className={styles.bulletList}>
            <li>Analyzed a large dataset of fraud in financial payment services to identify patterns and mitigate risks.</li>
            <li>Applied application security fundamentals to enhance security on personal websites.</li>
            <li>Developed an email classifier to distinguish between spam and legitimate messages.</li>
            <li>Designed and implemented a system to strengthen access controls for sensitive information.</li>
          </ul>
          <i className={`${styles.icons} bx bx-file-blank`} onClick={() => openIconModal('JPM document')} />
        </div>
      </div>

      <div className={`${styles.containerr} ${styles.leftContainer}`}>
        <img src={getImageUrl("timeline/koribstat.png")} alt="Company logo" />
        <div className={styles.textBoxr}>
          <h2>Korbistat - Cape Town, Western Cape</h2>
          <div className={styles.line}></div>
          <small>July 2024</small>
          <ul className={styles.bulletList}>
            <li>Participated in the immersive Korbistat Job Shadow program, gaining insights from team members on their roles and responsibilities.</li>
            <li>Learned about the innovative product, GhostDraft.</li>
            <li>Collaborated with diverse tech students, enhancing my understanding of the industry.</li>
          </ul>
          <i className={`${styles.icons} bx bx-photo-album`} onClick={() => openIconModal('Korbistat photo')} />
          <i className={`${styles.icons} bx bx-phone`} onClick={() => openIconModal('Korbistat phone')} />
        </div>
      </div>

      <div className={`${styles.containerr} ${styles.rightContainer}`}>
        <img src={getImageUrl("timeline/stellenbosch.png")} alt="Company logo" />
        <div className={styles.textBoxr}>
          <h2>University of Stellenbosch - House Committee</h2>
          <div className={styles.line}></div>
          <small>September 2021 - September 2022</small>
          <ul className={styles.bulletList}>
            <li>Led the creation and maintenance of a comprehensive database for Capri alumni.</li>
            <li>Organized and coordinated all sporting activities for the house throughout the year.</li>
            <li>Directed and executed social impact events to benefit the house community.</li>
          </ul>
          <i className={`${styles.icons} bx bx-phone`} onClick={() => openIconModal('Stellenbosch phone')} />
        </div>
      </div>

      <div className={`${styles.containerr} ${styles.leftContainer}`}>
        <img src={getImageUrl("timeline/hero.png")} alt="Company logo" />
        <div className={styles.textBoxr}>
          <h2>Hero Events - Supervisor</h2>
          <div className={styles.line}></div>
          <small>(Part-time) 2019-present</small>
          <ul className={styles.bulletList}>
            <li>Supervised and coordinated a team of waiters at various client events.</li>
            <li>Trained and mentored new staff.</li>
            <li>Maintained high standards of service quality and adherence to company policies and procedures.</li>
          </ul>
          <i className={`${styles.icons} bx bx-phone`} onClick={() => openIconModal('Hero phone')} />
        </div>
      </div>

      {/* Modal */}
      {activeIcon && (
        <div className={styles.modalOverlay} onClick={closeIconModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2>{activeIcon}</h2>
            <p>Details about {activeIcon}</p>
            <button onClick={closeIconModal} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;

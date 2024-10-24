import React, { useState } from 'react';
import styles from './Timeline.module.css';
import { getImageUrl } from "../../utils";

const Timeline = () => {
  const [activeIcon, setActiveIcon] = useState(null); // Track which icon is clicked
  const [modalContent, setModalContent] = useState(null); // Store modal content

  // Open the modal based on the clicked icon
  const openIconModal = (icon) => {
    let content;
    switch (icon) {
      case 'Mastercard document':
        content = <img src={getImageUrl('timeline/mastercardcert.png')} alt="Mastercard Certificate" />;
        break;
      case 'JPM document':
        content = <img src={getImageUrl('timeline/jpmorgan.png')} alt="JPMorgan Certificate" />;
        break;
      case 'Korbistat photo':
        content = <img src={getImageUrl('timeline/korbitstat.jpg')} alt="Korbistat Job Shadow Photo" />;
        break;
      case 'Korbistat':
        content = <p>Reference : lauren.gara@korbistat.com</p>;
        break;
      case 'Stellenbosch':
        content = <p>Reference :jethro@sun.ac.za</p>;
        break;
      case 'Heros':
        content = <p>Reference: baxter@heroevents.co.za</p>;
        break;
      default:
        content = <p>No content available</p>;
    }
    setActiveIcon(icon);
    setModalContent(content);
  };

  const closeIconModal = () => {
    setActiveIcon(null); // Close the modal
    setModalContent(null);
  };

  return (
    <section className={styles.timeliner} id="Experience">
      <img
        src={getImageUrl("timeline/experience.png")}
        alt="sneakylook"
        className={styles.exImage}
      />
      <h2 className={styles.title}>Experience</h2>
      
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
          <i className={`${styles.icons} bx bx-phone`} onClick={() => openIconModal('Korbistat')} />
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
          <i className={`${styles.icons} bx bx-phone`} onClick={() => openIconModal('Stellenbosch')} />
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
          <i className={`${styles.icons} bx bx-phone`} onClick={() => openIconModal('Heros')} />
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
            {modalContent}
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

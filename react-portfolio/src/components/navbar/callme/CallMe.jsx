import React from 'react';
import styles from './CallMe.module.css';  // Importing the CSS module
import { getImageUrl } from "../../../utils";

const CallMe = () => {
    return (
        <section className={styles.callmeSection}>
            <p className={styles.callmeText}>Call Me ;-)</p>
            <ul className={styles.code}>
                <li tabIndex="0" className={styles.digit}>
                    <span>0</span>
                </li>
                <li tabIndex="0" className={styles.digit}>
                    <span>6</span>
                </li>
                <li tabIndex="0" className={styles.digit}>
                    <span>3</span>
                </li>
                <li tabIndex="0" className={styles.digit}>
                    <span>1</span>
                </li>
                <li tabIndex="0" className={styles.digit}>
                    <span>4</span>
                </li>
                <li tabIndex="0" className={styles.digit}>
                    <span>9</span>
                </li>
            </ul>
            <img
        src={getImageUrl("callme/call.png")}
        alt="sneakylook"
        className={styles.callImage}
      />
        </section>
    );
};

export default CallMe;

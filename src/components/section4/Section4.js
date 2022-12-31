import React from "react";
import styles from "./Section4.module.scss";

const Section4 = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.img}>
        <img
          src="../../../img/sec4_bg.png"
          alt="img"
          width={427}
          height={641}
        ></img>
        <div className={styles.card}>
          <div className={styles.card_title}>Customized For</div>
          <div className={styles.card_divider}></div>
          <div className={styles.card_img}>
            <img src="../../../img/sec4_card.png" alt="img"></img>
          </div>
          <div className={styles.card_name}>Mikayla</div>
          <div className={styles.card_header}>Your custom contents</div>
          <div className={styles.card_list}>
            <ul>
              <li>Understand Your Stress</li>
              <li>Anger Management</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <p>Our product</p>
        <h2 className={styles.h2}>
          You tell us your stress, We make your diary
        </h2>
        <div>
          <p>Everyone experiences it, and in different ways.</p>
          <p>
            Let Alivio guide you, in a personalized journal experience, to
            overcome your stress.
          </p>
        </div>

        <div className={`${styles.trial} greenBtn`}>
          <a>Find Your Way</a>
        </div>
      </div>
    </section>
  );
};

export default Section4;

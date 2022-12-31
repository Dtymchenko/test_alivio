import React from "react";
import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>How it works</p>
      <div className={styles.header}>
        <h2>Understand & Release {<br />} the stress in 3 steps</h2>
        <div className={`${styles.header_text} article_text`}>
          Alivio offers as many journals it takes, tackling different areas such
          as anxiety, overwhelmedness, sadness, or anger, and a variety of
          personal causes, to help you become aware of your emotions, and guide
          you in how to manage stress.
        </div>
      </div>
      <div className={styles.steps_block}>
        <div className={`${styles.step} article_text ${styles.step_one}`}>
          <div className={styles.step_header}>
            <div className={styles.step_header_num}>01</div>
            <div
              className={`${styles.step_header_text} ${styles.step_header_text_one}`}
            >
              Personalize
            </div>
          </div>
          <div className={styles.step_text}>
            Answer a quick survey about how you express yourself, what causes
            you stress, and what area would you like to work on. This way, we
            can fully personalize your journal!
          </div>
          <div className={styles.step_img}>
            <img src="../../../img/step1.png" alt="step1"></img>
          </div>
        </div>
        <div className={`${styles.step} article_text ${styles.step_two}`}>
          <div className={styles.step_header}>
            <div className={styles.step_header_num}>02</div>
            <div
              className={`${styles.step_header_text} ${styles.step_header_text_two}`}
            >
              Write & Understand
            </div>
          </div>
          <div className={styles.step_text}>
            Write, draw, reflect, understand. Alivio will guide you through the
            prompts and will help you manage your stress!
          </div>
          <div className={styles.step_img}>
            <img src="../../../img/step2.png" alt="step2"></img>
          </div>
        </div>
        <div className={`${styles.step} article_text ${styles.step_three}`}>
          <div className={styles.step_header}>
            <div className={styles.step_header_num}>03</div>
            <div
              className={`${styles.step_header_text} ${styles.step_header_text_three}`}
            >
              Alivio!
            </div>
          </div>
          <div className={styles.step_text}>
            Now you are aware, and have a way to manage and overcome your own
            stress. What are you waiting for? Alivio today!
          </div>
          <div className={styles.step_img}>
            <img src="../../../img/step3.png" alt="step3"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

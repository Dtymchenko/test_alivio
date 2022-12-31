import React from "react";
import styles from "./Section1.module.scss";

const Section1 = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.headline}>
        <h1>
          Be aware, <br /> Manage well.
        </h1>
        <div className={styles.headline_text}>
          Everyone experiences stress in different ways. Let Alivio guide you,
          in a personalized journal experience, to overcome your stress.
        </div>
        <div className={`${styles.trial} greenBtn`}>
          <a>Find Your Way</a>
        </div>
      </div>
    </section>
  );
};

export default Section1;

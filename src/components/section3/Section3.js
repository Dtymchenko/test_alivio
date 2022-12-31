import React from "react";
import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.text}>
        <h2 className={styles.h2}>
          Let's hear about {<br />} Kayla's success story
        </h2>
        <p>See how well Alivio works in a real customer’s life.</p>
        <div className={`${styles.trial} greenBtn`}>
          <a>Let’s get started</a>
        </div>
      </div>
      <div className={styles.img}>
        <a>
          <img src="../../../img/play-white.png" alt="img"></img>
        </a>
      </div>
    </section>
  );
};

export default Section3;

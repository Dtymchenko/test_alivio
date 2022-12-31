import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({ navItems }) => {
  return (
    <footer className={styles.bg}>
      <div className={styles.header}>Alivio</div>
      <div className={styles.list}>
        <ul>
          {navItems.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./Nav.module.scss";

const Nav = ({ navItems }) => {
  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.logo}>
          <img src="img/Logo.png" width={80} height={23}></img>
        </a>
        <div className={styles.links}>
          {navItems.map((el, i) => (
            <a key={i}>{el}</a>
          ))}
        </div>
        <div className={styles.auth}>
          <a>Sign in</a>
          <div className={`${styles.trial} greenBtn`}>
            <a>Start Trial</a>
          </div>
        </div>
      </nav>
      <div className={styles.divider}></div>
    </>
  );
};

export default Nav;

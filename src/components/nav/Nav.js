import React from "react";
import styles from "./Nav.module.scss";

const Nav = ({ navItems }) => {
  const [menu, setMenu] = React.useState(false);
  const onClickMenuIcon = () => {
    setMenu(!menu);
  };

  return (
    <nav className={styles.nav}>
      <a className={styles.logo}>
        <img src="img/Logo.png" width={80} height={23}></img>
      </a>
      {/* <div className={styles.links}> */}
      <div
        className={
          !!menu ? [styles.links, styles.active].join(" ") : styles.links
        }
      >
        {navItems.map((el, i) => (
          <a key={i}>{el}</a>
        ))}
      </div>
      <div className={styles.burger_icon} onClick={onClickMenuIcon}>
        {!!menu ? (
          <img src="img/close.jpg" alt="close" width={45}></img>
        ) : (
          <img src="img/burger.png" alt="burger" width={45}></img>
        )}
      </div>
      <div className={styles.auth}>
        <a>Sign in</a>
        <div className={`${styles.trial} greenBtn`}>
          <a>Start Trial</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

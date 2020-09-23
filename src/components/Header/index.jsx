import React from "react";
import styles from "./styles.module.scss";
import { HashRouter as Router, NavLink as Link } from "react-router-dom";
import routers from "../../header-routers";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.links}>
        <Router>
          <li className={styles.link}>
            <h3>HW 01</h3>
            {routers
              .filter((router) => router.hw === "01")
              .map((route) => (
                <span key={route.path}>
                  <Link to={route.path}>{route.label}</Link>
                </span>
              ))}
          </li>
          <li className={styles.link}>
            <h3>HW 02</h3>
            {routers
              .filter((router) => router.hw === "02")
              .map((route) => (
                <span key={route.path}>
                  <Link to={route.path}>{route.label}</Link>
                </span>
              ))}
          </li>
          <li className={styles.link}>
            <h3>HW 03</h3>
            {routers
              .filter((router) => router.hw === "03")
              .map((route) => (
                <span key={route.path}>
                  <Link to={route.path}>{route.label}</Link>
                </span>
              ))}
          </li>
        </Router>
      </ul>
    </div>
  );
};

export default Header;

import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";

export default function Nav() {
  return (
    <nav className={`${styles.nav} container-fluid py-3`}>
      <div className="row">
        <div className=" col-3 col-sm-4">
          <NavLink className={styles.logoLink} to="/">
            <h1 className="text-center text-uppercase">vegetables</h1>
          </NavLink>
        </div>

        <div className="col-3 col-sm-4"></div>

        <div className="col-6 col-sm-4 d-flex justify-content-center">
          <HeaderCartButton />
        </div>
      </div>
    </nav>
  );
}

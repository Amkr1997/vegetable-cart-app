import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import styles from "./HeaderCartButton.module.css";
import cartContext from "../../contexts/cart-context";

export default function HeaderCartButton() {
  const { vegetables } = useContext(cartContext);
  const numOfCartVegetables = vegetables.reduce((curVeg, vegetable) => {
    return curVeg + vegetable.quantity;
  }, 0);

  return (
    <NavLink className={styles.cartBtnLink} to={"/cart"}>
      <button
        type="button"
        className={`${styles.cartBtn} btn btn-success position-relative d-flex align-items-center gap-2 px-5 fs-4 text-capitalize fw-medium rounded border-1`}
      >
        <PiShoppingCartSimpleFill />
        <span>cart</span>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {numOfCartVegetables}
        </span>
      </button>
    </NavLink>
  );
}

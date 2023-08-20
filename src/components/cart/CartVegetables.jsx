import React from "react";
import styles from "./CartVegetables.module.css";

export default function CartItems({ veg, onAddMore, onRemove }) {
  const { name, price, quantity, image } = veg;
  const vegiCost = `Rs ${price}/Kg`;

  return (
    <li
      className={`${styles.cartVegetable} d-flex justify-content-between align-items-center p-1 m-1`}
    >
      <div style={{ width: "10%" }}>
        <img src={image} alt="vegetable" className="img-fluid" />
      </div>
      <p className={`h5 text-center mb-1`}>{name}</p>
      <div
        className={`${styles.summary} d-flex justify-content-around justify-content-sm-between align-items-center`}
      >
        <span className={`${styles.price} fw-bold`}>{vegiCost}</span>
        <span className={`${styles.amount} fw-bold`}>x {quantity}</span>
      </div>

      <div className={`${styles.actions} d-flex flex-sm-row flex-column gap-1`}>
        <button onClick={onAddMore}>+</button>
        <button onClick={onRemove}>-</button>
      </div>
    </li>
  );
}

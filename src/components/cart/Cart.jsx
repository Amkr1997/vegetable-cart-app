import React, { useContext } from "react";
import cartContext from "../../contexts/cart-context";
import CartVegetables from "./CartVegetables";
import styles from "./Cart.module.css";

export default function Cart() {
  const { totalAmount, vegetables, addNewVegetable, removeVegetable } =
    useContext(cartContext);
  const cartCost = `Rs ${totalAmount.toFixed(2)}`;

  function handleAddMore(veg) {
    addNewVegetable({ ...veg, quantity: 1 });
  }

  function handleRemoveVeg(id) {
    removeVegetable(id);
  }

  const cartVegetables = (
    <ul className={`${styles.cartVegetables}`}>
      {vegetables.map((veg) => (
        <CartVegetables
          veg={veg}
          key={veg.id}
          onAddMore={() => handleAddMore(veg)}
          onRemove={() => handleRemoveVeg(veg.id)}
        />
      ))}
    </ul>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-12 col-sm-10 rounded mb-1 p-2 d-flex flex-column gap-3">
          {cartVegetables}
          <div className="d-flex justify-content-between align-items-center fw-bold fs-4 m-1">
            <span>Total Amount</span>
            <span>{cartCost}</span>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

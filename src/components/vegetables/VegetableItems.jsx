import React, { useContext } from "react";
import styles from "./VegetableItems.module.css";
import VegetableItemForm from "./VegetableItemForm";
import cartContext from "../../contexts/cart-context";

export default function VegetableItems({ veg }) {
  const { id, image, name, price } = veg;
  const { addNewVegetable } = useContext(cartContext);

  function handleAddVeg(amount) {
    addNewVegetable({
      id,
      image,
      name,
      price,
      quantity: amount,
    });
  }

  return (
    <li
      style={{ listStyle: "none", width: "18rem" }}
      className={`${styles.vegList} card col-10 col-sm-3 mx-auto`}
    >
      <div style={{ height: "200px" }}>
        <img
          src={image}
          className="card-img-top img-thumbnail h-75"
          alt="..."
        />
      </div>

      <div className="card-body d-flex flex-column align-items-start">
        <h5 className="card-title">{name}</h5>
        <h6>Rs {price}</h6>
        <VegetableItemForm onAddToCart={handleAddVeg} />
      </div>
    </li>
  );
}

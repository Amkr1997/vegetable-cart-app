import React, { useRef } from "react";
import Input from "../UI/Input";

export default function VegetableItemForm({ onAddToCart }) {
  const inpAmountRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredAmount = inpAmountRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      return;
    }

    onAddToCart(enteredAmountNum);
  }

  return (
    <form
      className="d-flex flex-column justify-content-center gap-2 mb-2"
      onSubmit={submitHandler}
    >
      <Input
        ref={inpAmountRef}
        label={"Amount"}
        input={{
          id: `watchId_${""}`,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="btn btn-success px-4 fw-semibold text-uppercase">
        add to cart
      </button>
    </form>
  );
}

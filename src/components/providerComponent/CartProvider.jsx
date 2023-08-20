import React, { useReducer } from "react";
import CartContext from "../../contexts/cart-context";

const initialState = {
  vegetables: [],
  totalAmount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const updatedtotalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;

      const existingVegetablesIndex = state.vegetables.findIndex(
        (veg) => veg.id === action.payload.id
      );

      const existingVegetable = state.vegetables[existingVegetablesIndex];

      let updatedVegetables;

      if (existingVegetable) {
        const updatedVegetable = {
          ...existingVegetable,
          quantity: existingVegetable.quantity + action.payload.quantity,
        };

        updatedVegetables = [...state.vegetables];
        updatedVegetables[existingVegetablesIndex] = updatedVegetable;
      } else {
        updatedVegetables = [...state.vegetables, action.payload];
      }

      return {
        vegetables: updatedVegetables,
        totalAmount: updatedtotalAmount,
      };

    case "REMOVE":
      const existingRemoveVegetablesIndex = state.vegetables.findIndex(
        (veg) => veg.id === action.payload
      );

      const existingRemoveVegetable =
        state.vegetables[existingRemoveVegetablesIndex];

      const updatedRemovetotalAmount =
        state.totalAmount - existingRemoveVegetable.price;

      let updatedRemoveVegetables;

      if (existingRemoveVegetable.quantity === 1) {
        updatedRemoveVegetables = state.vegetables.filter(
          (veg) => veg !== existingRemoveVegetable
        );
      } else {
        const updatedVegetable = {
          ...existingRemoveVegetable,
          quantity: existingRemoveVegetable.quantity - 1,
        };

        updatedRemoveVegetables = [...state.vegetables];
        updatedRemoveVegetables[existingRemoveVegetablesIndex] =
          updatedVegetable;
      }

      return {
        vegetables: updatedRemoveVegetables,
        totalAmount: updatedRemovetotalAmount,
      };

    default:
      return initialState;
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddVegetables(vegetable) {
    dispatch({ type: "ADD", payload: vegetable });
  }

  function handleRemoveVegetables(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  const cartContext = {
    vegetables: state.vegetables,
    totalAmount: state.totalAmount,
    addNewVegetable: handleAddVegetables,
    removeVegetable: handleRemoveVegetables,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

import React from "react";

const cartContext = React.createContext({
  vegetables: [],
  totalAmount: 0,
  addNewVegetable: (vegetable) => {},
  removeVegetable: (id) => {},
});

export default cartContext;

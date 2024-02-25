import React, { useState } from "react";
import Header from "./Header";
import HomeBody from "./HomeBody";

const HomePage = ({ cartItems, getCartValue, setCost, cost }) => {
  const [cartValue, setCartValue] = useState(0);

  const getTheCartValue = (cartValue) => {
    setCartValue(cartValue);
  };

  const getTheItems = (itemsArray) => {
    cartItems(itemsArray);
  };

  return (
    <>
      <Header cartValue={cartValue} getCartValue={getCartValue} />
      <HomeBody
        getTheCartValue={getTheCartValue}
        getTheItems={getTheItems}
        setCost={setCost}
      />
    </>
  );
};

export default HomePage;

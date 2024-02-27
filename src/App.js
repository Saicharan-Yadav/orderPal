import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage";
import HomePage from "./Components/HomePage";
import RecentOrders from "./Components/RecentOrders";

function App() {
  const [finalCartItems, setFinalCartItems] = useState([]);

  const cartItems = (itemsArray) => {
    setFinalCartItems(itemsArray);
  };

  const [cartValue, setCartValue] = useState(0);

  const getCartValue = (cartValue) => {
    setCartValue(cartValue);
  };

  const [cost, setCost] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cartItems={cartItems}
              getCartValue={getCartValue}
              setCost={setCost}
            />
          }
        />
        <Route
          path="cartpage"
          element={
            <CartPage
              finalCartItems={finalCartItems}
              cartValue={cartValue}
              setCost={setCost}
              cost={cost}
            />
          }
        />
        <Route path="recent" element={<RecentOrders />} />
      </Routes>
    </>
  );
}

export default App;

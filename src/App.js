import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

import HomePage from "./Components/HomePage";
import RecentOrders from "./Components/RecentOrders";

function NotFound() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const headingStyle = {
    margin: "0",
  };

  const iconStyle = {
    marginRight: "8px",
    listStyle: "none",
  };
  return (
    <div>
      <div style={containerStyle}>
        <h2 className="yourcart" style={headingStyle}>
          <NavLink to="/">
            <FontAwesomeIcon style={iconStyle} icon={faHome} />
          </NavLink>
          404 Not Found
        </h2>
      </div>
    </div>
  );
}
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
          exact
          path="/cartpage"
          element={
            <CartPage
              finalCartItems={finalCartItems}
              cartValue={cartValue}
              setCost={setCost}
              cost={cost}
            />
          }
        />
        <Route exact path="/recentpage" element={<RecentOrders />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

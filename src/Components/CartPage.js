import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/CartPage.css";
import CartPageCard from "./CartPageCard";
import TotalItemsCost from "./TotalItemsCost";

const CartPage = ({ finalCartItems, cartValue, setCost, cost }) => {
  const [quantity, setQuantity] = useState(cartValue);
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

  const setIncrement = (incre) => {
    incre === true
      ? setQuantity((prevValue) => prevValue + 1)
      : setQuantity((prevValue) => prevValue - 1);
  };

  const getTotalCost = (cost) => {
    setCost(cost);
  };

  useEffect(() => {
    document.body.classList.add("cartpagemaindiv");

    return () => {
      document.body.classList.remove("cartpagemaindiv");
    };
  });

  return (
    <>
      <div>
        <div style={containerStyle}>
          <h2 className="yourcart" style={headingStyle}>
            <NavLink to="/">
              <FontAwesomeIcon style={iconStyle} icon={faHome} />
            </NavLink>
            Your Cart
          </h2>
        </div>

        <div className="cart">
          <div className="row" id="cartitems">
            {finalCartItems.map((item) => (
              <CartPageCard
                item={item}
                key={item.id}
                setIncrement={setIncrement}
                getTotalCost={getTotalCost}
                cost={cost}
              />
            ))}
          </div>

          <TotalItemsCost
            cartValue={cartValue}
            quantity={quantity}
            cost={cost}
            finalCartItems={finalCartItems}
          />
        </div>
      </div>
    </>
  );
};

export default CartPage;

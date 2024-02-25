import React, { useEffect } from "react";
import "./CSS/Header.css";
import Logo from "./IMAGES/order.png";
import { NavLink } from "react-router-dom";

const Header = ({ cartValue, getCartValue }) => {
  useEffect(() => {
    getCartValue(cartValue);
  }, [cartValue]);

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top mainnav">
      <div className="container-fluid mainnavbar">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "80px", width: "100px" }}
        ></img>
        <a className="navbar-brand brandname" href="/">
          OrderPal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse featuresdiv" id="navbarNav">
          <NavLink to="/cartpage">
            <i className="fa-regular fa-cart-shopping">
              <sup className="cartvalue" id="cartvalue">
                {cartValue}
              </sup>
            </i>
          </NavLink>

          <ul className="navbar-nav">
            <li className="nav-item homeli">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item featuresli">
              <a className="nav-link" href="/" style={{ color: "black" }}>
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

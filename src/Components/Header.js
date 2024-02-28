import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Header.css";
import Logo from "./IMAGES/order.png";

const Header = ({ cartValue, getCartValue }) => {
  useEffect(() => {
    getCartValue(cartValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartValue]);

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top mainnav">
      <div className="container-fluid mainnavbar">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "80px", width: "100px" }}
        ></img>
        <Link className="navbar-brand brandname" to="/">
          OrderPal
        </Link>

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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item featuresli">
              <Link
                className="nav-link"
                to="/recentpage"
                style={{ color: "black" }}
              >
                Recent Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

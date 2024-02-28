import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "./firebase/firebase";
import RecentCard from "./RecentCard";
import "./CSS/CartPage.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const RecentOrders = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const totalprice = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "7%",
    paddingRight: "11px",
    marginRight: "10px",
  };

  const headingStyle = {
    margin: "0",
  };

  const iconStyle = {
    marginRight: "8px",
    listStyle: "none",
  };
  const [recentOrder, setRecentOrder] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders_data"), (snapshot) => {
      setRecentOrder(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub;
  }, []);

  useEffect(() => {
    document.body.classList.add("cartpagemaindiv");

    return () => {
      document.body.classList.remove("cartpagemaindiv");
    };
  });

  return (
    <>
      {console.log("in recentOrder")}
      <div>
        <div style={containerStyle}>
          <h2 className="yourcart" style={headingStyle}>
            <NavLink to="/">
              <FontAwesomeIcon style={iconStyle} icon={faHome} />
            </NavLink>
            Recent Orders
          </h2>
          <div
            style={{
              marginRight: "15px",
            }}
          >
            <h5 className={totalprice}>Total price : ₹ {totalPrice}</h5>
          </div>
        </div>

        <div className="cart">
          <div className="row" id="cartitems1">
            {recentOrder.map((item) => {
              return (
                <RecentCard
                  key={item.totalPrice}
                  item={item}
                  setTotalPrice={setTotalPrice}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;

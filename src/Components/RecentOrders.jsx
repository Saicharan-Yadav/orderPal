import React, { useEffect, useState } from "react";
import { onSnapshot, collection, addDoc, doc } from "firebase/firestore";
import db from "./firebase/firebase";
import RecentCard from "./RecentCard";
import "./CSS/CartPage.css";

const RecentOrders = () => {
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
      <div>
        <div>
          <h2 className="yourcart">Recent Orders</h2>
        </div>

        <div className="cart">
          <div className="row" id="cartitems1">
            {recentOrder.map((item) => {
              return <RecentCard key={item.totalPrice} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;

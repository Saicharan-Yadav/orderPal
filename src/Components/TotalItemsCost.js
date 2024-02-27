import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/TotalItemsCost.css";
import { onSnapshot, collection, addDoc, doc } from "firebase/firestore";
import db from "./firebase/firebase";

const TotalItemsCost = ({ cartValue, quantity, cost, finalCartItems }) => {
  const navigate = useNavigate();

  const successHandler = async () => {
    //setdoc
    if (cartValue !== 0) {
      const name = prompt("Enter your name");
      const payload_order = [...finalCartItems];
      const payload = { name: name, order: payload_order, totalPrice: cost };
      const collectionRef = collection(db, "orders_data");
      const docref = await addDoc(collectionRef, payload);

      alert("Order placed successfully with  Id:" + docref.id);
      navigate("/");
    }
  };

  // useEffect(() => {
  //   const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
  //   return unsub;
  // }, []);

  return (
    <>
      <div className="totalcostdiv">
        <h1 id="itemsdetails">Your items details</h1>
        <h4 id="totalitems">Total items: {cartValue}</h4>
        <h4 id="totalquantity">Total quantity: {quantity}</h4>
        <h3 id="totalcost">Total cost: ₹{cost}</h3>

        <button
          className="btn btn-primary"
          id="ordernow"
          onClick={successHandler}
        >
          Order now
        </button>
      </div>
    </>
  );
};

export default TotalItemsCost;

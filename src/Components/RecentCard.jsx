import React from "react";
import "./CSS/CartPageCard.css";
import { doc, deleteDoc } from "firebase/firestore";
import db from "./firebase/firebase";

const RecentCard = ({ item }) => {
  const arr = [...item.order];
  const deleteFn = async () => {
    console.log("delte sUCESSFULLY");
    const docRef = doc(db, "orders_data", item.id);
    await deleteDoc(docRef);
  };

  return (
    <>
      <>
        {/* <div>
        <div>
          <h1>Name: {item.name.toUpperCase()}</h1>
          <h2>Total price ₹{item.totalPrice}</h2>
        </div>
        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
          {arr.map((it, index) => (
            <tr key={index}>
              <td>{it.title}</td>
              <td>{"₹" + it.price}</td>
            </tr>
          ))}
        </table>
      </div> */}
      </>

      <div
        className="card card-style"
        style={{ width: "18rem", paddingBottom: "2%" }}
      >
        <div className="card-body">
          <h5 className="card-title" id="itemtitle">
            Order By: <i>{item.name.toUpperCase()}</i>
          </h5>
        </div>

        <table>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
          {arr.map((it, index) => (
            <tr key={index}>
              <td>{it.title}</td>
              <td>{"₹" + it.price}</td>
            </tr>
          ))}
        </table>

        <h5 id="totalprice">Total price ₹{item.totalPrice}</h5>
        <button
          className="btn btn-primary"
          style={{
            margin: "5% 7%",
            backgroundColor: "red",
            border: "1px Solid White",
          }}
          onClick={() => deleteFn()}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default RecentCard;

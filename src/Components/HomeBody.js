import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./CSS/HomeBody.css";
import Slider from "./Slider";

const HomeBody = ({ getTheCartValue, getTheItems, setCost }) => {
  const [itemsArray, setItemsArray] = useState([]);
  const [content, setContent] = useState("Search your items here");

  const searchQuery = useRef("");

  const [fetchedData, setFetchedData] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    getTheCartValue(cartValue);
    getTheItems(itemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartValue]);

  async function searchItems() {
    let itemsArray = [];
    const api_key = process.env.REACT_APP_api_key;

    await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${searchQuery.current.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((item) => {
          const newItem = {
            ...item,
            price: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
          };

          itemsArray.push(newItem);
        });
        setFetchedData(itemsArray);
        setContent(`Search Results Are here Scroll Down to see the items`);
      });
  }

  const images = [
    {
      imgURL:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-1",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-2",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-3",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-4",
    },
  ];

  return (
    <>
      <div>
        <Slider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </Slider>

        <div className="itemssearch">
          <h2>{content}</h2>
          <div className="formdiv">
            <input
              type="text"
              className="form-control textinput"
              placeholder="Search food items"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={searchQuery}
            />
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-primary searchbutton"
              onClick={searchItems}
            >
              Search
            </button>
          </div>

          <div className="row" id="itemsdiv">
            {fetchedData.length === 0 || searchQuery.current.value === "" ? (
              <h2>No items Found</h2>
            ) : (
              fetchedData.map((item) => (
                <Card
                  item={item}
                  key={item.id}
                  setCartValue={setCartValue}
                  setItemsArray={setItemsArray}
                  itemsArray={itemsArray}
                  setCost={setCost}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {/* <div id="images"></div>

      <br></br>
      <br></br>
      <br></br> */}
    </>
  );
};

export default HomeBody;

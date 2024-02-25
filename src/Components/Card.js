import React, { useState } from 'react'
import './CSS/Card.css'

const Card = ({ item, setCartValue, setItemsArray, itemsArray, setCost }) => {

    const [btnDisable, setBtnDisable] = useState(false)

    const addToCart = () =>{
        setCartValue(prevCount => prevCount + 1)
        setBtnDisable(true)
        setItemsArray(prevItems => [...prevItems,item])
        setCost(prevValue => prevValue + item.price)
    }

    const deleteFromCart = () => {
        setCartValue(prevCount => prevCount - 1)
        setBtnDisable(false)
        itemsArray.pop(item)
        setCost(prevValue => prevValue - item.price)
    }


  return (
    <div className="card card-style" style={{width: '18rem'}}>
        <img src={item.image} className="card-img-top" alt="item"/>

        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h5>₹{item.price}</h5>
            <button className="btn btn-primary" onClick={addToCart} id='addcartbtn' disabled={btnDisable}>Add to cart</button>
            <button className="btn btn-primary" onClick={deleteFromCart} id='deletecartbtn' disabled={!btnDisable}>Delete from cart</button>
        </div>
    </div>
  )
}


export default Card
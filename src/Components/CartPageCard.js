import React, { useEffect, useState } from 'react'
import './CSS/CartPageCard.css'

const CartPageCard = ({ item, setIncrement, getTotalCost, cost }) => {

  const [itemCount, setItemCount] = useState(1)
  const [totalItemCost, setTotalItemCost] = useState(item.price)

  const Decrement = () => {
    if(itemCount > 1){
      setItemCount(prevValue => prevValue - 1)
      setTotalItemCost(item.price * (itemCount-1))
      setIncrement(false)
      getTotalCost(cost => cost - item.price)
    }
  }

  const Increment = () => {
      setItemCount(prevValue => prevValue + 1)
      setTotalItemCost(item.price * (itemCount+1))
      setIncrement(true)
      getTotalCost(cost => cost + item.price)
  }

  return (
    <>
        <div className="card card-style" style={{width: '18rem',paddingBottom: '2%'}}>
          <img src={item.image} className="card-img-top" alt="item"/>

          <div className="card-body">
              <h5 className="card-title" id='itemtitle'>{item.title}</h5>
              <h5 id='price'>Price: ₹{item.price}</h5>
          </div>

          <div className='container countdiv'>            
              <button onClick={Decrement} style={{marginRight: '10%'}} className='btn btn-primary decrebtn'>-</button>  
              <h5 id="counting">{itemCount}</h5>
              <button onClick={Increment} style={{marginLeft: '10%'}} className='btn btn-primary'>+</button>         
          </div>

          <h5 id='totalprice'>Total: ₹{totalItemCost}</h5>
        
      </div>

  </>
  )
}

export default CartPageCard
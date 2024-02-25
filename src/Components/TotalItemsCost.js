import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/TotalItemsCost.css'

const TotalItemsCost = ({ cartValue, quantity, cost }) => {

  const navigate = useNavigate()

  const successHandler = () => {
    if(cartValue !== 0){
      navigate('/success')
    }
  }

  return (
    <>
      <div className='totalcostdiv'>
        <h1 id='itemsdetails'>Your items details</h1>
        <h4 id='totalitems'>Total items: {cartValue}</h4>
        <h4 id='totalquantity'>Total quantity: {quantity}</h4>
        <h3 id='totalcost'>Total cost: ₹{cost}</h3> 
      
        <button className='btn btn-primary' id='ordernow' onClick={successHandler}>Order now</button>
      </div>
    </>
  )
}

export default TotalItemsCost
import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem'
//import {toast} from "react-hot-toast"
import { Link } from 'react-router-dom'
const  Cart  = () => {


    const {cart} =useSelector((state) => state)
    const [totalAmount,setTotalAmount]=useState(0)

    useEffect( () => {
        setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0) )
    },[cart])
  return (
    <div> 
   {
            cart.length >0 ?
            (<div>
                <div>
                    {

                        cart.map( (item,index) => {
                            return <Cartitem key={item.id} item={item} itemIndex={index}/>


                        })
                    }

                </div>
                <div>
                    <div>Your Cart</div>
                    <div>SUMMARY</div>
                    <p>
                        <span>Total Items: {cart.length}</span>
                    </p>


                </div>
                <div>
                    <p>Total Amount: {totalAmount}</p>
                    <button>
                        checkout Now 
                    </button>
                </div>

            </div>) :
            (<div>
                <h1>Cart Empty</h1>
                <Link to={"/"}>
                  <button>
                    Shop Now
                  
                  </button>
                </Link>
                
            </div>)
        }
      
    </div>
  )
}

export default  Cart 

import React from 'react'
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'
const CartContainer = () => {
  const dispatch=useDispatch();
    const{cartItems,amount,total}=useSelector((store)=>store.cart)
    if(amount<1){
      return <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='cart-empty'>Is currently empty</h4>
        </header>
      </section>
    }
  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item)=>{
          return <CartItem key={item.id}{...item}/>
        })}
      </div>
      <footer>
        <hr/>
        <div className='cart-total'>
          <h4>
            Total<span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn'
         onClick={() => {
          dispatch(openModal());
        }}>Clear Cart</button>
      </footer>
    </section>
  )
}

export default CartContainer
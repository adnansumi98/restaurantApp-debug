import {useContext} from 'react'
import {CartContext} from '../../Utility/CartContext'
import Header from '../Header'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import './index.css'

const Cart = () => {
  const {cartList} = useContext(CartContext)

  return (
    <div className="cart-container">
      <Header />
      {cartList.length === 0 ? <EmptyCart /> : <CartList cartList={cartList} />}
    </div>
  )
}
export default Cart

import {useContext} from 'react'
import {CartContext} from '../../Utility/CartContext'
import Header from '../Header'
import CartList from './CartList'
import './index.css'

const Cart = () => {
  const {cartList} = useContext(CartContext)

  return (
    <>
      <Header />
      <CartList cartList={cartList} />
    </>
  )
}
export default Cart

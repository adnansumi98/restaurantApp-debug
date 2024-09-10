import {useContext} from 'react'
import {CartContext} from '../../Utility/CartContext'
import Header from '../Header'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const totalPrice = () =>
    cartList.reduce(
      (total, item) =>
        // console.log(item.price, item.quantity)
        total + item.price * item.quantity,
      0,
    )

  return (
    <div className="cart-container">
      <Header />
      {cartList.length > 0 && (
        <div className="remove-all-button-container">
          <button
            className="remove-all-button"
            type="button"
            onClick={() => removeAllCartItems()}
          >
            Remove All
          </button>
        </div>
      )}
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartList cartList={cartList} />
          <h3 className="cart-item-label total-label">Grand Total </h3>
          <h3 className="cart-item-measure total-value">
            {totalPrice().toFixed(2)}
          </h3>
        </>
      )}
    </div>
  )
}
export default Cart

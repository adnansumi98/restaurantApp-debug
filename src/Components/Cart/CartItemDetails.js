import {useContext} from 'react'
import {CartContext} from '../../Utility/CartContext'
import Quantity from './Quantity'

const CartItemDetails = props => {
  const {dishId, imageUrl, dishName, quantity, price, totalPrice} = props
  const {removeCartItem} = useContext(CartContext)

  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={imageUrl} alt={dishName} />
      <div className="cart-item-dish-container">
        <p className="cart-item-heading">{dishName}</p>
        <Quantity quantity={quantity} id={dishId} />
      </div>
      <div className="measure-container">
        <p className="cart-item-label">Quantity</p>
        <p className="cart-item-measure">{`${quantity}`}</p>
      </div>
      <div className="measure-container">
        <p className="cart-item-label">Unit</p>
        <p className="cart-item-measure">{`${Number(price).toFixed(2)}`}</p>
      </div>
      <div className="measure-container">
        <p className="cart-item-label">Total</p>
        <p className="cart-item-measure">{`${Number(totalPrice).toFixed(
          2,
        )}`}</p>
      </div>
      <button
        className="remove-all-button remove-button"
        style={{position: 'relative', bottom: '60px'}}
        type="button"
        onClick={() => removeCartItem(dishId)}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItemDetails

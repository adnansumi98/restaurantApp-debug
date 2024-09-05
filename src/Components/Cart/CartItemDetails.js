import Quantity from './Quantity'

const CartItemDetails = props => {
  const {imageUrl, dishName, quantity, price, totalPrice} = props

  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={imageUrl} alt={dishName} />
      <div className="cart-item-dish-container">
        <p className="cart-item-heading">{dishName}</p>
        <Quantity />
      </div>
      <p className="cart-item-measure">{quantity}</p>
      <p className="cart-item-measure">{`SAR ${Number(price).toFixed(2)}`}</p>
      <p className="cart-item-measure">{`SAR ${Number(totalPrice).toFixed(
        2,
      )}`}</p>
    </div>
  )
}

export default CartItemDetails

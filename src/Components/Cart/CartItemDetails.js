import Quantity from '../Quantity'

const CartItemDetails = props => {
  const {imageUrl, dishName, quantity, price, totalPrice} = props

  return (
    <div>
      <img className="cart-item-image" src={imageUrl} alt={dishName} />
      <div className="cart-item-dish-container">
        <h1 className="cart-item-heading">{dishName}</h1>
        <Quantity />
      </div>
      <h1 className="cart-item-measure">{quantity}</h1>
      <h1 className="cart-item-measure">{price}</h1>
      <h1 className="cart-item-measure">{totalPrice}</h1>
    </div>
  )
}

export default CartItemDetails

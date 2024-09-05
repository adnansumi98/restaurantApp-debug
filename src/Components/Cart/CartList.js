import CartItemDetails from './CartItemDetails'

const CartList = props => {
  const {cartList} = props

  return (
    <ul className="cart-list-container">
      {cartList.map(cartObject => {
        const {imageUrl, name, quantity, price, totalPrice} = cartObject
        return (
          <li className="dish-item-list">
            <CartItemDetails
              imageUrl={imageUrl}
              dishName={name}
              quantity={quantity}
              price={price}
              totalPrice={price * quantity}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default CartList

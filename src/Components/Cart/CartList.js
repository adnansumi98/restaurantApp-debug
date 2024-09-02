import CartItemDetails from './CartItemDetails'

const CartList = props => {
  const {cartList} = props

  return (
    <ul className="cart-list-containe">
      {cartList.map(cartObject => {
        const {imageUrl, dishName, quantity, price, totalPrice} = cartObject
        return (
          <li>
            <CartItemDetails
              imageUrl={imageUrl}
              dishName={dishName}
              quantity={quantity}
              price={price}
              totalPrice={totalPrice}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default CartList

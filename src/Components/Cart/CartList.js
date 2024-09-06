import CartItemDetails from './CartItemDetails'

const CartList = props => {
  const {cartList} = props

  return (
    <ul className="cart-list-container">
      {cartList.map(cartObject => {
        const {id, imageUrl, name, quantity, price} = cartObject
        return (
          <li className="dish-item-list" key={id}>
            <CartItemDetails
              imageUrl={imageUrl}
              dishName={name}
              quantity={quantity}
              price={price}
              totalPrice={price * quantity}
              dishId={id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default CartList

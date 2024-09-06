import {useContext} from 'react'
import {CartContext} from '../../Utility/CartContext'
import '../Quantity/index.css'

const Quantity = ({id, quantity}) => {
  const {incrementCartItemQuantity, decrementCartItemQuantity} = useContext(
    CartContext,
  )

  return (
    <div className="dish-quantity-contianer">
      <button
        className="dish-quantity-button"
        type="button"
        onClick={() => decrementCartItemQuantity(id)}
      >
        -
      </button>
      {quantity > 0 ? (
        <p className="dish-quantity-button" value={quantity}>
          {quantity}
        </p>
      ) : (
        <p className="dish-quantity-button" value={quantity}>
          0
        </p>
      )}
      <button
        className="dish-quantity-button"
        type="button"
        onClick={() => incrementCartItemQuantity(id)}
      >
        +
      </button>
    </div>
  )
}

export default Quantity

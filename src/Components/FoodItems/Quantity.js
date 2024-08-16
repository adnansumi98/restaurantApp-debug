import {useState} from 'react'

const Quantity = ({setTotalQuantity}) => {
  const [quantity, setQuantity] = useState(0)

  const handleDecreaseQuantity = () => {
    const decreaseQuantity = dec => {
      if (dec > 0) {
        return dec - 1
      }
      return 0
    }
    setQuantity(prevQuantity => decreaseQuantity(prevQuantity))

    const decreaseTotalQuantity = decTotal => {
      if (quantity > 0) {
        return decTotal - 1
      }
      return decTotal
    }
    setTotalQuantity(prevTotalQuantity =>
      decreaseTotalQuantity(prevTotalQuantity),
    )
  }

  const handleIncreaseQuantity = () => {
    const increaseQuantity = inc => {
      if (inc < 20) {
        return inc + 1
      }
      return inc
    }
    setQuantity(prevQuantity => increaseQuantity(prevQuantity))

    const increaseTotalQuantity = incTotal => {
      if (quantity < 20) {
        return incTotal + 1
      }
      return incTotal
    }
    setTotalQuantity(prevTotalQuantity =>
      increaseTotalQuantity(prevTotalQuantity),
    )
  }

  return (
    <div className="dish-quantity-contianer">
      <button
        className="dish-quantity-button"
        type="button"
        onClick={handleDecreaseQuantity}
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
        onClick={handleIncreaseQuantity}
      >
        +
      </button>
    </div>
  )
}

export default Quantity

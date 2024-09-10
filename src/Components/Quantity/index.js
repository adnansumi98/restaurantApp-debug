import {useState, useCallback} from 'react'
import './index.css'

const Quantity = ({item, setTotalQuantity, handleAddToCart}) => {
  const [quantity, setQuantity] = useState(0)

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity(prev => Math.max(0, prev - 1))
    setTotalQuantity(prev => Math.max(0, prev - 1))
  }, [setTotalQuantity])

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(prev => Math.min(20, prev + 1))
    setTotalQuantity(prev => Math.min(20, prev + 1))
  }, [setTotalQuantity])

  const handleAddToCartClick = useCallback(() => {
    handleAddToCart(item, quantity)
    setQuantity(0) // Reset quantity after adding to cart
  }, [item, quantity, handleAddToCart])

  return (
    <div className="quantity-container">
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
      {quantity > 0 && (
        <>
          <button
            type="button"
            className="add-to-cart-button desktop"
            onClick={handleAddToCartClick}
            aria-label={`Add ${item.dish_name} to cart`}
          >
            Add to cart
          </button>
        </>
      )}
    </div>
  )
}

export default Quantity

import {useState, useCallback, useEffect} from 'react'
import './index.css'

const Quantity = ({item, setTotalQuantity, handleAddToCart}) => {
  const [dishQuantity, setDishQuantity] = useState(0)

  useEffect(() => {
    console.log('Initial dishQuantity:', dishQuantity)
    // eslint-disable-next-line
  }, [])

  const handleDecreaseQuantity = useCallback(() => {
    setDishQuantity(prev => Math.max(0, prev - 1))
    setTotalQuantity(prev => Math.max(0, prev - 1))
  }, [setTotalQuantity])

  const handleIncreaseQuantity = useCallback(() => {
    setDishQuantity(prev => Math.min(20, prev + 1))
    setTotalQuantity(prev => Math.min(20, prev + 1))
  }, [setTotalQuantity])

  const handleAddToCartClick = useCallback(() => {
    handleAddToCart(item, dishQuantity)
    // Don't reset dishQuantity here, let it remain for the user to see
  }, [item, dishQuantity, handleAddToCart])

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
        <p className="dish-quantity-button">{dishQuantity}</p>
        <button
          className="dish-quantity-button"
          type="button"
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
      {dishQuantity > 0 && (
        <>
          <button
            type="button"
            className="add-to-cart-button desktop"
            onClick={handleAddToCartClick}
            aria-label={`Add ${item.dish_name} to cart`}
          >
            ADD TO CART
          </button>
        </>
      )}
    </div>
  )
}

export default Quantity

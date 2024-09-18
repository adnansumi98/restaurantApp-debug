import {useState, useCallback, useEffect} from 'react'
import './index.css'

const Quantity = ({item, handleAddToCart}) => {
  const [dishQuantity, setDishQuantity] = useState(0)
  const [dishAvailability, setDishAvailability] = useState(true)
  // console.log(activeCategory)

  // test case 10: checking initial render of dishQuantity should be 0
  useEffect(() => {
    console.log('Initial dishQuantity:', dishQuantity)
    // eslint-disable-next-line
  }, [])

  // test case 24: after initial render, the dishAvailability should be updated
  useEffect(() => {
    setDishAvailability(item.dish_Availability)
    // eslint-disable-next-line
  }, [dishAvailability])

  const handleDecreaseQuantity = () => {
    setDishQuantity(prev => (prev > 0 ? prev - 1 : 0))
  }

  const handleIncreaseQuantity = () => {
    // test case for increase in quantity failure
    setDishQuantity(prev => prev + 1)
  }

  const handleAddToCartClick = useCallback(() => {
    handleAddToCart(item, dishQuantity)
    // Don't reset dishQuantity here, let it remain for the user to see
  }, [item, dishQuantity, handleAddToCart])

  return (
    <div className="quantity-container">
      {dishAvailability ? (
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
      ) : (
        <p className="dish-not-available">Not available</p>
      )}
      {dishQuantity > 0 && (
        <>
          <button
            type="button"
            className="add-to-cart-button desktop"
            onClick={handleAddToCartClick}
            // aria-label={`Add ${item.dish_name} to cart`}
          >
            ADD TO CART
          </button>
        </>
      )}
    </div>
  )
}

export default Quantity

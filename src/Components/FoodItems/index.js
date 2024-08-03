import {useState} from 'react'
import './index.css'

const FoodItems = props => {
  const {foodItemsList} = props
  console.log(foodItemsList[0])
  const [quantity, setQuantity] = useState(0)

  return (
    <ul>
      {foodItemsList.map(dish => (
        <li className="fooditems-container" key={dish.dish_id}>
          <div
            className={`dish-category-container type-${dish.dish_Type}-container`}
          >
            <p className={`dish-category-item type-${dish.dish_Type}-item`} />
          </div>
          <div className="dish-details">
            <p className="dish-name">{dish.dish_name}</p>
            <p className="dish-price">{`SAR ${dish.dish_price}`}</p>
            <p className="dish-description">{dish.dish_description}</p>
            <div className="dish-quantity-contianer">
              <button className="dish-quantity-button" type="button">
                -
              </button>
              <button className="dish-quantity-button" type="button">
                {quantity}
              </button>
              <button className="dish-quantity-button" type="button">
                +
              </button>
            </div>
          </div>
          <p className="dish-calories">{`${dish.dish_calories} calories `}</p>
          <img
            className="dish-image"
            src={dish.dish_image}
            alt={dish.dish_name}
          />
        </li>
      ))}
    </ul>
  )
}

export default FoodItems

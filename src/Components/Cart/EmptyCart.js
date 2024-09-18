import {Link} from 'react-router-dom'
import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-container">
    <h1 className="empty-cart-heading">Add food to cart</h1>
    <div className="empty-cart-image-container">
      <img
        className="empty-cart-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="Empty Cart"
      />
    </div>
    <p className="empty-cart-text">get back add food items</p>
    <Link to="/">
      <button type="button" className="empty-cart-button">
        Home
      </button>
    </Link>
  </div>
)

export default EmptyCart

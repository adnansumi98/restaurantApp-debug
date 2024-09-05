import {Link} from 'react-router-dom'
import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-container">
    <h1 className="empty-cart-heading">Add food to cart</h1>
    <div className="empty-cart-image-container">
      <img className="empty-cart-image" src="" alt="Empty Cart" />
    </div>
    <p className="empty-cart-text">Kindly add food items to checkout </p>
    <Link to="/">
      <button type="button" className="empty-cart-button">
        Home
      </button>
    </Link>
  </div>
)

export default EmptyCart

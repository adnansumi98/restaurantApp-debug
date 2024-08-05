import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const {name, quantity} = props

  return (
    <div className="header-container">
      <h1 className="header-title">{name}</h1>
      <div className="header-cart-contaier">
        <p className="header-my-orders">My Orders</p>
        <AiOutlineShoppingCart size={40} className="cart-icon" />
        <p className="cart-quantity" data-testid="cart">
          {quantity > 0 ? quantity : 0}
        </p>
      </div>
    </div>
  )
}

export default Header

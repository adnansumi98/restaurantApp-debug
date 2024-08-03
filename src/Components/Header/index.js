import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const {name, quantity} = props

  return (
    <div className="header-container">
      <h1 className="header-title">{name}</h1>
      <div className="header-cart-contaier">
        <AiOutlineShoppingCart size={40} className="cart-icon" />
        <p className="cart-quantity">{quantity}</p>
      </div>
    </div>
  )
}

export default Header

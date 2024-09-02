import {AiOutlineShoppingCart, AiOutlineLogout} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const onClickLogOut = () => {
  Cookies.remove('jwt_token')
}

const Header = props => {
  const {name, quantity} = props

  return (
    <div className="header-container">
      <h1 className="header-title">{name}</h1>
      <div className="header-cart-contaier">
        <p className="header-my-orders">My Orders</p>
        <Link to="/cart" className="cart-link-container">
          <AiOutlineShoppingCart size={40} className="cart-icon" />
          <p className="cart-quantity" data-testid="cart" value="cart count">
            {quantity > 0 ? quantity : 0}
          </p>
        </Link>
        <AiOutlineLogout
          size={40}
          className="cart-icon logout-button logout-icon"
        />
        <button className="logout-button" type="button" onClick={onClickLogOut}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header

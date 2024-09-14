import {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {AiOutlineShoppingCart, AiOutlineLogout} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {CartContext} from '../../Utility/CartContext'
import {NameContext} from '../../Utility/NameContext'

import './index.css'

const Header = () => {
  const {restaurantName} = useContext(NameContext)
  const {cartList} = useContext(CartContext)

  const history = useHistory()

  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    history.push('/')
  }

  return (
    <div className="header-container">
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1 className="header-title">{restaurantName}</h1>{' '}
      </Link>
      <div className="header-cart-contaier">
        <p className="header-my-orders">My Orders</p>
        <Link to="/cart" className="cart-link-container">
          <AiOutlineShoppingCart size={40} className="cart-icon" />
          <p className="cart-quantity" data-testid="cart" value="cart count">
            {cartList.length}
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

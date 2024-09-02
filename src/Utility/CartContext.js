import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    console.log('cart updated', cartList)
  }, [cartList])

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartList(
      cartList.map(item =>
        item.id === itemId ? {...item, quantity: newQuantity} : item,
      ),
    )
  }

  const addCartItem = cartObject => {
    const newItem = cartObject
    setCartList(prevCart => [...prevCart, newItem])
  }

  const removeCartItem = itemId => {
    const updatedCart = cartList.filter(item => item.id !== itemId)
    setCartList(updatedCart)
  }

  const getTotalQuantity = () => cartList.length
  // return cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    // TODO: need to account for addons
    cartList.reduce((total, item) => total + item.quantity * item.price, 0)

  const removeAllCartItems = () => {
    setCartList([])
  }

  const incrementCartItemQuantity = () => {
    console.log('pass')
  }

  const decrementCartItemQuantity = () => {
    console.log('pass')
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        handleQuantityChange,
        addCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
        getTotalQuantity,
        getTotalPrice,
        removeAllCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

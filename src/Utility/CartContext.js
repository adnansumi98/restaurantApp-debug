import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    console.log('cart updated', cartList)
  }, [cartList])

  // const handleQuantityChange = (itemId, newQuantity) => {
  //   setCartList(
  //     cartList.map(item =>
  //       item.id === itemId ? {...item, quantity: newQuantity} : item,
  //     ),
  //   )
  // }

  const addCartItem = cartObject => {
    setCartList(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === cartObject.id,
      )
      if (existingItemIndex !== -1) {
        // Item already exists, update its quantity and total
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity:
            updatedCart[existingItemIndex].quantity + cartObject.quantity,
          total:
            (updatedCart[existingItemIndex].quantity + cartObject.quantity) *
            cartObject.price,
        }
        return updatedCart
      }
      // Item doesn't exist, add it to the cart
      return [...prevCart, cartObject]
    })
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

  // const getCartItem = itemId => cartList.find(item => item.id === itemId)

  const incrementCartItemQuantity = itemId => {
    setCartList(
      cartList.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = itemId => {
    setCartList(
      cartList.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity - 1} : item,
      ),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
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

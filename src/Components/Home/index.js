import {useEffect, useState} from 'react'
import Header from '../Header'

import './index.css'

const Home = () => {
  const [resaurantObject, setRestaurantObject] = useState([])
  const [name, setName] = useState('')
  const [totalQuantity, setTotalQuanity] = useState(0)

  useEffect(() => {
    const fetchResource = async () => {
      const url =
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
      const options = {
        method: 'GET',
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setRestaurantObject(data[0])
      } catch (error) {
        console.error(`Something went wrong: ${error}`)
      }
    }
    fetchResource()
  }, [])

  useEffect(() => {
    setName(resaurantObject.restaurant_name)
  }, [resaurantObject])

  return (
    <>
      <Header name={name} quantity={totalQuantity} />
    </>
  )
}

export default Home

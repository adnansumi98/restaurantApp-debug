import {useState, useEffect} from 'react'
import './index.css'

const Home = () => {
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
        console.log(data)
      } catch (error) {
        console.error(`Something went wrong: ${error}`)
      }
    }

    fetchResource()
  }, [])

  return <div>{}</div>
}

export default Home

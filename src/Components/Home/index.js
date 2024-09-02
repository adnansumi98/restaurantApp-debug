import {useEffect, useState} from 'react'
import Header from '../Header'
import Categories from '../Categories'
import FoodItems from '../FoodItems'
import {restaurantAppAPIUrl} from '../../Utility/Constants'
import './index.css'

const Home = () => {
  const [resaurantObject, setRestaurantObject] = useState([])
  const [name, setName] = useState('')
  const [totalQuantity, setTotalQuanity] = useState(0)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [foodItems, setFoodItems] = useState([])

  useEffect(() => {
    const fetchResource = async () => {
      const url = restaurantAppAPIUrl
      const options = {
        method: 'GET',
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        // console.log(data)
        setRestaurantObject(data[0])
      } catch (error) {
        console.error(`Something went wrong: ${error}`)
      }
    }
    fetchResource()
  }, [])

  useEffect(() => {
    // console.log(resaurantObject)
    setName(resaurantObject.restaurant_name)
    // to handle error on initial rendering
    if (resaurantObject.length !== 0) {
      // return category with id and name
      const categoriesObject = resaurantObject.table_menu_list.map(each => ({
        id: each.menu_category_id,
        category: each.menu_category,
      }))
      setCategories(categoriesObject)
    }
  }, [resaurantObject])

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0])
    }
  }, [categories])

  const filterFoodItems = filterbyCategory => {
    const foodItemsList = resaurantObject.table_menu_list
      .filter(category => category.menu_category === filterbyCategory.category)
      .map(menu => menu.category_dishes)
    return foodItemsList
  }
  useEffect(() => {
    if (selectedCategory.length !== 0) {
      const foodItemsList = filterFoodItems(selectedCategory)
      setFoodItems(foodItemsList[0])
    }
    // eslint-disable-next-line
  }, [selectedCategory])

  return (
    <div className="home-container">
      <Header
        name={name}
        quantity={totalQuantity}
        setQuanity={setTotalQuanity}
      />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FoodItems
        foodItemsList={foodItems}
        totalQuantity={totalQuantity}
        setTotalQuantity={setTotalQuanity}
      />
    </div>
  )
}

export default Home

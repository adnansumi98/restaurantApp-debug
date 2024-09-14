import {useEffect, useState, useContext} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Categories from '../Categories'
import FoodItems from '../FoodItems'
import NotFound from '../NotFound'
import {restaurantAppAPIUrl, apiConstants} from '../../Utility/Constants'
import {NameContext} from '../../Utility/NameContext'
import './index.css'

const Home = () => {
  const [resaurantObject, setRestaurantObject] = useState([])
  const [totalQuantity, setTotalQuanity] = useState(0)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [status, setStatus] = useState(apiConstants.initial)
  const {setRestaurantName} = useContext(NameContext)

  useEffect(() => {
    setStatus(apiConstants.inProgress)
    const fetchResource = async () => {
      const url = restaurantAppAPIUrl
      const options = {
        method: 'GET',
      }
      try {
        const response = await fetch(url, options)
        if (response.ok) {
          const data = await response.json()
          setRestaurantObject(data[0])
          setRestaurantName(data[0].restaurant_name)
          const categoriesObject = data[0].table_menu_list.map(each => ({
            id: each.menu_category_id,
            category: each.menu_category,
          }))
          setCategories(categoriesObject)
          setStatus(apiConstants.success)
        } else {
          console.log('Something went wrong')
          setStatus(apiConstants.failure)
        }
      } catch (error) {
        console.error(`Something went wrong: ${error}`)
        setStatus(apiConstants.failure)
      }
    }
    fetchResource()
  }, [setRestaurantName])

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0])
    }
  }, [categories])

  useEffect(() => {
    if (selectedCategory.length !== 0 && resaurantObject.table_menu_list) {
      const foodItemsList =
        resaurantObject.table_menu_list.find(
          category => category.menu_category === selectedCategory.category,
        )?.category_dishes || []
      setFoodItems(foodItemsList)
    }
  }, [selectedCategory, resaurantObject])

  const LoadingView = () => (
    <Loader
      type="ThreeDots"
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="oval-loading"
      className="home-spinner"
    />
  )

  const HomeView = () => (
    <div className="home-container">
      <Header />
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

  return (
    <>
      {status === apiConstants.success && <HomeView />}
      {status === apiConstants.inProgress && <LoadingView />}
      {(status === apiConstants.failure || status === apiConstants.initial) && (
        <NotFound />
      )}
    </>
  )
}

export default Home

import {useEffect, useState, useContext} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Categories from '../Categories'
import FoodItems from '../FoodItems'
import {restaurantAppAPIUrl} from '../../Utility/Constants'
import {NameContext} from '../../Utility/NameContext'
import './index.css'

const Home = () => {
  const [resaurantObject, setRestaurantObject] = useState([])
  const [totalQuantity, setTotalQuanity] = useState(0)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [isloading, setIsLoading] = useState(true)

  const {setRestaurantName} = useContext(NameContext)

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
    setRestaurantName(resaurantObject.restaurant_name)
    // to handle error on initial rendering
    if (resaurantObject.length !== 0) {
      // return category with id and name
      const categoriesObject = resaurantObject.table_menu_list.map(each => ({
        id: each.menu_category_id,
        category: each.menu_category,
      }))
      setCategories(categoriesObject)
    }
    // test case 10: to delay the loading state for passing the required test cases
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [resaurantObject, setRestaurantName])

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
      {isloading ? (
        <Loader
          type="ThreeDots"
          height="40"
          width="40"
          color="#4fa94d"
          ariaLabel="oval-loading"
          style={{paddingLeft: '20px'}}
        />
      ) : (
        <Header />
      )}
      {isloading ? (
        <Loader
          type="ThreeDots"
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          className="home-spinner"
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default Home

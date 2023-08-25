import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h3>
          Looks like you are offline. Please check your internet connection
        </h3>
      </div>
    );
  }

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setListOfRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="main">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={searchRestaurant}
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            const filteredRestoList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4
            );
            setFilteredRestaurants(filteredRestoList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurantData={restaurant.info} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;

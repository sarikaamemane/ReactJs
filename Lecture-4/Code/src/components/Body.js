import restaurantList from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // let restaurantList = [
  //   {
  //     data: {
  //       id: "683199",
  //       name: "Third Wave Coffee",
  //       cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       deliveryTime: 34,
  //       avgRating: "4.2",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "68310",
  //       name: "KFC",
  //       cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       deliveryTime: 34,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "68313",
  //       name: "CCD",
  //       cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       deliveryTime: 34,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "123",
  //       name: "Starbucks",
  //       cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
  //       cuisines: ["Beverages", "Bakery", "Continental"],
  //       costForTwo: 40000,
  //       deliveryTime: 34,
  //       avgRating: "4.3",
  //     },
  //   },
  // ];

  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.075744915912157&lng=72.86600489169359&collection=89155&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING"
    );

    const json = await data.json();
    json.data["restaurantList"] = restaurantList;
    setListOfRestaurant(json?.data?.restaurantList);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <main className="main">
      <div className="filter">
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            const filteredRestoList = restaurantList.filter(
              (rest) => rest.data.avgRating > 4
            );
            setListOfRestaurant(filteredRestoList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </main>
  );
};

export default Body;

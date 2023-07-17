import restaurantList from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";

const Body = () => {
  return (
    <main className="main">
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>

      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
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

import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    id,
  } = props.restaurantData.data;
  return (
    <div className="restaurant-card">
      <img src={LOGO_URL + cloudinaryImageId} alt="Food Image"></img>
      <h2> {name}</h2>
      <p>{cuisines}</p>
      <p>{avgRating} </p>
      <p>{deliveryTime}</p>
      <p> {costForTwo / 100}</p>
    </div>
  );
};

export default RestaurantCard;

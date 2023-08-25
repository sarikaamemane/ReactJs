import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId, id } =
    restaurantData;
  return (
    <div className="restaurant-card">
      <img src={LOGO_URL + cloudinaryImageId} alt="Food Image"></img>
      <h2> {name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating} </p>
      <p>{sla.deliveryTime}</p>
      <p> {costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;

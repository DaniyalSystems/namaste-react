import React, {useContext, useEffect, useState} from "react";
import Shimmer from "../shimmer";
import { RESTAURANTS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import RestaurantCard, {withHighRating} from "../Restaurants/RestaurantCard";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";
import userContext from "../../utils/UserContext";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const navigate = useNavigate();

  let [resList, setResList] = useState([]);
  let [resFilteredList, setResFilteredList] = useState([]);
  let [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS);
    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const status = useOnlineStatus();

  if (status === false) {
    return <h1>You are offline, Please check your internet connection.</h1>;
  }

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    const filtered = resList.filter((res) =>
      res.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setResFilteredList(filtered);
  };

  const handleTopRatedRestaurants = () => {
    const filtered = resList.filter((res) => res.info.avgRating >= 4.4);
    setResFilteredList(filtered);
  };

  // Updating context with input field
  const {setUserName} = useContext(UserContext);
  const handleInputField = (event) => {
    setUserName(event.target.value);
  }

  const RestaurantRatingCards = withHighRating(RestaurantCard);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-layer">
        <div className="search">
          <input
            type="text"
            className="search-box"
            name="search-input"
            value={query}
            onChange={handleSearchInputChange}
          />
          <button className="search-btn" onClick={handleSearchButtonClick}>
            Search
          </button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={handleTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <input type="text" placeholder="User name" onChange={handleInputField} />
        </div>
      </div>
      <div className="restaurant-container">
        {resFilteredList.map((restaurant) => (
          <div
            key={restaurant.info.id}
            onClick={() => navigate("/restaurants/" + restaurant.info.id)}
          >
            {restaurant.info.avgRating >= 4.4 ? <RestaurantRatingCards resData={restaurant} /> :  <RestaurantCard resData={restaurant} />}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Body;

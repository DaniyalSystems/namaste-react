import React from "react";
import {IMAGE_URL} from "../../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {slaString} = resData?.info?.sla;
    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src={IMAGE_URL + cloudinaryImageId}
                     alt="Restaurant Image"/>
            </div>
            <div className="restaurant-info">
                <h3>{name}</h3>
                <h6>{cuisines.join(", ")}</h6>
                <h6>{avgRating}</h6>
                <h6>{costForTwo}</h6>
                <h6>{slaString}</h6>
            </div>
        </div>
    );
}

//Higher Order Component

export const withHighRating = (restaurantCard) => {
    return((props) => {
        return(
            <div>
                <label className="res_high_rated">High Rated</label>
                <RestaurantCard {...props} /> {/*//It will pass all the props I received.*/}
            </div>
        );
    })
}

export default RestaurantCard;
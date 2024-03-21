import React from "react";
import {IMAGE_URL} from "../../../utils/constants";
import logo from "../../../../public/assets/react-logo.png";

const MenuCard = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <div className="menu-card"  key={item?.card?.info?.id}>
                    <div className="menu-info">
                        <h3>{item?.card?.info?.name}</h3>
                        <h4>₹ {(item?.card?.info?.defaultPrice || item?.card?.info?.price) / 100}</h4>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    <div className="menu-image-container">
                        <img src={item?.card?.info?.imageId ? IMAGE_URL + item?.card?.info?.imageId : logo} alt="Menu Image"
                             className="menu-image"/>
                        <button className="menu-button">ADD {'\u002B'}</button>
                    </div>
                </div>
            ))}
        < /div>
    );
}

export default MenuCard;
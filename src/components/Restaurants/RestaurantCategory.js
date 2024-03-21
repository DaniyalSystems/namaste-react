import MenuCard from "./Menu/MenuCard";
import {useState} from "react";

const RestaurantCategory = ({data , showItems, toggleCatItems}) => {

    const {title, itemCards} = data?.card?.card;

    return (
        <div>
            <div className="cat">
                <div className="cat-header" onClick={toggleCatItems}>
                    <div className="cat-title">
                        <h3>{title} ({itemCards.length})</h3>
                    </div>
                    <span className="cat-title-icon">{showItems ? '\u25B2' : '\u25BC'}</span>
                </div>
                {showItems && (
                    <div className="cat-items">
                        <MenuCard items={itemCards} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RestaurantCategory;
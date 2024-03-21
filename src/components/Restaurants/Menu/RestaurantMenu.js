import Shimmer from "../../shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../../../utils/Hooks/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    const toggleCatItems = (index) => {
        setShowIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    if (resInfo === null) {
        return <Shimmer/>;
    }

    const {
        name, cuisines, costForTwoMessage, avgRating, totalRatingsString, sla, feeDetails
    } = resInfo.cards[0]?.card?.card?.info;
    const slaString = sla?.slaString;
    const fee = feeDetails?.message;

    const filterCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (<div className="menu">
        <h1 className="menu-title">{name}</h1>
        <div className="details-grid">
            <div className="detail-item">
                <p>{cuisines.join(", ")}</p>
            </div>
            <div className="detail-item">
                <p>{costForTwoMessage}</p>
            </div>
            <div className="detail-item">
                <p>{slaString}</p>
            </div>
            <div className="detail-item">
                <p>{fee}</p>
            </div>
            <div className="detail-item">
                <p><b>{avgRating}</b></p>
                <p>{totalRatingsString}</p>
            </div>
        </div>
        {
            filterCategories.map((cat, index) => (
                <RestaurantCategory key={cat?.card?.card?.title}
                                    data={cat}
                                    showItems={index === showIndex ? true : false}
                                    toggleCatItems={() => toggleCatItems(index)}/>
            ))
        }
    </div>);
};

export default RestaurantMenu;
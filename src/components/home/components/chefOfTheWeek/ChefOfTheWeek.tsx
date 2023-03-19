import React from "react";
import './chefOfTheWeek.css';
import { useDispatch, useSelector } from "react-redux";
import { filterRestaurants } from "../../../../store/slices/restaurantsSlice";
import { useEffect } from "react";
import { filterChefs } from "../../../../store/slices/chefsSlice";
import { Istore } from "../../../../types/interfaces/Istore";
import IRestaurant from "../../../../types/interfaces/mainInterfaces/IRestaurant";

const ChefOfTheWeek: React.FC = () => {
    const restaurantsData = useSelector((state: Istore) => state.restaurants.value);
    const chefData = useSelector((state: Istore) => state.chefs.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const chefOfTheWeekAction = "chef of the week"
        dispatch(filterRestaurants(chefOfTheWeekAction));
        dispatch(filterChefs(chefOfTheWeekAction));
    }, [])
    const chefOfTheWeek = chefData[0];

    return (
        <div id="chef-of-the-week-section">
            <p className="chef-of-the-week-titles">Chef of the week:</p>
            <div id="chefs-description">
                <div id="chef-image-container">
                    <img src={chefOfTheWeek.img} alt="" />
                    <span>{chefOfTheWeek.name}</span>
                </div>
                <p>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</p>
            </div>
            <p className="chef-of-the-week-titles chefs-restaurants-title">{chefOfTheWeek.name}’s Restaurants</p>
            <div id="chefs-restaurants">
                {restaurantsData.slice(0, 3).map((rest: IRestaurant, index) => (
                    <div key={index} className="week-restaurant-card">
                        <img src={rest.img} alt="" />
                        <span>{rest.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChefOfTheWeek;
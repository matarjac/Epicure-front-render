import React, { useEffect } from "react";
import "./popularRestaurants.css";
import RestaurantCard from "./reataurantCard/RestaurantCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterRestaurants } from "../../../../store/slices/restaurantsSlice";
import { Istore } from "../../../../types/interfaces/Istore";
import IRestaurant from "../../../../types/interfaces/mainInterfaces/IRestaurant";


const PopularRestaurants: React.FC = () => {
    const restaurantsData = useSelector((state: Istore) => state.restaurants.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(filterRestaurants('all'));
    }, [])

    return (
        <div className="populars-container">
            <h2>popular restaurant in epicure:</h2>
            <div className="popular-cards-container">
                {restaurantsData.slice(0, 3).map((rest: IRestaurant, index) => {
                    return <RestaurantCard
                        key={index}
                        img={rest.img}
                        name={rest.name}
                        chef={rest.chef}
                        rating={rest.rating}
                        location="/restaurants/"
                        restaurantNumber={rest.restaurantNumber}
                        isCloseable={false}
                        id={rest._id}
                    />

                })}
            </div>
            <button onClick={() => { navigate('/restaurants') }} id="all-restaurants-btn">All Restaurants {'>>'}</button>
        </div>
    );
}

export default PopularRestaurants;
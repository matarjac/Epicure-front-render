import React, { useState } from "react";
import RestaurantCard from "../../../home/components/popularRestaurants/reataurantCard/RestaurantCard";
import "./restaurantsCards.css";
import { useSelector } from 'react-redux';
import { Istore } from "../../../../types/interfaces/Istore";
import IRestaurant from "../../../../types/interfaces/mainInterfaces/IRestaurant";


const RestaurantsCards: React.FC = () => {

    const restaurantsData = useSelector((state: Istore) => state.restaurants.value);
    const [restaurants, setRestaurants] = useState<IRestaurant[]>(restaurantsData);

    const filterRestaurant = (id: string) => {
        const filteredRestaurants = restaurants.filter((rest: IRestaurant) => { return rest._id !== id });
        setRestaurants(filteredRestaurants);
        window.location.reload();
    }

    return (
        <div id="restaurants-cards-page">
            {restaurantsData.map((rest: IRestaurant, index) => (<RestaurantCard
                key={index}
                name={rest.name}
                img={rest.img}
                chef={rest.name}
                rating={rest.rating}
                restaurantNumber={rest.restaurantNumber}
                location=""
                isCloseable={true}
                id={rest._id}
                filterRestaurant={filterRestaurant}
            />
            ))}
        </div>
    );

}

export default RestaurantsCards;
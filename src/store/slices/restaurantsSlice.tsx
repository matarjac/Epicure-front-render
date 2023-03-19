import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import IRestaurant from "../../types/interfaces/mainInterfaces/IRestaurant";

// const getAllRestaurants = fetch('https://matars-epicure-server.onrender.com//restaurants', { method: 'GET' })
//     .then(response => response.json())
//     .then((data) => { return data })
//     .catch((err) => console.log(err));

// const restaurantsList = await getAllRestaurants;
const getAllRestaurants = axios.get('https://matars-epicure-server.onrender.com//restaurants');
const { data } = await getAllRestaurants;


export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        value: data,
        chefOfTheWeek: "Assaf Granit"
    },
    reducers: {
        filterRestaurants: (state, action) => {
            const filterType = action.payload;
            switch (filterType) {
                case "all":
                    state.value = data;
                    break;
                case "new":
                    state.value = data;
                    state.value = state.value.filter(
                        (restaurant: IRestaurant) => restaurant.isNew === true
                    );
                    break;
                case "most popular":
                    state.value = data;
                    state.value = state.value.filter(
                        (restaurant: IRestaurant) => restaurant.isPopular === true
                    );
                    break;
                case "open now":
                    let timeNow: Date = new Date;
                    const currentHour = timeNow.getHours();
                    state.value = data;
                    state.value = state.value.filter(
                        (restaurant: IRestaurant) => restaurant.openHour <= currentHour && restaurant.closeHour > currentHour
                    );
                    break;
                case "chef of the week":
                    state.value = data;
                    state.value = state.value.filter(
                        (restaurant: IRestaurant) => restaurant.chef == state.chefOfTheWeek
                    );
                    break;
                default:
                    state.value = data;
            }
        }

    }
});

export const { filterRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
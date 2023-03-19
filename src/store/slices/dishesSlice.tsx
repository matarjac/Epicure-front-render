import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import IDishCard from "../../types/interfaces/IDishCard";

const getAllDishes = axios.get('http://localhost:8000/dishes')
const { data } = await getAllDishes;

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: {
        value: data
    },
    reducers: {
        filterDishes: (state, action) => {
            const filterType = action.payload;
            switch (filterType) {
                case "all":
                    state.value = data;
                    break;

                case "popular":
                    state.value = data;
                    state.value = state.value.filter(
                        (dish:IDishCard) => dish.isPopular === true
                    )
                    break;
                case "breakfast":
                    state.value = data;
                    state.value = state.value.filter(
                        (dish:IDishCard) => dish.category === "breakfast"
                    )
                    break;
                case "launch":
                    state.value = data;
                    state.value = state.value.filter(
                        (dish:IDishCard) => dish.category === "launch"
                    )
                    break;
                case "dinner":
                    state.value = data;
                    state.value = state.value.filter(
                        (dish:IDishCard) => dish.category === "dinner"
                    )
                    break;
                default:
                    state.value = state.value;
            }
        }
    }
})

export const { filterDishes } = dishesSlice.actions;
export default dishesSlice.reducer;
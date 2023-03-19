import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import IChef from "../../types/interfaces/mainInterfaces/IChef";

const getAllChefs = axios.get('https://matars-epicure-server.onrender.com//chefs');
const { data } = await getAllChefs;

export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: data,
        chefOfTheWeek: "Assaf Granit"
    },
    reducers: {
        filterChefs: (state, action) => {
            const filterType = action.payload;
            switch (filterType) {
                case "all":
                    state.value = data;
                    break;

                case "new":
                    state.value = data;
                    state.value = state.value.filter(
                        (chef: IChef) => chef.isNew === true
                    );
                    break;
                case "most viewed":
                    state.value = data;
                    state.value = state.value.filter(
                        (chef: IChef) => chef.mostViewed === true
                    );
                    break;
                case "chef of the week":
                    state.value = data;
                    state.value = state.value.filter(
                        (chef: IChef) => chef.name === state.chefOfTheWeek
                    );
                    break;
                default:
                    state.value = data;
            }
        }
    }
});

export const { filterChefs } = chefsSlice.actions;
export default chefsSlice.reducer;

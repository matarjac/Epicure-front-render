import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./slices/restaurantsSlice";
import chefsReducer from "./slices/chefsSlice";
import dishesReducer from "./slices/dishesSlice";
import userReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
        dishes: dishesReducer,
        user: userReducer,
        order: orderReducer
    }
});

export default store;
import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './restaurants.css';
import Navbar from "../navbar/Navbar";
import QuickFilters from "./components/quickFilters/QuickFilters";
import DynamicFilters from "./components/dynamicFilters/DynamicFilters";
import Footer from "../home/components/footer/Footer";
import RestaurantsCards from "./components/restaurantsCards/RestaurantsCards";

const Restaurants:React.FC = ()=>{
    return(
        <div>
            <Navbar/>
            <QuickFilters/>
            <DynamicFilters/>
            <RestaurantsCards/>
            <Footer/>
        </div>
    );
}

export default Restaurants;
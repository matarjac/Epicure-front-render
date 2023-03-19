import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './home.css';
import Navbar from "../navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { useDispatch } from "react-redux";
import PopularRestaurants from './components/popularRestaurants/PoppularRestaurants';
import PopularDishes from "./components/popularDishes/PopularDishes";
import MeaningOfIcons from "./components/meaningOfIcons/MeaningOfIcons";
import ChefOfTheWeek from "./components/chefOfTheWeek/ChefOfTheWeek";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/footer/Footer";

const Home:React.FC = ()=>{
    return(
        <div id="homePage">
            <Navbar/>
            <Hero/>
            <PopularRestaurants/>
            <PopularDishes/>
            <MeaningOfIcons/>
            <ChefOfTheWeek/>
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default Home;
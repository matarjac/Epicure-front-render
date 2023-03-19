import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../navbar/Navbar";
import { useSelector } from "react-redux";
import { Istore } from "../../../../types/interfaces/Istore";
import { useDispatch } from "react-redux";
import { filterRestaurants } from "../../../../store/slices/restaurantsSlice";
import "./restaurantPage.css";
import Footer from "../../../home/components/footer/Footer";
import { filterDishes } from "../../../../store/slices/dishesSlice";
import DishMenuCard from "./dishes/DishMenuCard";
import IDishCard from "../../../../types/interfaces/IDishCard";
import ModalDishBox from "./dishes/ModalDishBox/ModalDishBox";
import IDish from "../../../../types/interfaces/mainInterfaces/IDish";

const RestaurantPage: React.FC = () => {
    const {id = ''} = useParams();
    const restaurantsData = useSelector((state: Istore) => state.restaurants.value);
    const dishesData = useSelector((state: Istore) => state.dishes.value);
    const dispatch = useDispatch();
    const now = new Date();
    const currentHour = now.getHours();

    useEffect(() => {
        dispatch(filterRestaurants('all'));
        dispatch(filterDishes('all'));
    }, [])
    
    const currentRest = restaurantsData.filter((rest) => rest.restaurantNumber == +id)[0];
    const currentDishes = dishesData.filter((dish) => dish.restaurantNumber == +id);
    const openningHour: number | undefined = currentRest.openHour;
    const isOpen: string = currentHour >= openningHour ? "Open now" : "Close";

    const handleFilter = (category: string) => {
        dispatch(filterDishes(category));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIDDish, setModalIDDish] = useState<number>(0);

    const handleModal = (id: number) => {
        setModalIDDish(id);
        setIsModalOpen(true);
        // console.log(modalIDDish);
    }

    return (
        <>
            <Navbar />
            <div className="restaurant-page">
                <div id="restaurant-details-hero">
                    <img id="rest-hero-img" src={currentRest.img} alt="" />
                    <h1 id="restaurant-page-name">{currentRest.name}</h1>
                    <span id="chef-name">{currentRest.chef}</span>
                    <span id="open-status"><img src="../Assets/clock.svg" alt="" />{isOpen}</span>
                </div>
                <div id="dishes-category-buttons-container">
                    <button className="dishes-category" onClick={() => handleFilter("breakfast")}>Breakfast</button>
                    <button className="dishes-category" onClick={() => handleFilter("launch")}>Launch</button>
                    <button className="dishes-category" onClick={() => handleFilter("dinner")}>Dinner</button>
                </div>
                <div id="dishes-menu-cards-container">
                    {currentDishes.length >= 1 ? currentDishes.map((dish: IDish, index) => (
                        <DishMenuCard
                            key={index}
                            name={dish.name}
                            img={dish.img}
                            ingredients={dish.ingredients}
                            foodType={dish.foodType}
                            price={dish.price}
                            dishNumber={dish.dishNumber}
                            onClick={() => handleModal(dish.dishNumber)} />
                    ))
                        : "No available dishes"}
                </div>
                <div>
                    <ModalDishBox id={modalIDDish} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RestaurantPage;
import React, { useEffect, useState } from "react";
import "./popularDishes.css";
import DishCard from "./dishCard/DishCard";
import { useSelector, useDispatch } from "react-redux";
import { filterDishes } from "../../../../store/slices/dishesSlice";
import { Istore } from "../../../../types/interfaces/Istore";
import IDish from "../../../../types/interfaces/mainInterfaces/IDish";
import ModalDishBox from "../../../reastaurants/components/restaurantsPage/dishes/ModalDishBox/ModalDishBox";


const PopularDishes: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalDishID, setModalDishID] = useState<number>(0);
    const dishesData = useSelector((state: Istore) => state.dishes.value)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterDishes('popular'));
    }, [])

    const handleModal = (id: number) => {
        setModalDishID(id);
        setIsModalOpen(true);
    }

    return (
        <div className="populars-container">
            <h2>SIGNATURE DISH OF:</h2>
            <div className="popular-cards-container">
                {dishesData.slice(0, 3).map((dish: IDish, index) => {
                    return <DishCard key={index}
                        dishNumber={dish.dishNumber}
                        img={dish.img}
                        name={dish.name}
                        foodType={dish.foodType}
                        ingredients={dish.ingredients}
                        onClick={() => { handleModal(dish.dishNumber) }}
                        price={dish.price} />
                })}
            </div>
            <div>
                <ModalDishBox id={modalDishID} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </div>
    );
}

export default PopularDishes;
import React from "react";
import "./dishCard.css";
import IDishCard from '../../../../../types/interfaces/IDishCard'
import FoodType from "../../../../../types/interfaces/FoodType";


const DishCard: React.FC<IDishCard> = (props: IDishCard) => {
    const data: IDishCard = props;
    return (
        <div className="card-container dish-card-container" onClick={props.onClick}>
            <img id="dish-image" src={data.img} alt="" />
            <span id="dish-name">{data.name}</span>
            <div id="food-type-icons-container">

                {data.foodType.map((type: string, index) => {
                    return <img key={index} id="type" src={"./Assets/food-type/" + type + "-icon.svg"} alt="" />
                })}
            </div>
            <span id="dish-ingredients">{data.ingredients}</span>
            <div id="price-section"><img src="./Assets/line.svg" alt="" /><span>₪ {props.price}</span><img src="./Assets/line.svg" alt="" /></div>
        </div>
    )
}

export default DishCard;
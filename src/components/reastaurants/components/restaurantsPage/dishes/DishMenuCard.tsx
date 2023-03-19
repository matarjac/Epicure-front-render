import React, { useState } from "react";
import IDishCard from "../../../../../types/interfaces/IDishCard";
import "./dishMenuCard.css";

const DishMenuCard: React.FC<IDishCard> = (props:IDishCard)=>{

    return(
        <>
        <div className="dish-menu-card-container" onClick={props.onClick}>
            <img src={props.img} alt="" />
            <span id="dish-menu-card-title">{props.name}</span>
            <span id="dish-menu-card-ingredients">{props.ingredients}</span>
            <div className="price-container">
                <span>₪{props.price}</span>
            </div>
        </div>
        </>
    )
}

export default DishMenuCard;
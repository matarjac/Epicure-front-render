import exp from "constants";
import React from "react";
import "./meaningOfIcons.css";

const MeaningOfIcons: React.FC = ()=>{
    return (
        <div id="icons-section-container">
            <h2>The meaning of our icons</h2>
            <div id="icons">
                <img src="./Assets/food-type/spicy-big-icon.svg" alt="" />
                <img src="./Assets/food-type/vegan-big-icon.svg" alt="" />
                <img src="./Assets/food-type/vegitarian-big-icon.svg" alt="" />
                <span>Spicy</span>
                <span>Vegitarian</span>
                <span>Vegan</span>
            </div>
        </div>
    )
}

export default MeaningOfIcons;
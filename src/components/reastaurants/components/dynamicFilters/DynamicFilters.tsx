import React from "react";
import { useState } from "react";
import "./dynamicFilters.css";
import ModalPriceRange from "./priceRangeModal/ModalPriceRange";
import ModalRating from "./ratingModal/ModalRating";
import ModalDistance from "./distanceModal/ModalDistance";

const DynamicFilters: React.FC = ()=>{

    const [showModalPrice, setshowModalPrice] = useState(false);
    const [showModalDistance, setshowModalDistance] = useState(false);
    const [showModalRating, setshowModalRating] = useState(false);

    const handleClickModalPrice = ()=>{
        setshowModalPrice(!showModalPrice);
        setshowModalDistance(false);
        setshowModalRating(false);
    }

    const handleClickModalDistance = ()=>{
        setshowModalDistance(!showModalDistance);
        setshowModalPrice(false);
        setshowModalRating(false);
    }

    const handleClickModalRating = ()=>{
        setshowModalRating(!showModalRating);
        setshowModalDistance(false);
        setshowModalPrice(false);
    }
    return(
        <div id="filters-buttons-container">
            <div className="modal-button-container">
                <button id="price-range" className="dynamic-filter" onClick={handleClickModalPrice}>Price Range <img src="./Assets/dynamic-filter-btn-drop-symbol.svg" alt="" 
                /></button>
                {showModalPrice && <ModalPriceRange/>}
            </div>
            <div className="modal-button-container">
                <button className="dynamic-filter" onClick={handleClickModalDistance}>Distance <img src="./Assets/dynamic-filter-btn-drop-symbol.svg" alt="" 
                /></button>
                {showModalDistance&&<ModalDistance/>}
            </div>
            <div className="modal-button-container">
                <button className="dynamic-filter" onClick={handleClickModalRating}>Rating <img src="./Assets/dynamic-filter-btn-drop-symbol.svg" alt="" 
                /></button>
                {showModalRating&&<ModalRating/>}
            </div>
        </div>
    );
}

export default DynamicFilters;
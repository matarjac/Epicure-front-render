import React from "react";
import { useState } from "react";
import "./modalPriceRange.css";

const ModalPriceRange:React.FC = ()=>{
    const [minPrice, setMinPrice] = useState<string>("12");
    return(
        <div id="price-modal" className="modal-div-container">
            <span className="modal-title">Price Range Selected</span>
            <span className="modal-detail">12 - 350</span>
            <div className="slidecontainer">
                <div>
                    <span>{minPrice}</span>
                    <span>4</span>
                </div>
                <input type="range" min="12" max="350" value={minPrice}  className="slider" id="myRange" 
                onChange={(event)=>{setMinPrice(event.target.value)}}/>
            </div>
        </div>
    )
}

export default ModalPriceRange;

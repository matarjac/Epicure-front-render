import React from "react";
import "./modalRating.css";

const ModalRating:React.FC = ()=>{
    console.log(Array(5));
    return (
        <div id="rating-modal" className="modal-div-container">
            <span className="modal-title">Rating</span>
            {Array(5).fill('').map((slot,index)=>{
                return (
                <div key={index} className="rating-option">
                    <input type="checkbox" id={`./Assets/ratings/${index+1}-rating.svg`} name={`rating${index+1}`} value={index+1}/>
                    <label htmlFor={`rating${index+1}`}><img src={`./Assets/ratings/${index+1}-rating.svg`} alt="" /></label>
                </div>)
            })}
        </div>
    );
}

export default ModalRating;
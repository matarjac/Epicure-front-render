import React, { useState } from "react";

const ModalDistance: React.FC = ()=>{
    const [distanceValue, setDistanceValue] = useState<string>("2")
    return (
        <div className="modal-div-container">
            <span className="modal-title">Distance</span>
            <div className="slidecontainer">
                <div>
                    <span>My location</span>
                    <span>{distanceValue}</span>
                </div>
                <input type="range" step="0.1" min="0.1" max="4" value={distanceValue}  className="slider" id="myRange" 
                onChange={(event)=>{setDistanceValue(event.target.value)}}/>
            </div>
        </div>
    );
}

export default ModalDistance;
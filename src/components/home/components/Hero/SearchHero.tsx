import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './searchHero.css';

const SearchHero:React.FC = ()=>{
    return(
        <div className="search-hero-container">
            <h1>Epicure works with the top
chef restaurants in Tel Aviv</h1>
            <div id="search-input-button-pair">
                <button id="search-button"><img src="/Assets/search-icon.svg" alt=""/></button>
                <input id="search-hero-input" placeholder="Search for restaurant cuisine, chef" type="text" />
            </div>
        </div>
    );
}

export default SearchHero;
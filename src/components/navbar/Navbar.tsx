import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css';
import Cart from "../cart/Cart";

const Navbar: React.FC = () => {
    const navigation = useNavigate();
    const [showCart, setShowCart] = useState(false);

    return (
        <nav>
            <div id="navbar-container">
                <button className="logo" onClick={() => { navigation("/"); }}><img className="logo" src="/Assets/logo.svg" alt="" /></button>
                <div id="navbar-buttons-container">
                    <div id="navbar-buttons-leftside-container">
                        <button className="navbar-button" id=""
                            onClick={() => { navigation("/restaurants"); }}>Restaurants
                        </button>
                        <button className="navbar-button" id=""
                            onClick={() => { navigation("/chefs"); }}>Chefs
                        </button>
                    </div>
                    <div id="navbar-buttons-rightside-container">
                        <form action="">
                            <input id="navbar-input" type="text" placeholder="Search for restaurant cuisine, chef" />
                        </form>
                        <button id="search-navbar-button-mobile"><img src="./Assets/search-icon.svg" alt="" /></button>
                        <button className="navbar-button" id=""
                            onClick={() => { navigation("/sign-in"); }}><img src="/Assets/account-icon.svg" alt="" /></button>
                        <button className="navbar-button" id="" onClick={() => { setShowCart(!showCart) }}><img src="/Assets/cart-icon.svg" alt="" /></button>
                    </div>
                </div>
                <img id="mobile-logo-img" src="./Assets/mobile-logo.svg" alt="" />

                <button id="humburger-menu">
                    <img src="./Assets/HAMBUR.svg" alt="" />
                </button>
                {showCart &&
                    <Cart />}
            </div>
            <div id="buttons-side-menu">
            </div>
        </nav>
    );
}

export default Navbar;
import React from "react";
import './aboutUs.css';

const AboutUs: React.FC = ()=>{
    return(
        <div id="about-us-section-container">
            <div id="about-us-text-downloads">
                <p id="about-us-title">about us:</p>
                <p id="about-us-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
 turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.
</p>
                <div id="download-buttons-container">
                    <button className="download-btn"><img src="./Assets/download-app-apple.svg" alt="" /></button>
                    <button className="download-btn"><img src="./Assets/download-app-android.svg" alt="" /></button>
                </div>
            </div>
            <img id="logo" src="./Assets/about-logo.svg" alt="" />
        </div>
    );
}

export default AboutUs;

import React from "react";
import "./footer.css";

const Footer = ()=>{
    return (
        <footer>
            <hr />
            <div>
                <button className="footer-links">Contact Us</button>
                <button className="footer-links">Term of Use</button>
                <button className="footer-links">Privacy Policy</button>
            </div>
        </footer>
    );
}

export default Footer;
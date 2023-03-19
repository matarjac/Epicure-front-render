import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './chefs.css';
import Navbar from "../navbar/Navbar";
import ChefsFilters from "./chefsFilters/ChefsFilters";
import ChefsCards from "./chefsCards/ChefsCards";
import Footer from "../home/components/footer/Footer";

const Chefs:React.FC = ()=>{
    return(
        <div>
            <Navbar/>
            <ChefsFilters/>
            <ChefsCards/>
            <Footer/>
        </div>
    );
}

export default Chefs;
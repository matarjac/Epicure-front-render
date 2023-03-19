import React, { useEffect, useState } from "react";
import "./chefsCards.css";
import ChefCard from "../chefCard/ChefCard";
import { useSelector, useDispatch } from 'react-redux';
import IChefCard from "../../../types/interfaces/IChefCard";
import { Istore } from "../../../types/interfaces/Istore";
import IChef from "../../../types/interfaces/mainInterfaces/IChef";
import axios from "axios";

const ChefsCards: React.FC = () => {

    const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch("getAll")
    // },[chefs]);

    const chefsData: IChef[] = useSelector((state: Istore) => state.chefs.value);
    const [chefs, setChefs] = useState<IChef[]>(chefsData);

    const handleDeleteChef = (id: string) => {
        const filteredChefs = chefs.filter((chef: IChef) => { return chef._id !== id });
        setChefs(filteredChefs);
        window.location.reload();
    }
    return (
        <div id="chefs-cards-container">
            {chefs.map((chef: IChef, index) => (<ChefCard
                name={chef.name}
                img={chef.img}
                id={chef._id}
                key={index}
                filterChefs={handleDeleteChef} />
            ))}
        </div>
    );
}

export default ChefsCards;
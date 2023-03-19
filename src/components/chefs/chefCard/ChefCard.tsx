import React from "react";
import "./chefCard.css";
import axios from 'axios';

interface IChefCard {
    name: string,
    img: string,
    id: string,
    filterChefs: (id: string) => void
}

const ChefCard: React.FC<IChefCard> = (props: IChefCard) => {

    const token = sessionStorage.getItem('token');
    const parsedToken = token ? JSON.parse(token) : '';
    const axiosInstance = axios.create({
        baseURL: 'https://matars-epicure-server.onrender.com/',
        headers: {
            Authorization: `Bearer ${parsedToken.token}`,
        },
    });

    const handleDeleteChef = async (id: string) => {
        const body = { id: id };
        try {
            await axiosInstance.delete('/chefs/delete', { data: body });
            props.filterChefs(id);
        }
        catch (error: any) {
            alert(error.response.data.message);
        }
    }
    return (
        <div className="chef-card-container">
            <img src={props.img} alt="" />
            <span>{props.name}</span>
            <button className="close-chef-btn" onClick={() => { handleDeleteChef(props.id) }}><img src="./Assets/close-btn.svg" alt="" /></button>
        </div>
    );
}

export default ChefCard;
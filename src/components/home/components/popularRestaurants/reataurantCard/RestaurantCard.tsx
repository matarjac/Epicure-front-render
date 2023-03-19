import React, {useState} from "react";
import "./restaurantCard.css";
import {IRestaurantCard} from '../../../../../types/interfaces/IRestaurantCard';
import { useNavigate } from "react-router-dom";
import { ICard } from "../../../../../types/interfaces/ICard";
import axios from "axios";

const RestaurantCard: React.FC<IRestaurantCard> = (props:IRestaurantCard) => {
    const navigation = useNavigate();
    const handleDeleteRestaurant = async (id: string) => {
      const body = { id: id };
      try {
          await axios.delete(`https://matars-epicure-server.onrender.com//restaurants/delete`, { data: body });
          if(props.filterRestaurant){
            props.filterRestaurant(id);
          }
      }
      catch (err) {
          console.log(err);
      }
  }
      return (
                <div className="card-container" onClick={()=>{navigation(`${props.location}${props.restaurantNumber}`)}}>
                    <img id="restaurant-image" src={props.img} alt="" />
                    <span id="restaurant-name">{props.name}</span>
                    <span id="chef-name">{props.chef}</span>
                    <img id="rating-image" src={`./Assets/ratings/${props.rating}-rating.svg`} alt="" />
                    {props.isCloseable&&props.filterRestaurant&&<button className="close-btn" onClick={()=>{handleDeleteRestaurant(props.id)}}><img src="./Assets/close-btn.svg" alt="" /></button>}
                </div>
      )
    }

export default RestaurantCard;
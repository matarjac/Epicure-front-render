import React from "react";
import "./chefsFilters.css";
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import { filterChefs } from "../../../store/slices/chefsSlice";


const ChefsFilters:React.FC = ()=>{
    const dispatch = useDispatch();
    const [filter, setFilter] = useState("all");
    dispatch(filterChefs(filter));
    useEffect(()=>{
        setFilter("all");
        dispatch(filterChefs(filter));
    }, [])
    
    const handleClickAll = ()=>{
        setFilter("all");
        dispatch(filterChefs(filter));
    }

    const handleClickNew = ()=>{
        setFilter("new")
        dispatch(filterChefs(filter));
    }

    const handleClickMostViewed = ()=>{
        setFilter("most viewed")
        dispatch(filterChefs(filter))
    }

    return(
        <div id="chefs-filter-container">
            <button onClick={handleClickAll}>All</button>
            <button onClick={handleClickNew}>New</button>
            <button onClick={handleClickMostViewed}>Most Viewed</button>
        </div>
    )
}

export default ChefsFilters;
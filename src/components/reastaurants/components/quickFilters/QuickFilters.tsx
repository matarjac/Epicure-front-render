import React, { useEffect, useState } from "react";
import "./quickFilters.css";
import { useDispatch } from "react-redux";
import {filterRestaurants} from "../../../../store/slices/restaurantsSlice"


const QuickFilters:React.FC = ()=>{

    const [filter, setFilter] = useState<string>('all');
    const dispatch = useDispatch();
    dispatch(filterRestaurants(filter));


    useEffect(()=>{
        setFilter("all");
        dispatch(filterRestaurants(filter))
    }, []);
    
    const handleClick = (filterName:string)=>{
        setFilter(filterName);
        dispatch(filterRestaurants(filter))
    }

    return(
        <div id="quick-filters-container">
            <button className="quick-filter" onClick={()=>handleClick("all")}>All</button>
            <button className="quick-filter" onClick={()=>handleClick("new")}>New</button>
            <button className="quick-filter" onClick={()=>handleClick("most popular")}>Most Popular</button>
            <button className="quick-filter" onClick={()=>handleClick("open now")}>Open Now</button>
            <button className="quick-filter" >Map View</button>
        </div>
    );
}

export default QuickFilters;
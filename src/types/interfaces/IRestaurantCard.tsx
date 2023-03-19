export interface IRestaurantCard {
    id: string,
    restaurantNumber:number,
    img:string,
    location: string,
    name: string,
    chef:string,
    rating: number,
    isCloseable: boolean,
    filterRestaurant?: (id:string)=>void 
}

export default IRestaurantCard;
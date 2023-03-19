interface IRestaurant{
    _id: string,
    img: string,
    name: string,
    restaurantNumber: number,
    chef: string,
    rating: number,
    chefID: number,
    dishes: number[],
    openHour: number,
    closeHour: number,
    isPopular: boolean,
    isNew: boolean
}

export default IRestaurant;
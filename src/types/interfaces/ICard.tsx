export interface ICard {
    img: string,
    name: string,
    chef?: string,
    rating: number,
    id?: number,
    location: string,
    isPopular?: boolean,
    isNew?: boolean,
    dishes?: number[],
    openHour?: 16,
    closeHour?: 24,
    foodType?:string[]
    onClick?: void,
    isCloseable?: boolean,
    dbid: string,
    filterRestaurant: (id:string)=>void
}

export default ICard;
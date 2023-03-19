interface IDish{
    _id: string,
    name: string,
    restaurantNumber: number,
    dishNumber: number,
    ingredients: string,
    foodType: string[],
    img:string,
    price: number,
    isPopular: boolean,
    category: string
}

export default IDish;
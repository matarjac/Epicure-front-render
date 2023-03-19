interface IChefCard{
    name: string,
    id: number,
    _id: string,
    isChefOfTheWeek?: boolean,
    img: string,
    isNew?: boolean,
    mostViewed?:boolean
}

export default IChefCard;
import IChef from "./mainInterfaces/IChef";
import IRestaurant from "./mainInterfaces/IRestaurant";
import IDish from "./mainInterfaces/IDish";
import IUserState from "./IUserState";
import { IOrderState } from "../../store/slices/orderSlice";

export interface Istore {
    restaurants: IRestaurantState,
    chefs: IChefState,
    dishes: IDishState,
    user: IUserState,
    order: IOrderState
}

interface IChefState {
    value: IChef[] ,
    chefOfTheWeek: string
}

interface IDishState {
    value: IDish[]
}

interface IRestaurantState {
    value: IRestaurant[],
    chefOfTheWeek: string
}

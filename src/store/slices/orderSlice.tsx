import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IDishOrder from "../../types/interfaces/mainInterfaces/IDishOrder";

export interface IOrderState{
    order: IDishOrder[]
}

const initialState: IOrderState = {
    order: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        addOrder: (state, action:PayloadAction<IDishOrder>)=>{
            state.order.push({
                name:action.payload.name,
                price:action.payload.price,
                img:action.payload.img,
                quantity:action.payload.quantity
            });
        }
    }
})

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer; 
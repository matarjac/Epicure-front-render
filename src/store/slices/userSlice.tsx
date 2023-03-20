import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../types/interfaces/IUser";
import axios from "axios";

export interface Credentials {
    email: string,
    password: string
}

export interface UserState {
    data: IUser | null
}
interface IUserState {
    loading: boolean,
    error: null | string | undefined,
    data: IUser | null
}

export const logInUser = createAsyncThunk(
    "users/login",
    async (credentials: Credentials, thunkAPI) => {
        try {
            const response = await axios.post("https://matars-epicure-server.onrender.com/users/login", credentials);
            return response.data as IUser;
        }
        catch (err: any) {
            return thunkAPI.rejectWithValue(err)
        }
    });


const initialState: IUserState = {
    loading: false,
    error: null,
    data: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedUser: (state, action) => {
            state.data = action.payload;
        }
    }

});

export const { loggedUser } = userSlice.actions;
export default userSlice.reducer;
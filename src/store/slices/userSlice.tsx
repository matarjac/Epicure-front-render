// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import IUser from "../../types/interfaces/IUser";

// interface IUserState{
//     loading: boolean,
//     error: null | string,
//     data: IUser | null
// }

// const initialState:IUserState = {
//     loading: false,
//     error: null,
//     data: null
// }


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
            const response = await axios.post("http://localhost:8000/users/login", credentials);
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
            // console.log(action.payload);
            state.data = action.payload;
        }
    }
    // extraReducers(builder) {
    //     builder
    //         .addCase(logInUser.pending, (state, action) => {
    //             state.loading = true;
    //         })
    //         .addCase(logInUser.fulfilled, (state, action: PayloadAction<IUser>) => {
    //             state.loading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(logInUser.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.error.message;
    //         })
    // }
});

export const { loggedUser } = userSlice.actions;
export default userSlice.reducer;
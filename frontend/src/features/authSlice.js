import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:""
}

export const LoginUser = createAsyncThunk("User/LoginUser", async(user, thunkAPI)=> {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
        
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
        
    }
});
export const LogOut = createAsyncThunk("user/LogOut", async() => {
    await axios.delete('http://localhost:5000/logout');
});

export const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginUser.pending, (state)=>{
            state.isLoading = false;
        });
        builder.addCase(LoginUser.fulfilled, (state, Action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = Action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, Action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = Action.payload;
        })
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer;
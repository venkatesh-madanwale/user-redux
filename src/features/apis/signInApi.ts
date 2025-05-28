import { createAsyncThunk } from "@reduxjs/toolkit";
//axois is used to connect to the api's
import axios from "axios";

// Defining asyncThunk based api call before create slice

export const signInAPI = createAsyncThunk(
    'auth/login',
    async (credetials: { emailid: string, pwd: string }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3001/auth/login', credetials)
            return response.data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data?.msg || 'login failed')
        }
    }
)
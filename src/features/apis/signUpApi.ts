import { createAsyncThunk } from "@reduxjs/toolkit";
//axois is used to connect to the api's
import axios from "axios";

export const signUpAPI = createAsyncThunk(
    'auth/register',
    async (credetials: { emailid: string, name:string, phno:string, pwd: string }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3001/auth/register', credetials)
            return response.data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response?.data?.msg || 'registered failed')
        }
    }
)
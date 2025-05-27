import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, AuthPayload } from "../../types/auth";


const initialState: AuthState = {
    isAuthenticated : false,
    user : null,
    token : null
}

const authenticationSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        signIn : (state, action: PayloadAction<AuthPayload>)=>{
            state.isAuthenticated = true,
            state.user = action.payload.user,
            state.token = action.payload.token
        },
        signOut : (state)=>{
            state.isAuthenticated = false,
            state.user = null,
            state.token = null
        }
    }
})

export const {signIn,signOut} = authenticationSlice.actions
export default authenticationSlice.reducer
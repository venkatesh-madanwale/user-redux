import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
export const store = configureStore({
    reducer : {
        auth : authReducer
    }
})
// Data flow for storing in global store
// Dispatch ==> Action (with | without payload) ==> Reducer ==> Store
// For data retrival
// Directly from the store using the key in the reducer (eg. auth is the key here)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
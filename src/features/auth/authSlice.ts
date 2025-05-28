import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState} from "../../types/auth";
import { signUpAPI } from "../apis/signUpApi";
import { signInAPIs } from "../apis/signInApis";
// createSlice holds all your authentication state and logic
// payloadAction for type of action and payload
// createAsyncThunk to handle async action e.g. api calls in a clean predictable way without manually dispatching loading success and failure actions

const initialState: AuthState = {
    isAuthenticated: false,
    name: null,
    token: null,
    loading: false,
    error: null,
    msg: null,
    emailid: null
}

const authenticationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // signIn: (state, action: PayloadAction<AuthPayload>) => {
        //     state.isAuthenticated = true,
        //         state.name = action.payload.name,
        //         state.token = action.payload.token
        // },
        // signUp: (state, action: PayloadAction<AuthPayload>) => {
        //     state.name = action.payload.name,
        //         state.emailid = action.payload.email,
        //         state.msg = action.payload.msg
        // },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.name = null;
            state.token = null
        }
    },
    extraReducers: (builder) => {
        //cases for signInApi's
        builder
            .addCase(signInAPIs.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(signInAPIs.fulfilled, (state, action: PayloadAction<{ msg: string; email: string; name: string; token: string }>) => {
                state.loading = false;
                state.emailid = action.payload.email;
                state.isAuthenticated = true;
                state.name = action.payload.name;
                state.token = action.payload.token;
                state.msg = action.payload.msg
            })
            .addCase(signInAPIs.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.name = null;
                state.token = null;
                // state.error = action.payload as string
                state.error = action.error.message || "Sign in failed";
            });

        //cases for signUpApi's
        builder
            .addCase(signUpAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpAPI.fulfilled, (state, action: PayloadAction<{ msg: string; name: string; token: string }>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.name = action.payload.name;
                state.token = action.payload.token;
                state.msg = action.payload.msg;
            })
            .addCase(signUpAPI.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.name = null;
                state.token = null;
                state.error = action.payload as string || "Signup failed";
            });
    }
})

export const { signOut } = authenticationSlice.actions
export default authenticationSlice.reducer
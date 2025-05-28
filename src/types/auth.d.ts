//Defines the shape of the Auth state, which is used to type.
// Used to shape our redux slice i.e. authSlice.ts
export interface AuthState{
    isAuthenticated : boolean,
    name : string|null,
    token : string|null,
    loading : boolean,
    error : string|null,
    msg : string|null,
}

// Same for payload
export interface AuthPayload{
    email : string,
    token : string,
    name : string,
    msg : string,
}
export interface AuthState{
    isAuthenticated : boolean,
    user : string|null,
    token : string|null
}

export interface AuthPayload{
    user : string,
    token : string 
}
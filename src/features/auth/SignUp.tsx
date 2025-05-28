import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { signUpAPI } from "../apis/signUpApi";


const SignUp: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [emailid, setEmailid] = useState("")
    const [name, setName] = useState("")
    const [phno, setPhno] = useState("")
    const [pwd, setPwd] = useState("")


    // const handleSignUp = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     await dispatch(signUpAPI({ emailid, name, phno, pwd }))
    // }
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        const resultAction = await dispatch(signUpAPI({ emailid, name, phno, pwd }));
        console.log("Result of signUpAPI:", resultAction);

        if (signUpAPI.fulfilled.match(resultAction)) {
            console.log("Signup succeeded:", resultAction.payload);
        } else {
            console.error("Signup failed:", resultAction.payload || resultAction.error);
            console.error("Signup failed:", error);

        }
    };
    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)

    return (
        <form onSubmit={handleSignUp}>
            <div>
                <label>Email:</label>
                <input type="email" value={emailid} onChange={(e) => setEmailid(e.target.value)} />
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Phone Number:</label>
                <input type="tel"
                    value={phno} onChange={(e) => setPhno(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <button type="submit" disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </div>
            {isAuthenticated && (
                <p style={{ color: "green" }}>Signup successful</p>
            )}
            {error && !isAuthenticated && (
                <p style={{ color: "red" }}>{error}</p>
            )}
        </form>
    )
}
export default SignUp
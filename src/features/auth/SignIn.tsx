import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { signInAPIs } from "../apis/signInApis";

const SignIn: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [emailid, setEmailid] = useState("");
    const [pwd, setPwd] = useState("");

    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(signInAPIs({ emailid, pwd }));
    };

    return (
        <form onSubmit={handleSignIn}>
            <div>
                <label>Email:</label>
                <input type="email" value={emailid} onChange={(e) => setEmailid(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                <button type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </div>
            {isAuthenticated && (<p style={{ color: "green" }}>Signin successful</p>)}
            {error && !isAuthenticated && (
                <p style={{ color: "red" }}>{error}</p>
            )}
        </form>
    );
};

export default SignIn;

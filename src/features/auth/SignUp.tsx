import React, { useState } from "react";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { signUpAPI } from "../apis/signUpApi";
import { AppDispatch, RootState } from "../../app/store";


const SignUp: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [emailid, setEmailid] = useState("")
    const [name, setName] = useState("")
    const [phno, setPhno] = useState("")
    const [pwd, setPwd] = useState("")


    const handleSignUp = async (e:React.FormEvent) => {
        e.preventDefault()
        await dispatch(signUpAPI({
            emailid,
            name,
            phno,
            pwd
        })
        )
    }
    const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)

    
}
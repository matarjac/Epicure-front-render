import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Navbar from "../navbar/Navbar";
import "./signInPage.css";
import { useSelector } from "react-redux";
import { Istore } from "../../types/interfaces/Istore";
import { Credentials, loggedUser } from '../../store/slices/userSlice';
import { useDispatch } from "react-redux";

const SignInPage: React.FC = () => {

    // const [isLoginAvailable, setIsLoginAvailable] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emptyInputs = () => {
        setEmail('');
        setPassword('');
    }
    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [])

    const handleLogIn = async () => {
        const credentials: Credentials = {
            email: email,
            password: password
        }
        try {
            const { data } = await axios.post('https://matars-epicure-server.onrender.com/users/login', credentials, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("user>>>", data)
            const userToSave = {
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                userName: data.user.serName,
                userEmail: data.user.email
            }
            const tokenToSave = {
                token: data.user.token
            }
            const userJSON = JSON.stringify(userToSave);
            const userTokenJSON = JSON.stringify(tokenToSave);
            sessionStorage.setItem("user", userJSON);
            sessionStorage.setItem('token', userTokenJSON);
            dispatch(loggedUser(userToSave));
            navigate("/")
        }
        catch (err: any) {
            console.log(err);
            alert(err.response.data);
            emptyInputs();
        }
    }

    const handleLogOut = () => {
        sessionStorage.removeItem("user");
        // window.location.reload();
        navigate("/");
    }

    return (
        <>
            <Navbar />
            <div className='input-containers' id="sign-in-form-container">
                {!isLoggedIn ?
                    <>
                        <h1>SIGN IN</h1>
                    
                        <div id="inputs-sign-in-container">
                            <input type="text" placeholder="Email address" value={email} onChange={(e) => handleEmailInputChange(e)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => handlePasswordInputChange(e)} />
                        </div>
                        <div id="log-in-buttons-container">
                            <button id="log-in-btn" onClick={handleLogIn}>LOGIN</button>
                            <button id="forgot-password-btn">Forgot password?</button>
                        </div>
                        <div id="hr-line-div-sign-in">
                            <span>or</span>
                        </div>
                        <button id="sign-up-btn" onClick={() => navigate("/sign-up")}>SIGN UP</button>
                    </>
                    :
                    <>
                        <div className="already-signed-div">
                            <h1>You already signed in</h1>
                            <button className="log-out" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </>}

            </div>
        </>
    )
}

export default SignInPage;

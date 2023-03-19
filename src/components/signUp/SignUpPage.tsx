import React from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import './signUp.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function SignUpPage() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const emptyInputs = () => {
    setName('');
    setLastName('');
    setEmail('');
    setUserName('');
    setPassword('');
  }

  const handleSignUp = async () => {
    const body = {
      firstName: name,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password
    }

    try {
      const { data } = await axios.post('https://matars-epicure-server.onrender.com/users', body)
      console.log(data);
      emptyInputs();
      navigate(-1);
    }
    catch (err: any) {
      console.log(err)
      alert(err.response.data);
      emptyInputs();
    }

  }

  const inputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const inputLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }
  const inputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const inputUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div id="sign-in-form-container">
        <h1>SIGN UP</h1>
        <div id="inputs-sign-in-container">
          <input type="text" placeholder='First name' value={name} onChange={inputNameChange} />
          <input type="text" placeholder='Last name' value={lastName} onChange={inputLastNameChange} />
          <input type="email" placeholder="Email address" value={email} onChange={inputEmailChange} />
          <input type="text" placeholder="User name" value={userName} onChange={inputUserNameChange} />
          <input type="password" placeholder="Password" value={password} onChange={inputPasswordChange} />
        </div>
        <button className='sign-up-in-page' id="sign-up-btn" onClick={handleSignUp}>SIGN UP</button>
      </div>
    </>
  )
}

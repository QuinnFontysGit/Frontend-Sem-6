import React from "react";
import './loginform.css';
import { useState } from "react";

export default function LoginForm(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        //props.handleLogin();
    }

    const handlePassword = (e) =>{
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.value);
    }

    return(
        <div className="FormContainer">
            <form onSubmit={handleSubmit}>
                <div className="FormText">Email</div>
                <input className="input" type="text" onChange={handleEmail}/>
                <div className="FormText">Password</div>
                <input className="input" type="password" onChange={handlePassword}/>
                <br/>
                <input className="LoginButton" type="submit" value="Register"/>
            </form>
        </div>
    )
}
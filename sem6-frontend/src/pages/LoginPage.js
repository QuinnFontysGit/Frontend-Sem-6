import React from "react";
import './styles/LoginPage.css';
import LoginForm from "../components/loginform/loginform.js";

export default function LoginPage(){
return(
    <div class="LoginContainer">
        <div className="FormBox">
            <div className="TitleText">Create an account</div>
            <LoginForm />
        </div>
        <div className="HeroBox">
            <div className="HeroText">
                Linked Tinder
            </div>
        </div>
    </div>
)
}
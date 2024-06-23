import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import './styles/LoginPage.css';
import LoginForm from "../components/loginform/loginform.js";

export default function LoginPage(){

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();
        return <button className="LogButton" onClick={()=>loginWithRedirect()}>Log in</button>;
    }

return(
    <div class="LoginContainer">
        <div className="FormBox">
            <div className="TitleText">Login or create an account</div>
            {LoginButton()}
        </div>
        <div className="HeroBox">
            <div className="HeroText">
                Linked Tinder
            </div>
        </div>
    </div>
)
}
import React, {useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


export async function Get_companies(){
    
    const { getAccessTokenSilenty } = useAuth0();
    const url = 'http://localhost:8000/companyapi/'

    try{
        const token = await getAccessTokenSilenty({
            authorizationParams:{
                audience: url,
                scope: 'read:companies',
            }
        });
        axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(res => {
            console.log(res)
        })
    } catch(error){console.error(error)};
}
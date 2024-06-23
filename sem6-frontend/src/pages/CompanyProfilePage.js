import React from "react";
import { useEffect, useState } from "react";
import './styles/CompanyProfilePage.css';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function CompanyProfilePage(){

    const { getAccessTokenWithPopup } = useAuth0();

    const companyData = {
        name: 'Test company',
        description: 'A test company',
        location: 'Eindhoven',
        employeeamount: 12
    };

    const listingData = {
        title: 'Test listing',
        description: 'A test listing',
        salary: 10000,
        hours: 40,
        companyid: 1
    }

    const handleSubmit = (e) => { e.preventDefault(); Get_companies(); }
    const handleSubmitTwo=(e)=>{ e.preventDefault(); No_auth(); }
    const handleSubmitThree=(e)=>{ e.preventDefault(); Create_company_listing(); }
    const handleSubmitFour=(e)=>{ e.preventDefault(); Delete_company(); }

    async function No_auth(){
        const url = 'http://localhost:8000/companyapi'
        const token = "none";
        axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(res => {
            console.log(res)
        })
    }

    async function Get_token(){
        const url = 'http://localhost:8000/companyapi'
        const token = await getAccessTokenWithPopup({
            authorizationParams:{
                audience: url,
                scope: 'read:companies',
            },
        });
        return token;
    }

    async function Get_companies(){
        const url = 'http://localhost:8000/companyapi/companies/'
        try {
            const token = await Get_token();
            axios.get(url, {
                headers: {Authorization: `Bearer ${token}`},
            })
            .then(res => {
                console.log(res)
            })
        }catch(e){console.log(e.message)};
    }

    async function Create_company_listing(){
        const url = 'http://localhost:8000/companyapi/companies/'
        const url2 = 'http://localhost:8000/listingapi/listings/'
        try{
            const token = await Get_token();
            axios.post(url, companyData, {
                headers: {Authorization: `Bearer ${token}`},
            })
            .then(res => {
                console.log(res);
            });
        }catch(e){console.log(e.message)};
        try{
            axios.post(url2, listingData)
            .then(res => {
                console.log(res);
            })
        }catch(e){console.log(e.message)};
    }

    async function Delete_company(){
        const url = 'http://localhost:8000/companyapi/companies/1/'
        try {
            const token = await Get_token();
            axios.delete(url, {
                headers: {Authorization: `Bearer ${token}`},
            })
            .then(res => {
                console.log(res)
            })
        }catch(e){console.log(e.message)};
    }

return(
    <div class="CompanyProfileContainer">
        <form onSubmit={handleSubmit}>
            <button type="submit">get companies authentication</button>
        </form>
        <form onSubmit={handleSubmitTwo}>
            <button type="submit">no authentication</button>
        </form>
        <form onSubmit={handleSubmitThree}>
            <button type="submit">create company and listing</button>
        </form>
        <form onSubmit={handleSubmitFour}>
            <button type="submit">delete company and listings</button>
        </form>
    </div>
)
}
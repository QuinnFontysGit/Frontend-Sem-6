import './navbar.css'
import React from "react";
import {Outlet} from 'react-router-dom';

export default function Navbar() {
return (
  <div className='PageContainer'>
    <div className="NavbarContainer">
      <div className="NavOption">
        Home
      </div>
      <div className="NavOption">
        Listings
      </div>
      <div className="NavOptionRight">
        You
      </div>
    </div>
    <Outlet />
  </div>
)
}

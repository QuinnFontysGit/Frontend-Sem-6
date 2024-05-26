import './navbar.css'
import React from "react";
import {Outlet} from 'react-router-dom';

export default function Navbar() {
return (
  <div className='PageContainer'>
    <div className="NavbarContainer">
      <div className="NavOption">
        home
      </div>
      <div className="NavOption">
        home 2 electric boogaloo
      </div>
      <div className="NavOption">
        el home 3
      </div>
    </div>
    <Outlet />
  </div>
)
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'




function Layout() {
    return (
        <div>
        <Navbar/>
        <h1>Al_AmaanOis + Technical Skills</h1>
        <Outlet className="absolute"/>
        <h1>This is footer-----------------------</h1>
        </div>
    )
    }
    export default Layout;
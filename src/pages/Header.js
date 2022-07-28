import React from 'react';
import "./Header.css"
import logo from "../asset/globetech logo.svg"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-blue-900 px-52 pt-20">
            <div class="flex-1">
                <img src={logo} alt="" />
            </div>
            <div class="flex-none">

                <ul class=" menu-horizontal">
                    <li><NavLink to='/' className='text-white font-bold px-8'>Home</NavLink></li>
                    <li><NavLink to='/service' className='text-white font-bold  px-8'>Service</NavLink></li>
                    <li><NavLink to='/login' className='text-white font-bold  px-8'>Login</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;
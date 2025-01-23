import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
import NavBarbutton from './NavBarbutton';
import { IoMdHome } from "react-icons/io";
import { IoFlameOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";



export default function NavBar() {

    return (
        <div className="">
            <nav className='navMenu'>
                <div class="navMenuList">
                    <NavBarbutton to="/Favorites" icon={<MdFavoriteBorder/>}/>
                    <NavBarbutton to="/Trending" icon={<IoFlameOutline/>}/>
                    <NavBarbutton to="/" icon={<IoMdHome/>}/>
                    <NavBarbutton to="/Feed" icon={<MdPlaylistPlay/>}/>
                    <NavBarbutton to="/Player" icon={<TbPlayerPlay/>}/>
                </div>
            </nav>
        </div>
    )
}

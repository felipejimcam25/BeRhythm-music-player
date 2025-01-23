import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Trending from './Trending'
import Favorites from './Favorites'
import Player1 from './Player1'
import Feed from './Feed'
import Header from '../Components/Header'
import Library from './Library'
import NavBar from '../Components/navBar'
import Login from './Login'
import { setClientToken } from '../spotify'
import Player2 from './Player2'
export default function Home() {

    const [token,setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if(!token && hash){
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
            console.log("Extrated Token", _token);
        }else{
            setToken(token)
            setClientToken(token);
        }
        
        
    },[])

    

    return (!token ?(
        <Login/>
        ) : (
        
        <div class="routes">
            <Header/>
            <NavBar/>
                <Routes>
                    <Route path='/Favorites' element={<Favorites/>} />
                    <Route path='/Feed' element={<Feed/>} />
                    <Route path='/' element={<Library/>} />
                    <Route path='/Trending' element={<Trending/>} />
                    <Route path='/Player' element={<Player2/>} />
                </Routes>
        </div>
        )
    )
}



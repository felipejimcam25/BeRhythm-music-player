import React from 'react'
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom'

export default function NavBarbutton({ to, icon}) {
    const location = useLocation();

    const isActive = location.pathname === to;

    const btnClass = isActive ? "btn-body active" : "btn-body";
    return(
    <Link to={to}>
        <div className={btnClass}>
            <div class="nav_link">
                <IconContext.Provider value={{ size: "24px"}}>
                    {icon}
                </IconContext.Provider>
            </div>
        </div>
    </Link>
    );
}


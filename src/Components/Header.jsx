import React, { useEffect, useState } from 'react'
import Logo from '../Resources/Logo/Logo.png'

function Header() {

    return (
        
        <div>
            <header className="header_content container">
                <div className="header_pieces">
                    <img src={Logo} alt="Logo"/>
                </div>
            </header>
        </div>
    )
}

export default Header
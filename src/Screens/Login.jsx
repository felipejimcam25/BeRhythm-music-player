import React from 'react'
import { loginEndPoint } from '../spotify'
import Logo from '../Resources/Logo/Logo.png';
export default function Login() {
    return (
        <div className='container login-content'>
            <div className="logo-container">
            <img src={Logo} alt="Logo BeRhythm" className='login_header' />
            </div>
            <div className="login-btn-container">
                <a href={loginEndPoint} className='login_btn'>Log In</a>
            </div>
            
        </div>
    )
}

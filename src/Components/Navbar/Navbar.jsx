import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-container">
            <a href="#" className="brand"><img src="./Logo.png" alt="Nexcent Logo" /></a>
            <ul className="main-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Feature</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <div className="login-access">
                <a href="#" className='login'>Login</a>
                <a href="" className="menu-button">Sign up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header id="ritekhana-header" className="ritekhana-header-one">
            <div className="col-md-12">
                <Link to="/" className="ritekhana-logo"><img src="/images/logo.png" alt="logo" /></Link>
                <div className="ritekhana-navigation">
                <span className="ritekhana-menu-link">
                    <span className="menu-bar" />
                    <span className="menu-bar" />
                    <span className="menu-bar" />
                </span>
                <nav id="main-nav">
                    <ul id="main-menu" className="sm sm-blue">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/restaurants">Restaurants</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                </div>
                <a href="/search" className="ritekhana-header-btn">Browse a Resturant</a>
                <ul className="ritekhana-user-section">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </header>

    )
}

export default Header

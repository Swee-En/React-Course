import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor: '#212529'}}>
                <div className="container">
                    <Link className="navbar-brand" to='/home'><img src="assets/img/navbar-logo.svg" alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item nav-link">
                                <Link to='/services'>Services</Link>
                            </li>

                            <li className="nav-item nav-link"><Link to='/portfolio'>Portfolio</Link></li>
                            <li className="nav-item nav-link"><Link to='/about'>About</Link></li>
                            <li className="nav-item nav-link"><Link to='/team'>Team</Link></li>
                            <li className="nav-item nav-link"><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderTop

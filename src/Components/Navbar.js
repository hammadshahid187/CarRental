import React from 'react'
import logo from '../img/logo.svg'

export const Navbar = () => {
    const Navlink=[
        {name:"Home",link:"/home"},
        {name:"CARS FOR RENT",link:"/home"},
        {name:"CARS FOR BUY",link:"/home"},
        {name:"OUR SERVICES",link:"/home"},
        {name:"ABOUT US",link:"/home"},
        {name:"FAQS",link:"/home"},
    ]
    return (
        <div id='header' className='h-10per'>
            <nav className="navbar navbar-expand-lg navbar-light py-lg-1 py-md-1 py-2">
                <div className="container-fluid">
                    <a className="navbar-brand logo ps-4" href="#"><img src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            {Navlink.map((item)=>(
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hero-btn d-lg-block d-md-block d-none pe-4">
                        <button className="btn btn-secondary smallest-text standerd-width font-babas">Sign Up</button>
                        <button className="btn btn-primary ms-2 smallest-text standerd-width font-babas ms-3">Log In</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

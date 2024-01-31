import React from 'react'
import logo from '../img/footerlogo.svg'
import { Navbar } from './Navbar'

export const Footer = () => {
    const Navlink = [
        { name: "Home", link: "/home" },
        { name: "CARS FOR RENT", link: "/home" },
        { name: "CARS FOR BUY", link: "/home" },
        { name: "OUR SERVICES", link: "/home" },
        { name: "ABOUT US", link: "/home" },
        { name: "FAQS", link: "/home" },
    ]
    return (
        <div id='footer' className='pt-5'>
            <div className='row m-0 pt-4'>
                <div className='col-lg-2 col-md-2 col-12 mx-auto mb-4 ps-lg-0 ps-md-0 ps-4'>
                    <img src={logo} className='w-100' />
                </div>
                <div className='col-11 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light py-0">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-auto mx-md-auto">
                            {Navlink.map((item) => (
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='col-11 mx-auto text-center py-4'>
                    <span className='copyright'>copyright @ 2022 by carrental group carfitix</span>
                </div>
            </div>
        </div>
    )
}

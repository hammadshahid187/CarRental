import React from 'react'
import { Navbar } from './Navbar'
import { BookingBox } from './BookingBox';


export const HeroHeader = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className='w-7per p-0 h-100vh'>
                    <div className='h-10per bg-company'></div>
                    <div className='h-20per d-flex align-middle align-items-center justify-content-center text-center'>
                        <span className='rotated-text'>saMPLE@GMAIL.COM</span>
                    </div>
                    <div className='h-35per d-block border-top-bottom'>
                        <div className='d-flex h-50 align-middle align-items-center justify-content-center text-center'>
                            <span className='rotated-text'>+1 6756235 8127</span>
                        </div>
                        <div className='d-flex h-50 align-middle align-items-center justify-content-center text-center'>
                            <span className='rotated-text'>+1 6756235 8127</span>
                        </div>
                    </div>
                    <div className='h-35per d-flex align-middle align-items-center justify-content-center text-center'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=''><i class="fa-brands fa-twitter"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=''><i class="fa-brands fa-snapchat"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=''><i class="fa-brands fa-skype"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=''><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=''><i class="fa-brands fa-whatsapp"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-93per p-0">
                    <Navbar/>
                    <BookingBox/>
                </div>
            </div>
        </div>
    </>
  )
}

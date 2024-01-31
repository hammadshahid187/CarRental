import React from 'react'
import mapImg from '../img/map.png'

export const Contactus = () => {
  return (
    <div className='container' id='contactus'>
        <div className='row contactus bg-white'>
            <div className='col-lg-6 col-md-6 col-12 my-auto px-5 py-lg-0 py-md-0 py-4'>
                <h2 className='font-babas ps-lg-4 ps-md-4'>cONTACT US</h2>
                <div className='row m-0 mt-5'>
                    <div className='col-lg-5 col-md-5 col-12 mx-auto p-0 mt-lg-0 mt-md-0 mt-0'>
                        <div className='contactIcon d-flex'>
                            <div className='icon'>
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className='text my-auto ms-3'>
                                <span>+1263 7678 23</span><br/>
                                <span>+1263 7678 23</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-12 mx-auto p-0 mt-lg-0 mt-md-0 mt-4'>
                        <div className='contactIcon d-flex'>
                            <div className='icon'>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className='text my-auto ms-3'>
                                <span>SANTARA 45 STREET</span><br/>
                                <span>UTARA, INDONESIA</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-12 mx-auto p-0 mt-lg-5 mt-md-5 mt-4'>
                        <div className='contactIcon d-flex'>
                            <div className='icon'>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className='text my-auto ms-3'>
                                <span>SAMPLE@GMAIL.COM</span><br/>
                                <span>SAMPLE@GMAIL.COM</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-12 mx-auto p-0 mt-lg-5 mt-md-5 mt-4'>
                        <div className='contactIcon d-flex'>
                            <div className='icon'>
                                    <i class="fa-solid fa-clock"></i>
                            </div>
                            <div className='text my-auto ms-3'>
                                <span>Open Time: 12:00AM</span><br/>
                                <span>Close Time: 3:00AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 p-0 d-lg-block d-md-block d-none'>
                <img src={mapImg} className='w-100'/>
            </div>
        </div>
    </div>
  )
}

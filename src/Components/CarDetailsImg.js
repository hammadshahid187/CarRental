import React from 'react'
import MainImg from "../img/CarDetail/main.png"
import Img1 from "../img/CarDetail/d1.png"
import Img2 from "../img/CarDetail/d2.png"
import Img3 from "../img/CarDetail/d3.png"
import Img4 from "../img/CarDetail/d4.png"

export const CarDetailsImg = () => {
    const CarName=[
        {id:"1",name:"Mercedes Benz 1509 XCR"},
        {id:"2",name:"Mercedes Benz 1509 XCR"},
        {id:"3",name:"Mercedes Benz 1509 XCR"},
        {id:"4",name:"Mercedes Benz 1509 XCR"},
        {id:"5",name:"Mercedes Benz 1509 XCR"},
        {id:"6",name:"Mercedes Benz 1509 XCR"},
        {id:"7",name:"Mercedes Benz 1509 XCR"},
    ]
    return (
        <div class="container margin-top">
            <div class="row">
                <div class="col-12 text-center">
                    <h5 class="babasFont gray-text">cars</h5>
                    <h4 class="babasFont">WHAT WE ARE IN <span class="text-company babasFont">CAR RENTAL INDUSTRY</span></h4>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4 col-md-4 col-12 pe-lg-5 pe-md-5">
                    {CarName.map((item)=>(
                        <div className='d-flex fs-5 py-4 border-bottom'>
                            <div>
                                <span className='font-babas'>{item.name}</span>
                            </div>
                            <div className='ms-auto'>
                                <span><i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                    ))}
                    <button class="btn btn-primary w-100 font-babas mt-4 py-3">more details</button>
                </div>
                <div className='col-lg-8 col-md-8 col-12 p-0 boxHeight d-lg-block d-md-block d-none'>
                    <div className='row m-0 h-100'>
                        <div className='col-9 p-0 h-100'>
                            <div className='h-100 p-2'>
                                <img src={MainImg} className='object-fit-cover w-100 h-100' />
                            </div>
                        </div>
                        <div className='col-3 p-0 h-100'>
                            <div className='h-25per p-2'>
                                <img src={Img1} className='object-fit-cover w-100 h-100' />
                            </div>
                            <div className='h-25per p-2'>
                                <img src={Img2} className='object-fit-cover w-100 h-100' />
                            </div>
                            <div className='h-25per p-2'>
                                <img src={Img3} className='object-fit-cover w-100 h-100' />
                            </div>
                            <div className='h-25per p-2'>
                                <img src={Img4} className='object-fit-cover w-100 h-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


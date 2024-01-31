import React from 'react'
import Img1 from "../img/img/CARS/10.svg" 

import Img2 from "../img/img/CARS/11.svg" 

import Img3 from "../img/img/CARS/9.svg" 

import IconOne from "../img/img/iconOne.svg"
import IconTwo from "../img/img/iconTwo.svg"
import IconThree from "../img/img/iconThree.svg" 

export const CarCart = () => {
    const cartData = [
        { name: "Mercedes-benz", price: "$61.90", KM: "50000", GCC: "FLPE", engine: "3.50 L" ,img:Img1},
        { name: "Mercedes-benz", price: "$61.90", KM: "50000", GCC: "FLPE", engine: "3.50 L" ,img:Img2},
        { name: "Mercedes-benz", price: "$61.90", KM: "50000", GCC: "FLPE", engine: "3.50 L" ,img:Img3},
    ]
    return (
        <>
        {cartData.map((item) => (
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="cardBox p-3 bg-white">
                        <div class="row m-0">
                            <div class="col-4 p-0">
                                <div class="d-flex smallest-text gray-text justify-content-center">
                                    <img src={IconOne} class="pe-1" alt="" />{item.KM} KM
                                </div>
                            </div>
                            <div class="col-4 px-1 both-border">
                                <div class="d-flex smallest-text gray-text justify-content-center">
                                    <img src={IconTwo} class="pe-1" alt="" />GCC {item.GCC}
                                </div>
                            </div>
                            <div class="col-4 p-0">
                                <div class="d-flex smallest-text gray-text justify-content-center">
                                    <img src={IconThree} class="pe-1" alt="" />{item.engine} L ( 01 )
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 py-5">
                            <div class="col-12 px-5 py-5">
                                <img src={item.img}  alt="" />
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-12 pb-3 text-center">
                                <h4 class="babasFont mb-0">{item.name}</h4>
                                <span class="small-text gray-text">Start prices from {item.price} Per Day</span>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 font-babas">more details</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </>

    )
}

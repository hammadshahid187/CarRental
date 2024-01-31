import React from 'react'
import Img1 from '../img/img/car1.png'
import Img2 from '../img/img/car2.png'
import Img3 from '../img/img/car3.png'
import Img4 from '../img/img/car4.png'
import Img5 from '../img/img/car5.png'
import Img6 from '../img/img/car6.png'

export const Style = () => {
    const images = [
        { imgLink: Img1, name: "Sports", stock: "21" },
        { imgLink: Img2, name: "Sports", stock: "21" },
        { imgLink: Img3, name: "Sports", stock: "21" },
        { imgLink: Img4, name: "Sports", stock: "21" },
        { imgLink: Img5, name: "Sports", stock: "21" },
        { imgLink: Img6, name: "Sports", stock: "21" },
    ]
    return (

        <div class="container margin-top">
            <div class="row">
                <div class="col-12 text-center">
                    <h5 class="babasFont gray-text">Style</h5>
                    <h4 class="babasFont">Discover BY <span class="text-company babasFont">style</span></h4>
                </div>
            </div>
            <div class="row m-0 mt-4">
                {images.map((item) => (
                    <div class="col-lg-2 col-md-2 col-6 mb-lg-0 mb-md-0 mb-3">
                        <div class="border-1 carDisplay text-center rounded">
                            <img src={item.imgLink} alt="" />
                            <span class="small-text babasFont d-block">{item.name}</span>
                            <span class="smallest-text d-block">{item.stock} cars available</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from 'react'
import Img1 from '../img/img/1.png'
import Img2 from '../img/img/2.png'
import Img3 from '../img/img/3.png'
import Img4 from '../img/img/4.png'
import Img5 from '../img/img/5.png'

export const Brands = () => {
    const images=[
        {imgLink:Img1},
        {imgLink:Img2},
        {imgLink:Img3},
        {imgLink:Img4},
        {imgLink:Img5},
        {imgLink:Img1},
    ]
  return (
    
	<div class="container margin-top">
        <div class="row">
            <div class="col-12 text-center">
                <h5 class="babasFont gray-text">BRANDS</h5>
                <h4 class="babasFont">Discover BY <span class="text-company babasFont">Brands</span></h4>
            </div>
        </div>
        <div class="row m-0 mt-4">
                {images.map((item)=>(
                    <div class="col-lg-2 col-md-2 col-6 mb-lg-0 mb-md-0 mb-3">
                        <div class="border-1 brandLogos text-center">
                            <img src={item.imgLink} alt=""/>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

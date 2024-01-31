import React from 'react'
import { CarCart } from './CarCart'

export const CarRent = () => {
    return (
        <>
            <div class="container margin-top">
                <div class="row">
                    <div class="col-12 text-center">
                        <h5 class="babasFont gray-text">cars</h5>
                        <h4 class="babasFont">Get your <span class="text-company babasFont">CAR for rent</span></h4>
                    </div>
                </div>
                <div class="row m-0 mt-4">
                    <CarCart />
                </div>
            </div>
        </>
    )
}

import React from 'react'
import Img from "../img/img/car_faq.svg"

export const Features = () => {
    return (

        <div class="container margin-top">
            <div class="row">
                <div class="col-12 text-center">
                    <h5 class="babasFont gray-text">cars</h5>
                    <h4 class="babasFont">Best quality <span class="text-company babasFont">style CARS</span></h4>
                </div>
            </div>
            <div class="row m-0 mt-5">
                <div class="col-lg-3 col-md-3 col-12 text-end">
                    <h5 class="babasFont mb-2">one Feature</h5>
                    <p class="small-text gray-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non esse delectus aperiam impedit, illo dolore libero dolor ad recusandae eum sit nisi odit animi excepturi laborum architecto eveniet ullam.</p>
                    <h5 class="babasFont mb-2">two Feature</h5>
                    <p class="small-text gray-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non esse delectus aperiam impedit, illo dolore libero dolor ad recusandae eum sit nisi odit animi excepturi laborum architecto eveniet ullam.</p>
                    <h5 class="babasFont mb-2">three Feature</h5>
                    <p class="small-text gray-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non esse delectus aperiam impedit, illo dolore libero dolor ad recusandae eum sit nisi odit animi excepturi laborum architecto eveniet ullam.</p>

                </div>
                <div class="col-lg-6 col-md-6 col-12 text-center fullCar">
                    <img src={Img} class="p-3" alt=""/>
                </div>
                <div class="col-lg-3 col-md-3 col-12 text-start">
                    <h5 class="babasFont mb-2">four Feature</h5>
                    <p class="small-text gray-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non esse delectus aperiam impedit, illo dolore libero dolor ad recusandae eum sit nisi odit animi excepturi laborum architecto eveniet ullam.</p>
                    <h5 class="babasFont mb-2">five Feature</h5>
                    <p class="small-text gray-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non esse delectus aperiam impedit, illo dolore libero dolor ad recusandae eum sit nisi odit animi excepturi laborum architecto eveniet ullam.</p>
                    <h5 class="babasFont mb-2">six Feature</h5>
                    <p class="small-text gray-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente non esse delectus aperiam impedit, illo dolore libero dolor ad recusandae eum sit nisi odit animi excepturi laborum architecto eveniet ullam.</p>

                </div>
            </div>
        </div>
    )
}

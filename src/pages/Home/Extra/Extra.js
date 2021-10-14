import React from 'react';
import './Extra.css'
import img1 from "../../../images/adult-blur-blurred-background-687824.png"
import img2 from "../../../images/architecture-building-city-2047397.png"
import img3 from "../../../images/chef-cook-food-33614.png"

const Extra = () => {
    return (
        <div className="picture">


            <div className="row container">
                <div className="col-lg-8">
                    <h1 className="text-sm-start pb-0 extra">Why You Choose Us</h1>
                    <p className="text-sm-start extra ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo reiciendis facilis vero impedit commodi officiis ipsam autem animi ex fuga nisi quam consequatur cum aspernatur, maxime rerum incidunt est voluptatum!</p>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 picture ">
                <div class="col">

                    <img src={img1} class="card-img-top w-100" alt="..." />
                    <div class="card-body row">
                        <div className="col-lg-2">
                            <i class="far fa-comments icon bg-danger "></i>
                        </div>
                        <div className="col-lg-10">
                            <h1 class="card-title text-sm-start ">Home Delivery</h1>
                            <p class="card-text text-sm-start col-lg-8">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>

                    </div>

                </div>
                <div class="col">

                    <img src={img3} class="card-img-top w-100" alt="..." />
                    <div class="card-body row">
                        <div className="col-lg-2">
                            <i class="fas fa-bell-slash icon bg-danger "></i>
                        </div>
                        <div className="col-lg-10">
                            <h1 class="card-title text-sm-start ">Home Delivery</h1>
                            <p class="card-text text-sm-start col-lg-8">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>

                    </div>

                </div>
                <div class="col">

                    <img src={img2} class="card-img-top w-100" alt="..." />
                    <div class="card-body row">
                        <div className="col-lg-2">
                            <i class="fas icon bg-danger fa-caravan"></i>
                        </div>
                        <div className="col-lg-10">
                            <h1 class="card-title text-sm-start ">Home Delivery</h1>
                            <p class="card-text text-sm-start col-lg-8">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Extra;
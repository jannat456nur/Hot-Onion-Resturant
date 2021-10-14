import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import './Homme.css'
import img1 from "../../images/chef-cook-food-33614.png"
import img2 from "../../images/architecture-building-city-2047397.png"
import img3 from "../../images/adult-blur-blurred-background-687824.png"

const Homme = () => {
    return (
        <div>

            <div className="row">
                <div className="col-lg-6">
                    <img className="w-25  logo mb-5 mt-4 " src={logo} alt="" />

                </div>
                <div className="col-lg-6 d-flex justify-content-end button">
                    <Link to="/login"><button className="btn btn-light  p-2 rounded-pill mb-5 mt-4">Login</button></Link>
                    <button className="btn btn-danger  p-2 rounded-pill mb-5 mt-4">SignUP</button>
                </div>

            </div>
            <div className="banner ">
                <h1 className="pt-0">Best Food Waiting For your belly</h1>
                <input className="w-100% p-3 rounded-pill border border-white" type="text" placeholder="search for food" /> <button className="btn btn-danger p-3 rounded-pill m-auto">Srarch</button>

            </div>
            <div className="p-3 m-3 ">
                <Link to="/breakfast" className="m-3 change">Breakfast</Link>
                <Link to="/lunch" className="m-3 change">Lunch</Link>
                <Link to="/dinner" className="m-3 change">Dinner</Link>
                {/* <Link to="/login" className="m-3 change">Dinner</Link> */}
            </div>
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
            <div className="row bg-black p-2 text-white pt-5">
                <div className="col-lg-4">
                    <img className="w-25" src={logo} alt="" />
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-8">
                            <h5>About Online Food</h5>
                            <h5>Read aour blog</h5>
                            <h5>Sign up to delivery</h5>
                            <h5>Add your Resturant</h5>
                        </div>
                        <div className="col-lg-4">
                            <h5>About Online Food</h5>
                            <h5>Read aour blog</h5>
                            <h5>Sign up to delivery</h5>
                            <h5>Add your Resturant</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Homme;
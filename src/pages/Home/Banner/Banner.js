import React from 'react';
import './Banner.css'
import banner from '../../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div className="banner ">
            <h1 className="pt-0">Best Food Waiting For your belly</h1>
            <input className="w-100% p-3 rounded-pill border border-white" type="text" placeholder="search for food" /> <button className="btn btn-danger p-3 rounded-pill m-auto">Srarch</button>

        </div>








    );
};

export default Banner;
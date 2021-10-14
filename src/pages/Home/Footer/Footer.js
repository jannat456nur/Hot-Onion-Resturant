import React from 'react';
import logo from '../../../images/logo2.png'

const Footer = () => {
    return (
        <div>
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

export default Footer;
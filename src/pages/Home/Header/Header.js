import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import './Header.css'

const Header = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                <img className="w-25  logo mb-5 mt-4 " src={logo} alt="" />

            </div>
            <div className="col-lg-6 d-flex justify-content-end button">
                <Link to="/login"><button className="btn btn-light  p-2 rounded-pill mb-5 mt-4">Login</button></Link>
                <button className="btn btn-danger  p-2 rounded-pill mb-5 mt-4">SignUP</button>
            </div>

        </div>
    );
};

export default Header;
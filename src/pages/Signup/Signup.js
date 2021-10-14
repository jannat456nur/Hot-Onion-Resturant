import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'


const Signup = () => {
    return (
        <div className="signup">
            <img className="w-25" src={logo} alt="" />
            <br /><br />

            <input type="text" placeholder="name" />
            <br /><br />

            <input type="email" placeholder="email" />
            <br /><br />

            <input type="password" placeholder="password" />
            <br /><br />

            <input type="password" placeholder="confirm password" />





            <br /><br />
            <Link className="text-danger" to="/login">Already have N account</Link><br /><br />

            <Link to="/home"><button className="btn btn-danger rounded-pill m-2">Sign up</button></Link>
            <Link to="/home"><button className="btn btn-danger rounded-pill">Go Back</button></Link>
        </div>
    );
};

export default Signup;
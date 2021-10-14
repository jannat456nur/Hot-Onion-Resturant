import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=" ">
            <h1>404 !! Not Found</h1>
            <Link to="/home"><button className="btn btn-danger rounded-pill">Go Back</button></Link>
        </div>
    );
};

export default Error;
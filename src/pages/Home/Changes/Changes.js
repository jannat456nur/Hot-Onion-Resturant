import React from 'react';
import { Link } from 'react-router-dom';
import './Changes.css'

const Changes = () => {
    return (
        <div className="p-3 m-3 ">
            <Link to="/breakfast" className="m-3 change">Breakfast</Link>
            <Link to="/lunch" className="m-3 change">Lunch</Link>
            <Link to="/dinner" className="m-3 change">Dinner</Link>
            {/* <Link to="/login" className="m-3 change">Dinner</Link> */}
        </div>
    );
};

export default Changes;
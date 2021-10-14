import React from 'react';
import { Link } from 'react-router-dom';

const Din = (props) => {
    const { img, id, name, p, price } = props.brkfs;
    return (
        <div>
            <div class="col">
                <div class="card h-100  ">
                    <img className="" src={img} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{p}</p>
                        <h4>{price}</h4>
                        <Link to="/home"><button className="btn btn-danger rounded-pill">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Din;
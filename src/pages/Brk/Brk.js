import React from 'react';
import { Link } from 'react-router-dom';
import './Brk.css'

const Brk = (props) => {
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
                        <Link to=""><button className="btn btn-danger rounded-pill">Detail</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Brk;
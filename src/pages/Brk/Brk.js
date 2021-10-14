import React from 'react';
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brk;
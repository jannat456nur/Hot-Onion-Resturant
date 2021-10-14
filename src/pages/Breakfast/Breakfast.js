import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Brk from '../Brk/Brk';
import './Breakfast.css'

const Breakfast = () => {
    const [brk, setBrk] = useState([])
    useEffect(() => {
        fetch("./breakfast.json")
            .then(res => res.json())
            .then(data => (setBrk(data)))
        // .then(data => (console.log(data)))
    }, [])
    return (
        <div>
            <h2>Breakfast</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 breakfast">

                {
                    brk.map(brkf => <Brk
                        key={brkf.id}
                        brkfs={brkf}

                    ></Brk>)
                }

            </div>



        </div>
    );
};

export default Breakfast;



{/*   
  <div class="col">
    <div class="card h-100">
 
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}

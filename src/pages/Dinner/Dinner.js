import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Din from '../Din/Din';

const Dinner = () => {
    const [brk, setBrk] = useState([])
    useEffect(() => {
        fetch("./breakfast.json")
            .then(res => res.json())
            .then(data => (setBrk(data)))
        // .then(data => (console.log(data)))
    }, [])
    return (
        <div>
            <h2>Dinner</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 breakfast">

                {
                    brk.map(brkf => <Din
                        key={brkf.id}
                        brkfs={brkf}

                    ></Din>)
                }

            </div>
            <Link to="/home"><button className="btn btn-danger rounded-pill">Go Back</button></Link>
        </div>
    );
};

export default Dinner;
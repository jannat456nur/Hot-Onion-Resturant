import React, { useEffect, useState } from 'react';
import Brk from '../Brk/Brk';
import Lun from '../Lun/Lun';

const Lunch = () => {
    const [brk, setBrk] = useState([])
    useEffect(() => {
        fetch("./breakfast.json")
            .then(res => res.json())
            .then(data => (setBrk(data)))
        // .then(data => (console.log(data)))
    }, [])
    return (
        <div>
            <h1>Lunch</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 breakfast">

                {
                    brk.map(brkf => <Lun
                        key={brkf.id}
                        brkfs={brkf}
                    ></Lun>)
                }

            </div>
        </div>
    );
};

export default Lunch;
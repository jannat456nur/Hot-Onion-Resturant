import React from 'react';
import img1 from '../../../images/lunch1.png'
import img2 from '../../../images/lunch6.png'
import img3 from '../../../images/lunch5.png'
import img4 from '../../../images/lunch4.png'
import img5 from '../../../images/lunch3.png'
import img6 from '../../../images/lunch2.png'
import './Service.css'

const Services = () => {
    return (
        <div className="service" id="top-dishes">
            <h2>Top Dishes</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;
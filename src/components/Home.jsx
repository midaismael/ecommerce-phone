import React from "react";
import img1 from '../assets/home/img1.jpg';
import img2 from '../assets/home/img2.jpg';
import img3 from '../assets/home/img3.jpg';
import img4 from '../assets/home/img4.jpg';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="IPhone" height="500px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="IPhone" height="500px"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="IPhone" height="500px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Product/>
        </div>
    )
}

export default Home;
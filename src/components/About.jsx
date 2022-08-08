import React from "react";
import { NavLink } from "react-router-dom";
import aboutimg from '../assets/home/about.png';

const About = () => {
    return(
        <div>
            <div className="contanier my-5 py-5 mx-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est quasi reiciendis repudiandae aliquid non exercitationem provident vitae. Quasi numquam aperiam quam ipsa harum sed hic consectetur. Consequuntur, mollitia voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, est quasi reiciendis repudiandae aliquid non exercitationem provident vitae. Quasi numquam aperiam quam ipsa harum sed hic consectetur. Consequuntur, mollitia voluptas.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={aboutimg} alt="About Us" height="400px"  width="400px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
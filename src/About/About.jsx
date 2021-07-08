import React from 'react';
import Navbars from '../Homepage/Navbar';

function About(props) {
    return (
        <>
            <Navbars />
            <div className="text-center text-white  bg-primary" style={{ height: "40vh" }}>
                <span className="position-relative font-weight-bolder" style={{ font: "80px open", top: "50px", lineHeight: "50px" }}>About Us </span> <br />
                <span style={{ fontSize: "30px", top: "50px", }} className="position-relative ">
                    Providing Supprt to the world
                </span>
            </div>

            <div className="w-100 bg-light pt-3" style={{height:"60vh"}}>
                <div className="bg-light container" style={{font:"30px open"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores officia dicta, deserunt ut sed aliquam nemo quam debitis id totam temporibus accusantium repellat expedita necessitatibus nostrum, fugit vel quia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo vero ratione, quos necessitatibus officiis architecto voluptatem libero numquam quia hic sed natus qui autem velit pariatur aliquam reiciendis molestias.
                </div>
            </div>
        </>
    );
}

export default About;
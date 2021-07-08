import React from 'react';

function About(props) {
    return (
        <div className="w-100 d-lg-flex border-bottom bg-light text-center about" >
            <div className="about-text " >
                <span style={{ fontSize: "50px" }} className="text-center">
                    About Us <hr />
                </span>
                <span style={{ fontSize: "20px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quo incidunt vel ipsam at? Vel unde debitis velit hic in quisquam, assumenda cumque quasi, animi earum, facilis id tempore veniam!
                </span>
            </div>
            <div className="w-50 about-img" style={{ backgroundImage: "url('../imgs/aboutsvg')", paddingTop: "6%" }} >
                <img src={process.env.PUBLIC_URL + '/imgs/about.svg'} height="500px" width="100%" alt="error" />
            </div>
        </div>
    );
}

export default About;
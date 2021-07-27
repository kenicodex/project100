import React from 'react';
import './style.css'

function Navbar(props) {
  
// Work with us 
// Employment form 
// Contact us 
// What we do 
// Mission 
// Vision
  return (
    <div style={{ height: "100px" }} className="position-relative">
      <div className="position-absolute p-2 text-center text-dark" style={{ height: "80px", font: "30px open", left: "95px", top: "22px" }}>
        CRESTAR
          <div style={{ height: "3px", width: "100%" }} className="bg-dark shadow"></div>
        <div style={{ font: "15px open", letterSpacing: "2px" }}> Canada</div>
      </div>
      <div style={{ width: "", left: "388px", top: "30px" }} className="position-absolute">
        <a href="/" > Home</a>
        <a href="/" > Employment form </a>
        <a href="/" > Contact us</a>
        <a href="/" > What we do </a>
        <a href="/" > Mission and Vision</a>
      </div>

    </div>
  );
}

export default Navbar;
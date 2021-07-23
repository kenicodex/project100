import React from 'react';

function Navbar(props) {
  return (
    <div style={{ height: "100px" }} className="position-relative">
      <div className="position-absolute p-2 text-center text-dark" style={{ height: "80px", font: "30px open", left: "95px", top: "22px" }}>
        CRESTAR
          <div style={{ height: "3px", width: "100%" }} className="bg-dark shadow"></div>
        <div style={{ font: "15px open", letterSpacing: "2px" }}> Canada</div>
      </div>
      <div style={{ width: "", left: "388px", top: "30px" }} className="position-absolute">
        <div>Home</div>
      </div>

    </div>
  );
}

export default Navbar;
import React from 'react';
import Example from './Carousel';

function Header(props) {
  return (
    <header>
      <div className="text-center bg-light"
        style={{
          backgroundImage: "url(https://mdbcdn.b-cdn.net/img/new/slides/041.jpg)",
          backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "550px"
        }}>
        <div className=" text-center w-100">
          <div className=" header-text text-center position-relative"
            style={{ height: "300px", width: "100%", paddingTop: `${(550 - 300) / 2}px` }}>
            <div className="position-absolute bg-white " style={{ left: "35%", width: "400px", height: "250px", opacity: ".8" }}>
            </div>
            <div className="position-absolute text-dark" style={{ left: "35%", width: "400px", height: "250px", }}>
              <h1 className="mb-3 header-text " style={{ fontFamily: "open" }}>CrestarSupport</h1>
              <h4 className="mb-3">Provinding Support to the World</h4>
              <a className="btn-dark text-white btn-lg btn-outline-dark mt-4 px-5" href="/donate" role="button"
              >Donate </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Example /> */}
    </header>
  );
}

export default Header;
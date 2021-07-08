import React from 'react';
import Example from './Carousel';

function Header(props) {
    return (
        <header>   
        <div
          className="p-5 text-center bg-image" 
          style={{height:"90vh",backgroundImage:"url(https://mdbcdn.b-cdn.net/img/new/slides/041.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <div className="mask" style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}>
            <div className="d-flex justify-content-center align-items-centers" style={{height:"80vh"}}>
              <div className="text-white" style={{paddingTop:"15%"}}>
                <h1 className="mb-3 " style={{fontSize:"80px",fontFamily:"open"}}>CrestarSupport</h1>
                <h4 className="mb-3">Provinding Support to the World</h4>
                <a className="btn btn-outline-light btn-lg mt-4 px-5" href="/donate" role="button"
                  >Donate </a>
              </div>
            </div>
          </div>
        </div>
          <Example />   
      </header>
    );
}

export default Header;
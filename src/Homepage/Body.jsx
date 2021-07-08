import React from 'react';
import Div1 from './Div1';

function Body(props) {
    return (
        <div style={{height:"80vh"}} className="body ds-none">
            <div className="text-center py-5 position-relative" style={{fontSize:"60px",fontFamily:"open",top:"60px"}}>Programs and Services</div> 
            <div className="d-lg-flex justify-content-center align-items-center bg-white container text-center p_g">
                 <Div1 />
            </div>

        </div>
    );
}

export default Body;
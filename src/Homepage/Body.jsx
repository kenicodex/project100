import React from 'react';
import Div1 from './Div1';

function Body(props) {
    return (
        // <div style={{height:"80vh"}} className="body ds-none">
        //     <div className="text-center py-5 position-relative" style={{fontSize:"60px",fontFamily:"open",top:"60px"}}>Programs and Services</div> 
        //     <div className="d-lg-flex justify-content-center align-items-center bg-white container text-center p_g">
        //          <Div1 />
        //     </div>

        // </div>
        <div style={{width:"100%",height:"80vh",padding:"10%"}} className="bg-white">
            <div className=" text-center" style={{font:"35px open", color:"black",textDecoration:"bold" }}>
            Since 2001, ELIKA works exclusively for the benefit of the home buyer. We provide unbiased representation, independent market research, and expert knowledge for New York City real estate buyers.
            </div>
            <div className=" text-center" style={{font:"30px open", color:"black",textDecoration:"bold", marginTop:"45px" }}>
            A better way to buy a home at no cost to you.    
            </div>
            <div className="d-flex justify-content-center text-center" style={{font:"20px open", color:"black",textDecoration:"bold", marginTop:"40px" }}>
                    <button className="border border-dark p-3 bg-white mx-1" style={{height:"60px",width:"200px",fontWeight:"510"}}>
                        Life Insurance
                    </button>
                    <button className="border border-dark p-3 bg-white mx-1" style={{height:"60px",width:"200px"}}>
                        Life Insurance
                    </button>
            </div>
        </div>
    );
}

export default Body;
import React from 'react';

function Div1(props) {
    const Card = (p) => {
        return (

            <div style={{ width: "25%", height: "50vh" }} className="mx-2 d-lg-flex justify-content-center align-items-center rounded hs_small">
                
                <div class="card-body hs_small">
                    <div className="text-center">
                        <img src={process.env.PUBLIC_URL + `/imgs/${p.pic}.svg`} width="100px" height="100px" alt="Loading..." /></div>
                    <h3 class="card-title text-center ">{p.t || "Loading..."}</h3>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <Card t="Employment" pic="employment" />
            <Card t="Donation" pic="donation" />
            <Card t="Education" pic="school" />
        </>
    );
}

export default Div1;
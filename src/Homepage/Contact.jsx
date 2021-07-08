import React from 'react';

function Contact(props) {
    return (
        <form className="col-lg-8 col-sm-10 mx-auto contact pb-4" style={{paddingTop:"5%"}}>
           <div>
               <h1><h1> Contact Us</h1></h1>
           </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control p-4" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control p-4" id="inputPassword4" placeholder="Password"/>
                </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control p-4" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" className="form-control p-4" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control p-4" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control p-4">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control p-4" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                 </label>
                    </div>
                </div>
                <div className="text-center">
                    
                <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
    );
}

export default Contact;
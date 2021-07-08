import React from 'react';

function Footer(props) {
  return (
    <footer className="bg-light text-center text-lg-start h-auto">

      <div className="container text-center p-4 pb-0">
        <form action="">
          <div className=" text-center" >
            <div className="col-auto mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className="col-md-5 col-12 text-center mb-4 mb-md-0">
              {/* <!-- Email input --> */}
              <div className="form-outline text-center w-100 mb-4">
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label" for="form5Example2">Email address</label>
              </div>
            </div>

            <div className="col-auto mb-4 mb-md-0">

              <button type="submit" className="btn btn-primary mb-4">
                Subscribe
          </button>
            </div>
          </div>
        </form>
      </div>




      <div className="text-center p-3" style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}>
        © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>


    </footer>
  );
}

export default Footer;
import React from 'react';
import './style.css'
import {Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbars(props) {
    return (<>
        <Navbar bg="light" expand="lg" className="shadow fixed-top">
  <Navbar.Brand href="#"  style={{fontSize:"30px"}}>CrestarSupport</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0 text-dark _nav"
      style={{fontSize:"20px"}}
      navbarScroll
    >
      <Nav.Link className="" href="/">Home</Nav.Link>
      <NavDropdown style={{height:"20vh"}}  className=" " title="Programs and Services" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/education">Education</NavDropdown.Item>
        <NavDropdown.Item href="/donate">Donation</NavDropdown.Item>
        <NavDropdown.Item href="/employment">Employment</NavDropdown.Item>
        {/* <NavDropdown.Divider /> */}
      </NavDropdown>
      {/* <Nav.Link href="#action2"  className=""></Nav.Link> */}
      <Nav.Link href="/about"  className="">About Us</Nav.Link>
      <Nav.Link href="contact"  className="">Contact Us</Nav.Link>
      {/* <Nav.Link href="#action1"  className="">More</Nav.Link> */}
    </Nav>
    <Form className="d-flex">
      {/* <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      /> */}
      <Link to="/donate"><Button variant="outline-success" className="px-5 py-2">Donate</Button></Link>
    </Form>
  </Navbar.Collapse>
</Navbar> 
<div className="w-100" style={{height:"70px"}}>

</div>
</>
    );
}

export default Navbars;
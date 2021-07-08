import React from 'react';
import "./style.css"
import './bootstrap.css'
import About from './Homepage/About';
import Body from './Homepage/Body';
import Contact from './Homepage/Contact';
import Footer from './Homepage/Footer';
import Header from './Homepage/Header';
import Navbars from './Homepage/Navbar';

function App(props) {
  return (
    <div>
      <Navbars />
      <Header />
      <Body />
      <About /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
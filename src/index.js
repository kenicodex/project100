import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Donation from './Donation/Donation';
import Employment from './Employment/Employment';
import Education from './Education/Education';

const Pages = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> 
      <Route path="/donate" component={Donation} /> 
      <Route path="/employment" component={Employment} /> 
      <Route path="/education" component={Education} /> 
    </BrowserRouter> 
    )
}
ReactDOM.render(

  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

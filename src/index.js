import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Footer from './Footer';

ReactDOM.render(
 
  <BrowserRouter> 
    <NavBar/>
    <App/>
    <Footer/> 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

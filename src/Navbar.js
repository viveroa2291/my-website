import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './navbar.css';
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className='main-link' href='/'>Adan Vivero</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='links' href="/about">About</Nav.Link>
                    <Nav.Link className='links' href="/story">Story</Nav.Link>
                    <Nav.Link className='links' href="/contact">Contact</Nav.Link>
                    <Nav.Link className='links' href="/project">Project</Nav.Link>
                    <Nav.Link className='twitter-link' href="https://twitter.com/adan_vivero">
                    <i class="cib-twitter"></i>
                    
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )}
    export default NavBar;
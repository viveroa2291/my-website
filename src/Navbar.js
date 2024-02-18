import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {SocialIcon } from 'react-social-icons';
import './navbar.css';
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navigation-bar'>
            <Navbar.Brand className='main-link' href='/'>Adan Vivero</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='links' href="/about">About</Nav.Link>
                    <Nav.Link className='links' href="/story">Story</Nav.Link>
                    <Nav.Link className='links' href="/connect">Connect</Nav.Link>
                    <Nav.Link className='links' href="/project">Project</Nav.Link>
                </Nav>                    
                <SocialIcon className='twitter-link' url="https://twitter.com/adan_vivero"/>
            </Navbar.Collapse>
        </Navbar>
    )}
    export default NavBar;
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './CSS/Connect.css';
import {SocialIcon } from 'react-social-icons';


function Connect () {
  
    return (
        <Container className="body">
            <h1 style={{textAlign: 'center'}}>Connect with me</h1>
            <hr/>
            <Row className="inside">
                <img className='header-image' src="/images/IMG_5999.jpeg" alt=""/>
            </Row>
            <p>Here are some links on where you can connect with me.</p>
            <Row className='icons'>
                <SocialIcon className='icon' url="https://www.linkedin.com/in/adan-vivero-a93970156/"/>
                <SocialIcon className='icon' url="https://stackoverflow.com/users/10572727/adan-vivero?tab=profile"/>
                <SocialIcon className='icon' url="https://discord.com/channels/719094259051135027/719094260174946329"/>
                <SocialIcon className='icon' url="https://mail.google.com/mail/u/0/?ogbl#inbox"/>
                <SocialIcon className='icon' url="https://github.com/viveroa2291"/>
                <SocialIcon className='icon' url="https://medium.com/@adan_vivero"/>
                <SocialIcon className='icon' url="https://gitlab.com/viveroa2291"/>
            </Row>
            <hr/>
        </Container>
    )
}

export default Connect;
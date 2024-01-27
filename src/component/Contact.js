import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './CSS/Contact.css';
import {SocialIcon } from 'react-social-icons';


function Contact () {
  
    return (
        <Container className="body">
            <h1 style={{textAlign: 'center'}}>Contact & Social Media information:</h1>
            <hr></hr>
            <Row className="inside">
                <img src="/images/IMG_5999.jpeg" alt=""></img> 
                <Col>
            
                <p><SocialIcon url="https://www.facebook.com/adan.vivero97/" />   Facebook: <a href="https://www.facebook.com/adan.vivero97/">https://www.facebook.com/adan.vivero97/</a></p> 
                <p><SocialIcon url="https://www.instagram.com/adxadan/"/> Instagram: <a href="https://www.instagram.com/adxadan/">adxadan</a> </p> 
                <p><SocialIcon url="https://www.snapchat.com/" /> Snapchat: adx305</p> 
                <p><SocialIcon url="https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg" /> YouTube: <a href="https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg">https://www.youtube.com/channel/UC44ZQ3MDGUBNPA0ZFsY8Lfg</a> </p>
                <p><SocialIcon url="https://www.linkedin.com/in/adan-vivero-a93970156/"/> LinkedIn: <a href="https://www.linkedin.com/in/adan-vivero-a93970156/">https://www.linkedin.com/in/adan-vivero-a93970156/</a></p>
                <p><SocialIcon url="https://stackoverflow.com/users/10572727/adan-vivero?tab=profile" /> StackOverflow: <a href="https://stackoverflow.com/users/10572727/adan-vivero?tab=profile">https://stackoverflow.com/users/10572727/adan-vivero?tab=profile</a></p>
                <p><SocialIcon url="https://parler.com/#/user/Adxadan"/> Parler: <a href="https://parler.com/#/user/Adxadan">https://parler.com/#/user/Adxadan</a> </p>
                <p><SocialIcon url="https://discord.com/channels/719094259051135027/719094260174946329" /> Discord: <a href="https://discord.com/channels/719094259051135027/719094260174946329">https://discord.com/channels/719094259051135027/719094260174946329</a></p>
                <p><SocialIcon url="https://mail.google.com/mail/u/0/?ogbl#inbox"/> Email: adxadan@gmail.com</p>
                
                </Col>
               
            </Row>
            <hr></hr>
           
            
            
        </Container>

     
        
    )
}

export default Contact;
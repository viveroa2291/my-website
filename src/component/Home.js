import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Home.css';
import chicago from '../images/chicago.jpeg';
import coke from '../images/coke.jpg';
import oop from '../thumbnails/oop.png';
import threads from '../thumbnails/threads.png';
import interfaces from '../thumbnails/interface.png';
function Home() {
    return(
    <div id="mainBody">
        <div class="top-bar">
            <span class='picture'>
                <img class="chicago-image" src={chicago} alt='Chicago'></img>
            </span>
            <div class="introduction">
                <h2 class="helloWorld">Hi, I'm Adan.</h2>
                <p>Welcome! Lately you'll find me here scribbling down notes on what I'm learning. If you read anything <br></br> here and have feedback, corrections or thoughts, I'd love to hear from you. </p>
                <Link class='about-link' to="/About">About Me</Link>
            </div>
        </div>
        <hr></hr>
        <div class="first-story">
            <span>
                <a href='https://medium.com/@avivero6487/share-a-coke-draws-people-in-d86bec99c5d8'><img class="coke-image" src={coke} alt='Coca Cola'></img></a>
            </span>
            <span class="story-description">
                <h2>Share A Coke Draws People In</h2>
                <p>Many advertisements have a Unique Selling Proposition, and Coke’s is “Share A Coke”. Coke has been dominating its competitors for years but its main competitor “Pepsi”. With a new and different ad campaign, Coke has been remaining above others in its drinks.</p>
                <p>Last updated: 22 Oct 2015</p>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
               <a href='https://medium.com/@adan_vivero/introduction-to-object-oriented-programming-cba5acaee45b'><img className='thumbnails' src={oop} alt="Object Oriented Programming"/></a> 
                <p className='category'>Java</p>
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/introduction-to-object-oriented-programming-cba5acaee45b'>Object Oriented Programming</a></h5>
                <p>Object-Oriented Programming is a model that organizes code into reusable chunks of units wrapped into what is called objects.</p>
                <p>Last updated: 4 Feb 2024 </p>
            </span>
            <span>
                <img className='thumbnails' src={threads} alt="Object Oriented Programming"/>
                <p className='category'>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p className='category'>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <a href='https://medium.com/@adan_vivero/java-interfaces-9e4d59188409'><img className='thumbnails' src={interfaces} alt="Object Oriented Programming"/></a>
                <p className='category'>Java</p>
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/java-interfaces-9e4d59188409'>Interfaces</a></h5>
                <p>In the realm of Java Development, interfaces plays a pivotal role in how classes implement functionality.</p>
                <p>Last updated: 8 Feb 2024</p>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p className='category'>Java</p> 
                <h5>Java Virtual Machine (JVM)</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p className='category'>Java</p>
                <h5>Abstract Classes</h5>
            </span>
        </div>
        {/*
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        <hr></hr>
        <div className='next-stories'>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Object Oriented Programming</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p> 
                <h5>Threads</h5>
            </span>
            <span>
                <img className='thumbnails' src={oop} alt="Object Oriented Programming"/>
                <p>Java</p>
                <h5>Exceptions</h5>
            </span>
        </div>
        */}
        <hr></hr>
    </div>
    );
}
export default Home;
import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Home.css';
import chicago from '../images/chicago.jpeg';
import coke from '../images/coke.jpg';
import oop from '../thumbnails/oop.png';
import threads from '../thumbnails/threads.png';
import interfaces from '../thumbnails/interface.png';
import exceptions from '../thumbnails/exceptions.png';
import jvm from '../thumbnails/jvm.png';
import abstract from '../thumbnails/abstract.png';
function Home() {
    return(
    <div id="mainBody">
        <div class="top-bar">
            <span class='picture'>
                <img class="chicago-image" src={chicago} alt='Chicago'></img>
            </span>
            <div class="introduction">
                <h2 class="helloWorld">Hi, I'm Adan.</h2>
                <p className='my-story'>Welcome! Lately you'll find me here scribbling down notes on what I'm learning. If you read anything <br></br> here and have feedback, corrections or thoughts, I'd love to hear from you. </p>
                <Link className='about-link' to="/About">About Me</Link>
            </div>
        </div>
        <hr/>
        <div class="first-story">
            <span>
                <a href='https://medium.com/@avivero6487/share-a-coke-draws-people-in-d86bec99c5d8'><img class="coke-image" src={coke} alt='Coca Cola'></img></a>
            </span>
            <span class="main-description">
                <h2 className='main-header'><a className='title-link' href='https://medium.com/@avivero6487/share-a-coke-draws-people-in-d86bec99c5d8'>Share A Coke Draws People In</a></h2>
                <p className='main-story'>Many advertisements have a Unique Selling Proposition, and Coke’s is “Share A Coke”. Coke has been dominating its competitors for years but its main competitor “Pepsi”. With a new and different ad campaign, Coke has been remaining above others in its drinks.</p>
                <p>Last updated: 22 Oct 2015</p>
            </span>
        </div>
        <hr className='divider'/>
        <div className='next-stories'>
            <span>
               <a href='https://medium.com/@adan_vivero/introduction-to-object-oriented-programming-cba5acaee45b'><img className='thumbnails' src={oop} alt="Object Oriented Programming"/></a> 
                <p className='category'>Java</p>
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/introduction-to-object-oriented-programming-cba5acaee45b'>Object Oriented Programming</a></h5>
                <p className='description'>Object-Oriented Programming is a model that organizes code into reusable chunks of units wrapped into what is called objects.</p>
                <p>Last updated: 4 Feb 2024 </p>
            </span>
            <span>
                <a href='https://medium.com/@adan_vivero/threads-in-java-programming-f5a196de8c72'><img className='thumbnails' src={threads} alt="Threads"/></a>
                <p className='category'>Java</p> 
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/threads-in-java-programming-f5a196de8c72'>Threads</a></h5>
                <p className='description'>Threads in Java are a key component in Java Programming, allowing programmers to execute multiple tasks at a time within a single program.</p>
                <p>Last updated: 13 Feb 2024 </p>
            </span>
            <span>
                <a href='https://medium.com/@adan_vivero/java-exceptions-7bf11e69ea4a'><img className='thumbnails' src={exceptions} alt="Exceptions"/></a>
                <p className='category'>Java</p>
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/java-exceptions-7bf11e69ea4a'>Exceptions</a></h5>
                <p className='description'>Exceptions in Java are a crucial element of Java Programming as it is a way for developers to debug unexpected events or errors within a program.</p>
                <p>Last updated: 14 Feb 2024</p>
            </span>
        </div>
        <hr className='divider'/>
        <div className='next-stories'>
            <span>
                <a href='https://medium.com/@adan_vivero/java-interfaces-9e4d59188409'><img className='thumbnails' src={interfaces} alt="Object Oriented Programming"/></a>
                <p className='category'>Java</p>
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/java-interfaces-9e4d59188409'>Interfaces</a></h5>
                <p className='description'>In the realm of Java Development, interfaces plays a pivotal role in how classes implement functionality.</p>
                <p>Last updated: 8 Feb 2024</p>
            </span>
            <span>
                <a href='https://medium.com/@adan_vivero/java-virtual-machine-501d00a6d1f6'><img className='thumbnails' src={jvm} alt="Java Virtual Machine"/></a>
                <p className='category'>Java</p> 
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/java-virtual-machine-501d00a6d1f6'>Java Virtual Machine (JVM)</a></h5>
                <p className='description'>The Java Virtual Machine (JVM) is a virtualized execution environment that enables Java applications to run on various different hardware devices.</p>
                <p>Last updated: 14 Feb 2024</p>
            </span>
            <span>
                <a href='https://medium.com/@adan_vivero/abstract-classes-in-java-6579d0d2a9a7'><img className='thumbnails' src={abstract} alt="Abstract Classes"/></a>
                <p className='category'>Java</p>
                <h5><a className='title-link' href='https://medium.com/@adan_vivero/abstract-classes-in-java-6579d0d2a9a7'>Abstract Classes</a></h5>
                <p className='description'>An Abstract Class in Java is a class that can’t be instantiated on its own and typically functions as a blueprint for other classes.</p>
                <p>Last updated: 15 Feb 2024</p>
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
        <hr className='divider'/>
    </div>
    );
}
export default Home;
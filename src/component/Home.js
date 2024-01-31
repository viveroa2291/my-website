import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Home.css';
import chicago from '../images/chicago.jpeg';
import coke from '../images/coke.jpg';
function Home() {
/*
                <p>Coke has been a very popular drink around the world for a very long time, and the reason why is because of its advertisement techniques. Its Unique Selling Proposition (USP), “Share A Coke” reaches out to a larger audience, because when you purchase the drink, you can get another one and share it with another person even if they’re not much of a coke drinker. Pepsi, on the other hand is very similar to coke, taste wise, but struggles on sales because it doesn’t reach out to a larger audience as coke does. They both may be alike, but sharing the product out to a different group of people is just a smarter strategy on selling your product. Many different consumors purchase coke even though it may not be the most healthiest drink out there, it’s mostly for the taste.</p>
                <p>Coke has made their company better in sales with their Unique Selling Proposition. Regardless of how many drinks are similar to coke, Coke remains on top and its advertising strategies dominate others. The company makes money by catching the consumers eye and having them share their product to others. That is a very successful USP.</p>
*/
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
                <img class="coke-image" src={coke} alt='Coca Cola'></img>
            </span>
            <span class="story-description">
                <h2>Share A Coke Draws People In</h2>
                <p>Many advertisements have a Unique Selling Proposition, and Coke’s is “Share A Coke”. Coke has been dominating its competitors for years but its main competitor “Pepsi”. With a new and different ad campaign, Coke has been remaining above others in its drinks.</p>
                <p>Last updated: 22 Oct 2015</p>
            </span>
        </div>
        <hr></hr>
    </div>
    );
}
export default Home;
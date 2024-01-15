import React from 'react'
import './Home.css'
import chicago from '../images/chicago.jpeg';
function Home() {
    const headerDiv = document.getElementById("header")
    const previousButton = document.getElementById('previous-button')
    const nextButton = document.getElementById('next-button')
    const headerTitles = ["Home Page", "About", "Story", "Contact", "Projects"]

    let s = 0;
/*
    function advance(delta) {
        s = (s + delta + headerTitles.length) % headerTitles.length;
         headerDiv.innerHTML = headerTitles[s];
       
        desc.innerHTML = pageDesc[s];
        prev.src = imageSources[s];
        goToLinks.setAttribute("href", daLinks[s]);
        goToLinks.innerHTML = daPages[s];
        
    }
    
    previousButton.addEventListener('click', () => advance(-1));
    nextButton.addEventListener('click', () => advance(1));
   
    advance(0); 
*/
    return(
    <div id="mainBody">
        <div class="top-bar">
            <span class='picture'>
                <img class="chicago-image" src={chicago}></img>
            </span>
            <div class="introduction">
                <h2 class="helloWorld">Hi, I'm Adan.</h2>
                <p>Welcome! Lately you'll find me here scribbling down notes on what I'm learning. If you read anything <br></br> here and have feedback, corrections or thoughts, I'd love to hear from you. </p>
                <a href="/About">About Me</a>
            </div>
        </div>
        <hr></hr>
        </div>
    );
}
export default Home;
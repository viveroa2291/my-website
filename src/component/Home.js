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
        <div>
            <img class="chicago-image" src={chicago}></img>
        </div>
        <div id="leftBar">
            <h2 id="helloWorld">Guide</h2>
            <hr></hr>
            <p>This website is for you guys to get to know a little bit about me and where I come from and what my interests are. </p>
            <p>Down below on the footer are a bunch of links that include my social media and links to see my work in regards to computer science. You can also find more in depth on the top navigation bar under <a href="/contact">'Contact'</a>.</p>
            <p>On the top navigation bar, you can find the <a href="/about">About</a>, <a href="/story">Story, </a> <a href="/contact">Contact</a>, and <a href="/project">Projects</a> links.</p>
            
            
        </div>
        <div id="description">
        <div id="previous-button" /* onClick={() => advance(-1)} */> &#8249;</div>
            <h2 id="header">This is the header</h2>
            <div id="next-button" /* onClick={() => advance(1)} */ >&#8250;</div>
            <p>This is the description</p>
        </div>
        
        </div>
        
    );
}
export default Home;
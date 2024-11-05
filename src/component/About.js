import React from 'react';
import "./CSS/About.css";
import TechStack from './about-sub/TechStack';
import Work from './about-sub/Work.js';
import chicago from '../images/chicago.jpeg';
import {Collapse} from 'react-bootstrap';
/*
fetch('https://graph.facebook.com/me?fields=age_range,friends', {
    headers: {Authorization: `Bearer {EAAEpbBN4NYcBO050H9rhHcBZAAaVivfu3O6UWvMuQTMEdGGDo5YGRde7vZB0rzv30pDZC2UFsSjPpZCjJR01rWyjhdueAeAJpolE9PQkmOvAZAvgeW7eg8ZBqfBh5mdjNnK5kGxTWZBCEsEZBRz3kaVzvBZAUR0DrKpAhpeyZCgGeyEgt2u9GXSFtc8CQk0WuDA2sVZAta6UOi9pROtlyZCzizojcBa0WNsZARcohBvrrJ3OHH0WxIdeXBN7XEPaZBcZBKZAQov7T2AZD}`}
}).then(res => {
    console.log(res);
});
*/
function About() {
    return (
      <div className='about-section'>
          <h1>About</h1>
          <br/>
          <div className='about-picture'>
                <img className="about-chicago-image" src={chicago} alt='Chicago'/>
          </div>
          <p className='introduction'>Hey! I'm Adan. Take some time to dive into my about me.</p>
          <h2>Me in 20 seconds</h2>
          <p>I've been programming since I was a senior in high school working with IOS apps, in particular with Swift. 
            Since graduating high school, I attended the University of Wisconsin - Eau Claire in which I graduated with a bachelor's degree majoring in computer science.
          </p>
          <p>Since graduating college, I've had a role as a full stack java developer at Cognixia in which I worked extensively with Java along with building web applications utilizing React.js and AWS.
            During my role at Cognixia, I've worked in a collaborative environment with others building web applications on the full stack working with databases, cloud, and API's utilizing Java's Spring framework
            but also using AWS to host our sites and databases. 
          </p>
          <p>Aside from my experience, I have worked with all sorts of tech stacks. My most proficient programming languages would have to be C++, Java, Javascript, and React.js. I have also worked with C, Python, Kotlin, Typescript, React-Native, Next.js, Node.js, and PHP.</p>
          <p>In my free time, I like to build projects and learn with different technologies. I also like to engage in tech communities such as <a href="https://x.com/TheHuntSpaces">The Hunt</a> on X, 
          where we discuss all tech related subjects such as the tech market, AI, and programming langauges. Aside from that, I like to create Snapchat lenses, listen to the 
          <a href="https://open.spotify.com/show/6UO3XQclSuNnGxB39QdAnL?si=a9453dfe57b54d2a"> Software Engineering podcast</a>, and engage in tech related streams on Twitch.
          </p>
          <p>I'm living in Chicago, Illinois.</p>
          <h2 className='tech-stack-header'>My Tech  Stack</h2>
          <Collapse in={TechStack}>
            <TechStack/>
          </Collapse>
          <h2>Where I've worked</h2>          
          <Collapse in={Work}>
            <Work/>
          </Collapse>
          <h2 className='film-header'>My most watched films</h2>
          <hr/>
          <div className='film-div'>
            <span className='film'>              
              <a className='film-link' href='https://www.youtube.com/watch?v=5dZ_lvDgevk'>In the age of AI</a>  
              <hr/>
              <iframe className='youtube-videos' width="350" height="157.5" src="https://www.youtube.com/embed/5dZ_lvDgevk?si=EfmImR9pl5V51jwk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
            </span>
            <span className='film'>              
              <a className='film-link' href='https://www.youtube.com/watch?v=1cKE12LK4Eo&t=1255s'>AI Tipping Point</a>
              <hr/>
              <iframe className='youtube-videos' width="350" height="157.5" src="https://www.youtube.com/embed/1cKE12LK4Eo?si=l8GwtK1N0Wipy5Fd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
            </span>
          </div>
      </div>
    );
}
export default About;
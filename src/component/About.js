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
          <p className='introduction'>Hey! I'm Adan. Thanks for visiting my blog.</p>
          <h2>Me in 20 seconds</h2>
          <p>I'm a full stack developer having worked with all sorts of programming languages. My most proficient programming languages would have to be C++, Java, HTML, CSS, Javascript, and React.js. I have also worked with C, Python, Kotlin, and PHP.</p>
          <p>I have experience working with databases, cloud computing, git, and Api's. The technologies that I use for those are Springboot, AWS, and SQL.</p>
          <p>In my free time, I like to create Snapchat lenses.</p>
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
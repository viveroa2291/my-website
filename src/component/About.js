import React from 'react'
import "./CSS/About.css"

fetch('https://graph.facebook.com/me?fields=age_range,friends', {
    headers: {Authorization: `Bearer {EAAEpbBN4NYcBO050H9rhHcBZAAaVivfu3O6UWvMuQTMEdGGDo5YGRde7vZB0rzv30pDZC2UFsSjPpZCjJR01rWyjhdueAeAJpolE9PQkmOvAZAvgeW7eg8ZBqfBh5mdjNnK5kGxTWZBCEsEZBRz3kaVzvBZAUR0DrKpAhpeyZCgGeyEgt2u9GXSFtc8CQk0WuDA2sVZAta6UOi9pROtlyZCzizojcBa0WNsZARcohBvrrJ3OHH0WxIdeXBN7XEPaZBcZBKZAQov7T2AZD}`}
}).then(res => {
    console.log(res);
});
function About() {
    return (
      <div className='about-section'>
          <h1>About</h1>
          <br></br>
          <p>Hey! I'm Adan. Thanks for visiting my blog.</p>
          <h2>Me in 20 seconds</h2>
          <p>I'm a full stack developer having worked with all sorts of programming languages. My most proficient programming languages would have to be C++, Java, HTML, CSS, Javascript, and React.js. I have also worked with C, Python, Kotlin, and PHP.</p>
          <p>I have experience working with databases, cloud computing, git, and Api's. The technologies that I use for those are Springboot, AWS, and SQL.</p>
          <p>In my free time, I like to create Snapchat lenses.</p>
          <p>I'm living in Chicago, Illinois.</p>
          <h2>My most read/watched articles/films</h2>
          <h2>Snapchat Lenses</h2>
          <h2>All my writing</h2>
          <h2>Connect with me</h2>
      </div>
    );
}
export default About;
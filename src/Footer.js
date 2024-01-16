import React from 'react'
import "./Footer.css"
function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <div class="footer">
            <span class="first-half">
                <a href="/" class="name">Adan Vivero</a>
                <p class="copyright">© {currentYear}</p>    
            </span>
            <span class="second-half">
                <a href="/" class="latest">Latest Posts</a>
                <a href="https://twitter.com/adan_vivero" class="name"><b>·</b> Twitter</a>
            </span>
        </div> 
    )
}
export default Footer;
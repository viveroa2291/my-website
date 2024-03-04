import React from 'react'
import "./Footer.css"
function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <span className="first-half">
                <a href="/" className="name">Adan Vivero</a>
                <p className="copyright">© {currentYear}</p>    
            </span>
            <span className="second-half">
                <a href="/" className="latest">Latest Posts</a>
                <a href="https://twitter.com/adan_vivero" className="name"><b>·</b> Twitter</a>
            </span>
        </div> 
    )
}
export default Footer;
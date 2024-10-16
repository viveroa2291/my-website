import React, {useEffect} from 'react';
import './CSS/Snapchat-Embedding.css'; 

const SnapchatEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.snapchat.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
          document.body.removeChild(script); // Cleanup on component unmount
        };
      }, []); // Empty array means this effect runs once after initial render
      
    return (
        <div>
        <blockquote className="snapchat-embed" 
            data-snapchat-embed-width="416" 
            data-snapchat-embed-height="692" 
            data-snapchat-embed-url="https://www.snapchat.com/lens/3f3b83e64d7a4b1e9b06e9c2e27b4ecc/embed" 
            data-snapchat-embed-style="border-radius: 20px;"
            data-snapchat-embed-title="Sami's Birthday Lens"> 
            <div className='snapchat-embed-div'>  
              <a className='snapchat-embed-link' title="Sami's Birthday Lens" href="https://www.snapchat.com/lens/3f3b83e64d7a4b1e9b06e9c2e27b4ecc"/>
              <div className='snapchat-embed-inner-div'>
                </div> 
              </div> 
              <div className='outer-inner-div'></div> 
              <div className='outer-div'>  
              <a className='bottom-snapchat-link' title="Sami's Birthday Lens" href="https://www.snapchat.com/lens/3f3b83e64d7a4b1e9b06e9c2e27b4ecc">View more on Snapchat</a> 
            </div>
          </blockquote>
            <script async src="https://www.snapchat.com/embed.js"/>
        </div>
    );
};

export default SnapchatEmbed;
import React, { useEffect } from 'react';
const Prospect = () => {
  /* The block of Code that AI was making me put garbage inside */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.snapchat.com/embed.js";
    script.async = true;

    // Append the script to the document body or head
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div>
      <blockquote
        className="snapchat-embed"
        data-snapchat-embed-url="https://www.snapchat.com/lens/a43f71255a884f9198adc6f2a66dfdb7/embed"
        data-snapchat-embed-style="border-radius: 20px; width: 16vw; height: 650px;" // This is the line of code that fixed my error
        data-snapchat-embed-title="Sami's Birthday Lens"
        style={{
          background: '#C4C4C4', 
          border: '0', 
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
          margin: '1px', 
          maxWidth: '416px', 
          minWidth: '326px', 
          padding: '0', 
          width: 'calc(100% - 2px)', 
          display: 'flex', 
          flexDirection: 'column', 
          position: 'relative', 
          height: '650px',
        }}
      >
      </blockquote>
    </div>
  );
};

export default Prospect;
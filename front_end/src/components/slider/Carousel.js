import React from 'react'
import Main from './Main';

const Carousel = () => {
    const slides = [
        // { url: "http://localhost:3000/first.jpg", title: "beach" },
        // { url: "http://localhost:3000/second.jpg", title: "boat" },
        { url: "http://localhost:3000/Image1.png", title: "forest" },
        { url: "http://localhost:3000/Image2.PNG", title: "city" },
        { url: "http://localhost:3000/Image3.PNG", title: "italy" },
      ];
      const containerStyles = {
        width: "100%",
        height: "450px",
        margin: "0 auto",
        marginTop:"0"
      };
      return (
        <div>
          <div style={containerStyles}>
            <Main slides={slides} />
          </div>
        </div>
      );
}

export default Carousel

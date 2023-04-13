import React from 'react'
import Main from './Main';

const Carousel = () => {
    const slides = [
        { url: "http://localhost:3000/first.jpg", title: "beach" },
        { url: "http://localhost:3000/second.jpg", title: "boat" },
        // { url: "http://localhost:3000/image-3.jpg", title: "forest" },
        // { url: "http://localhost:3000/image-4.jpg", title: "city" },
        // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };
      return (
        <div>
          <h1>Hello monsterlessons</h1>
          <div style={containerStyles}>
            <Main slides={slides} />
          </div>
        </div>
      );
}

export default Carousel

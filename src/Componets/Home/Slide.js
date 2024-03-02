import React, { useState, useEffect } from 'react';
import './Slide.css'; // Add the corresponding CSS file

const Slide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index in a circular manner
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentIndex, images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-item ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slide;

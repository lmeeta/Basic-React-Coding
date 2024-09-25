import { useEffect, useState } from "react";
import "./BasicCarousel.css";

function BasicCarousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CallApi = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setImages(data));
  };

  useEffect(() => {
    CallApi();
  }, []);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1>carousel</h1>
      {images.length > 1 ? (
        <div>
          <img src={images[currentIndex].url} className="imagesStyle" />
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      ) : null}
    </>
  );
}

export default BasicCarousel;

import { useCallback, useEffect, useState } from "react";
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
    setInterval(handleNext, 4000);
  }, []);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = useCallback(() => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  return (
    <>
      <h1>Carousel</h1>
      {images.length > 1 ? (
        <>
          <div className="boxStyling">
            <img src={images[currentIndex].url} className="imagesStyle" />
          </div>
          <button onClick={handlePrev} className="prevbuttonStyle">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-pause"></i>
          </button>
          <button onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      ) : null}
    </>
  );
}

export default BasicCarousel;

import React, { useState } from "react";
import Diamond from "../../assets/images/mvn-mall/diamond.png";
import HighlightedDiamond from "../../assets/images/mvn-mall/diamond-dark.png"; // Highlighted version
import Exp_Img1 from "../../assets/images/mvn-mall/exp1.webp";
import Exp_Img2 from "../../assets/images/mvn-mall/exp2.webp";
import Exp_Img3 from "../../assets/images/mvn-mall/exp3.webp";
import Carousel from "react-bootstrap/Carousel";

const Experience_Sec = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const thumbnails = [
    {
      id:1,
      src: Diamond,
      activeSrc: HighlightedDiamond,
      content: "A Culinary Experience Bigger Than Your Imagination",
      alt: "First slide thumbnail",
    },
    {
      id:2,
      src: Diamond,
      activeSrc: HighlightedDiamond,
      alt: "Second slide thumbnail",
      content: "HOSPITALITY BIGGER THAN YOUR IMAGINATION",
    },
    {
      id:3,
      src: Diamond,
      activeSrc: HighlightedDiamond,
      alt: "Third slide thumbnail",
      content: "ENTERTAINMENT BIGGER THAN YOUR IMAGINATION",
    },
  ];

  const imgSlid = [
    {
      id: 1,
      imgSlide: Exp_Img1,
    },
    {
      id: 2,
      imgSlide: Exp_Img2,
    },
    {
      id: 3,
      imgSlide: Exp_Img3,
    },
  ];

  return (
    <section className="section experience-section">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
      >
        {imgSlid?.map((item, i) => (
          <Carousel.Item key={i}>
            <div class="image-exp">
              <img
                className="img-fluid w-100"
                src={item.imgSlide}
                alt="First slide"
              />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Thumbnail Indicators */}
      <div className="custom-indicators d-flex justify-content-end mt-3 ">
        {thumbnails.map((thumbnail, idx) => (
          <>
            <img
              key={idx}
              src={index === idx ? thumbnail.activeSrc : thumbnail.src} // Switch image for active state
              alt={thumbnail.alt}
              className={`thumbnail-img ${index === idx ? "active" : ""}`}
              onClick={() => handleSelect(idx)}
              style={{
                cursor: "pointer",

                margin: "0 5px",
                border: "none", // No border
                borderRadius: "4px",
                objectFit: "cover",
              }}
            />
            <div class="exp-content">
              <h4>{thumbnail.content}</h4>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Experience_Sec;

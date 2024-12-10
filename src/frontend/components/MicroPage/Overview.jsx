import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import diamondIMG from "../../assets/images/icons/plane1.png";

const MicroOverview = ({ data }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [ended1, setEnded1] = useState(false);
  const [ended2, setEnded2] = useState(false);
  const [ended3, setEnded3] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isScrolledIntoView = (elem) => {
    if (!elem.current) return false;
    const rect = elem.current.getBoundingClientRect();
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= viewHeight;
  };

  const countUp = (countTo, setCount, setEnded) => {
    const duration = 200; // Duration of the animation in milliseconds
    const fps = 60; // Frames per second
    const steps = duration / (300 / fps); // Total steps for the animation
    const increment = Math.ceil(countTo / steps); // Increment value per step

    let currentCount = 0;

    const animate = () => {
      currentCount = Math.min(currentCount + increment, countTo); // Increment or cap at countTo
      setCount(currentCount.toLocaleString());

      if (currentCount < countTo) {
        requestAnimationFrame(animate);
      } else {
        setEnded(true);
      }
    };

    animate();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!ended1 && isScrolledIntoView(ref1)) {
        countUp(13600, setCount1, setEnded1);
      }
      if (!ended2 && isScrolledIntoView(ref2)) {
        countUp(11700, setCount2, setEnded2);
      }
      if (!ended3 && isScrolledIntoView(ref3)) {
        countUp(5850, setCount3, setEnded3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ended1, ended2, ended3]);

  const { title, location, extra, desc } = data.overview;

  return (
    <section className="section micro_overview text-center pb-0">
      <Container>
        <div className="overview_card px-0">
          <div className="aboutUs-card_heading">
            <div className="diamond_img_strip">
              <img src={diamondIMG} className="img-fluid" alt="image" />
            </div>
            <div className="title">
              <h1 className="pr_name">{title}</h1>
              <h6 className="location">{location}</h6>
            </div>
          </div>

          {extra && <p className="extra">{extra}</p>}

          <div className="aboutUs-box">
            {desc && Array.isArray(desc) ? (
              desc.map((el, i) => (
                <p className="desc" key={`desc-${i}`}>
                  {el}
                </p>
              ))
            ) : (
              <p>{desc}</p>
            )}
          </div>

          <p className="counter-heading">5.5 BHK One of the Largest Apartments in Gurugram</p>

          <div className="counter-flex-box">
            <div className="flex-box" ref={ref1}>
              <h4>
                <span className="counter">{count1}</span> <span className="sqft">sqft</span>
              </h4>
            </div>
            <div className="flex-box" ref={ref2}>
              <h4>
                <span className="counter">{count2}</span> <span className="sqft">sqft</span>
              </h4>
            </div>
            <div className="flex-box" ref={ref3}>
              <h4>
                <span className="counter">{count3}</span> <span className="sqft">sqft</span>
              </h4>
            </div>
          </div>

          <span className="bar"></span>
        </div>

        <p className="rera-number">RERA Registration no : RERA-GRG-PROJ-1729-2024</p>
      </Container>
    </section>
  );
};

export default MicroOverview;

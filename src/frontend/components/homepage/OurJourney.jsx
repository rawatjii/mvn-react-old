import React, { useEffect, useRef, useState } from "react";
import SecTitle from "../../../common/SecTitle/Index";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Import icons
import diamondIcon from "../../assets/images/icons/diamond.png";
import expIcon from "../../assets/images/icons/journey/new-icons/icon-1.png";
import citiesIcon from "../../assets/images/icons/journey/new-icons/icon-2.png";
import completeProjectsIcon from "../../assets/images/icons/journey/new-icons/icon-3.png";
import ongoingProjectsIcon from "../../assets/images/icons/journey/new-icons/icon-4.png";
import millionSqftIcon from "../../assets/images/icons/journey/new-icons/icon-5.png";
import deliveryIcon from "../../assets/images/icons/journey/new-icons/icon-6.png";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Define the journey data
const journeyData = [
  { icon: expIcon, title: "Years Experience", value: "40+" },
  { icon: citiesIcon, title: "Cities", value: "20" },
  { icon: completeProjectsIcon, value: "9", title: "Completed Projects" },
  { icon: ongoingProjectsIcon, value: "4", title: "Ongoing Projects" },
  { icon: millionSqftIcon, title: "Million Square Feet", value: "2.3" },
  { icon: deliveryIcon, title: "On-time Delivery", value: "100%" },
];

const OurJourney = () => {
  const titleRef = useRef();
  const contentRef = useRef([]);
  const journeyRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [animationsInitialized, setAnimationsInitialized] = useState(false); // Track if animations have been initialized

  // Function to initialize animations
  const initializeAnimations = () => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    // List items animation
    contentRef.current.forEach((conRef) => {
      if (conRef) {
        gsap.from(conRef, {
          y: 10,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: conRef,
            start: "top 95%",
          },
        });
      }
    });

    // Counter animation with float numbers
    ScrollTrigger.create({
      trigger: journeyRef.current,
      start: "top 80%", // Start animation when section comes into view
      onEnter: () => {
        const items = document.querySelectorAll(".count");
        gsap.fromTo(
          items,
          { innerText: 0 },
          {
            innerText: (i) => journeyData[i].value,
            duration: 3,
            ease: "power1.in",
            snap: { innerText: 0.1 },
            stagger: 0.5,
            modifiers: {
              innerText: (value) => {
                // Check if the value contains a decimal point
                const numericValue = parseFloat(value);
                return numericValue % 1 !== 0
                  ? numericValue.toFixed(1) // Show 1 decimal place if it's a float
                  : numericValue.toString(); // Otherwise, keep the original value
              },
            },
          }
        );
      },
    });

    setAnimationsInitialized(true); // Mark animations as initialized
  };

  // Effect to initialize animations after images are loaded
  useEffect(() => {
    if (imagesLoaded === journeyData.length && !animationsInitialized) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, animationsInitialized]); // Add animationsInitialized to dependencies

  // Function to handle image loading
  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <section className="section journey_section pb-0">
      <Container>
        <SecTitle className="text-center color style2">
          <h4 ref={titleRef} className="title">
            <span>Our Infrastructure </span>
            Real Estate Journey
          </h4>
        </SecTitle>

        <ul ref={journeyRef} className="journey_content">
          <div className="plane">
            <img
              src={diamondIcon}
              alt="mvn plan icon"
              className="img-fluid diamond_icon"
            />
          </div>
          {journeyData?.map((item, index) => (
            <li
              className={"single " + (index % 2 !== 0 ? "right" : "")}
              key={index}
            >
              <div
                className="data"
                ref={(el) => (contentRef.current[index] = el)}
              >
                <div className="top">
                  <img
                    src={item.icon}
                    alt="mvn journey icon"
                    className="img-fluid icon"
                    onLoad={handleImageLoad}
                  />
                  <p className="count">
                    {parseFloat(item.value) % 1 !== 0
                      ? parseFloat(item.value).toFixed(1)
                      : item.value}
                  </p>
                </div>
                <p className="title">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

// Export the component as default
export default OurJourney;

import React, { useEffect, useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../../common/Button/Button';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnImage from "../../../common/animations/Image/Index";

import mvnMallImg from '../../assets/images/projects/mvn-mall.webp';
import mvnAerooneImg from '../../assets/images/projects/mvn-aeroone.webp';
import mvnAerooneBangaloreImg from '../../assets/images/projects/mvn-aeroone-bangalore.webp';
import mvnMallImgDesktop from '../../assets/images/projects/project-img-3.jpg';
import mvnAerooneImgDesktop from '../../assets/images/projects/project-img-2.jpg';
import mvnAerooneBangaloreImgDesktop from '../../assets/images/projects/project-img-1.jpg';
import arrowIcon from '../../assets/images/icons/arrow.png';
import btn_arrow from '../../assets/images/icons/btn_arrow.png';
import planeIcon from '../../assets/images/icons/plane.jpg';


import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    mobile: mvnMallImg,
    desktop: mvnMallImgDesktop,
    name: 'Mvn Mall',
    location: 'Gurgaon',
  },
  {
    mobile: mvnAerooneImg,
    desktop: mvnAerooneImgDesktop,
    name: 'Mvn Aeroone',
    location: 'Gurgaon',
  },
  {
    mobile: mvnAerooneBangaloreImg,
    desktop: mvnAerooneBangaloreImgDesktop,
    name: 'Mvn Aeroone',
    location: 'Bangalore',
  },
];

const Projects = () => {
  const imageDivRefs = useRef([]);
  const titleRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial state based on current screen size

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initializeAnimations = () => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        once: true,
      },
    });

    imageDivRefs.current.forEach((imagediv) => {
      if (imagediv) {
        gsap.to(imagediv, {
          scrollTrigger: {
            trigger: imagediv,
            start: "top 95%",
            once: true,
            onEnter: () => imagediv.classList.add('active'),
          },
          clearProps: 'all',
        });
      }
    });
  };

  useEffect(() => {
    if (imagesLoaded === projectsData.length) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (

    <>
    <section className="section projects_section pb-0">
      <img src={planeIcon} alt="mvn-plane-icon" className="img-fluid plane_icon" />

      <Container>
        <Row className="mx_-8">
          {projectsData?.map((item, index) => {
            if (index === 0) {
              return (
                <Col key={index} xs={6} className="px_8 left_col">
                  <h3 className="sec_title">Explore <span>Our Projects</span></h3>
                  <div className="single">
                    <AnImage ref={(el) => (imageDivRefs.current[index] = el)} height={100}>
                      <img
                        src={isMobile ? item.mobile : item.desktop}
                        alt={item.name}
                        className="img-fluid thumbnail"
                        onLoad={handleImageLoad}
                      />
                    </AnImage>
                    <div className="content">
                      <div className="left">
                        <h4 className="project_name">{item.name}</h4>
                        <p className="location">{item.location}</p>
                      </div>

                      <div className="right">
                        <Link to="#">
                          <img src={arrowIcon} alt="mvn-arrow-icon" className="img-fluid icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            }

            return null;
          })}

          <Col xs={6} className="px_8 right_col">
            {projectsData?.map((item, index) => {
              if (index > 0) {
                return (
                  <div key={index} className="single">
                    <AnImage ref={(el) => (imageDivRefs.current[index] = el)} height={100}>
                      <img
                        src={isMobile ? item.mobile : item.desktop}
                        alt={item.name}
                        className="img-fluid thumbnail"
                        onLoad={handleImageLoad}
                      />
                    </AnImage>
                    <div className="content">
                      <div className="left">
                        <h4 className="project_name">{item.name}</h4>
                        <p className="location">{item.location}</p>
                      </div>

                      <div className="right">
                        <Link to="#">
                          <img src={arrowIcon} alt="mvn-arrow-icon" className="img-fluid icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </Col>
        </Row>

        <Button className="btn_style1">
          <span className="txt">View All Projects</span>
          <img src={btn_arrow} alt="mvn button arrow icon" className="img-fluid" />
        </Button>
      </Container>
    </section>



      </>

  );
};

export default Projects;

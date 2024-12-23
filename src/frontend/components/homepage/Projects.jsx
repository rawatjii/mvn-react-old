import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../../common/Button/Button";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnImage from "../../../common/animations/Image/Index";

import mvnMallImg from "../../assets/images/projects/mvn-mall.webp";
import mvnAerooneImg from "../../assets/images/projects/mvn-aeroone.webp";
import mvnAerooneBangaloreImg from "../../assets/images/projects/mvn-bangalore-project.webp";
import mvnMallImgDesktop from "../../assets/images/projects/project-img-3.webp";
import mvnAerooneImgDesktop from "../../assets/images/projects/mvn-aeroone.webp";
import mvnAerooneBangaloreImgDesktop from "../../assets/images/projects/mvn-bangalore-project.webp";
import arrowIcon from "../../assets/images/icons/arrow.png";
import btn_arrow from "../../assets/images/icons/btn_arrow.png";
// import planeIcon from "../../assets/images/icons/plane.jpg";
import planeIcon from "../../assets/images/icons/heading-icon-img.png";
import NewLaunchIcon from "../../assets/images/icons/new-launch-patch.png"


import * as CONFIG from '../../../config/config'

import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    mobile: mvnAerooneImg,
    desktop: mvnAerooneImgDesktop,
    name: "MVN AEROONE RESIDENCES",
    location: "Gurugram",
    otherPage: false,
    link: "aeroone-gurgaon"
  },
  {
    mobile: mvnMallImg,
    desktop: mvnMallImgDesktop,
    name: "Mvn Mall",
    location: "Gurugram",
    otherPage: true,
    link: 'https://mvnmall.com/'
  },
  {
    mobile: mvnAerooneBangaloreImg,
    desktop: mvnAerooneBangaloreImgDesktop,
    name: "Mvn AERO ONE",
    location: "Bangalore",
    otherPage: true,
    link: 'https://www.mvnaeroone.com/'
  },
];

const Projects = () => {

  const imageDivRefs = useRef([]);
  const titleRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Set initial state based on current screen size

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
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
            onEnter: () => {
              imagediv.classList.add("active")
              // console.log(imagediv.classList);
            },
          },
          clearProps: "all",
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

  const leftColProjects = isDesktop
    ? [projectsData[0], projectsData[1]]
    : [projectsData[0], projectsData[1]];
  const rightColProjects = isDesktop
    ? [projectsData[2]]
    : [projectsData[2]]



  // const leftColProjects = isDesktop
  //   ? [projectsData[0], projectsData[2]] // "Mvn Mall" and "Mvn"
  //   : [projectsData[0]]; // Desktop: "Mvn Mall" only
  // const rightColProjects = isDesktop
  //   ? [projectsData[1]] // "Mvn Aeroone Residency"
  //   : projectsData.slice(1); // Desktop: Rest of the projects


  return (
    <>
      <section className="section projects_section_new pb-0">


        <Container>
          <Row className="mx_-8">


            <div className="col-md-12 col-12 heading_div">
              <img
                src={planeIcon}
                alt="mvn-plane-icon"
                className="img-fluid plane_icon"
              />
              <h4 className="sec_title title text-uppercase">Explore Our Projects</h4>
              <article className="desc">MVN Infrastructure introduces MVN Aero one Residencies, the largest ultra-luxury apartments in Delhi NCR, located at the 22-kilometer stone on Dwarka Expressway.</article>
            </div>

            <div className="project_div d-flex flex-wrap">
              <div className="box_with_overlay col-md-4">
                <div className="box_with_overlay_in">
                  <img
                    src={CONFIG.IMAGE_URL + "gurgaon-project-map.jpg"}
                    alt="bg img"
                    className="img-fluid img_bg d-lg-block d-none"
                  />
                  <img
                    src={CONFIG.IMAGE_URL + "gurgaon-project-map-sm.jpg"}
                    alt="bg img"
                    className="img-fluid img_bg d-lg-none d-block"
                  />
                  <div className="abs_div">
                    <div className="content_div">
                      <span className="title text-uppercase">MVN</span>
                      <p className="text-uppercase pro_name">Aero World</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects_flex_row d-flex flex-wrap col-md-8 col-12">
                {leftColProjects.map((item, index) => (
                  <div className="project_box col-md-6 col-12">
                    <div className="project_box_in" key={index}>
                      <AnImage
                        ref={(el) => (imageDivRefs.current[index] = el)}
                        className="pro_img"
                        height={100}
                      >   
                        <span className="new-launch-patch">
                          New Launch
                        </span>
                        {/* <img src={NewLaunchIcon} alt="" className="img-fluid new-launch-patch" /> */}
                        <Link to={item.otherPage ? item.link : import.meta.env.VITE_APP_URL + item.link}>
                          <img
                            src={isDesktop ? item.mobile : item.desktop}
                            alt={item.name}
                            className="img-fluid thumbnail"
                            onLoad={handleImageLoad}
                          />
                        </Link>
                      </AnImage>
                      <div className="text d-flex">
                        <span className="pro_name text-uppercase">{item.name}</span>
                        <Link className="pro_link text-capitalize" to={item.link}>
                          view detail
                          <img
                            src={arrowIcon}
                            alt="mvn-arrow-icon"
                            className="img-fluid icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project_div d-flex flex-wrap">
              <div className="box_with_overlay col-md-4">
                <div className="box_with_overlay_in">
                  <img
                    src={CONFIG.IMAGE_URL + "bangalore-project-map.jpg"}
                    alt="bg img"
                    className="img-fluid img_bg d-lg-block d-none"
                  />
                  <img
                    src={CONFIG.IMAGE_URL + "bangalore-project-map-sm.jpg"}
                    alt="bg img"
                    className="img-fluid img_bg d-lg-none d-block"
                  />
                  <div className="abs_div">
                    <div className="content_div">
                      <span className="title text-uppercase">MVN</span>
                      <p className="text-uppercase pro_name">Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects_flex_row d-flex flex-wrap col-md-8 col-12">
                {rightColProjects.map((item, index) => (
                  <div className="project_box col-12">
                    <div className="project_box_in" key={index}>
                      <AnImage
                        ref={(el) => (imageDivRefs.current[index] = el)}
                        className="pro_img"
                        height={100}
                      >
                        {/* <img src={NewLaunchIcon} alt="" className="img-fluid new-launch-patch" /> */}
                        <Link to={item.otherPage ? item.link : import.meta.env.VITE_APP_URL + item.link}>
                          <img
                            src={isDesktop ? item.mobile : item.desktop}
                            alt={item.name}
                            className="img-fluid thumbnail"
                            onLoad={handleImageLoad}
                          />
                        </Link>
                      </AnImage>
                      <div className="text d-flex">
                        <span className="pro_name text-uppercase">{item.name}</span>
                        <Link className="pro_link text-capitalize" to={item.link}>
                          view detail
                          <img
                            src={arrowIcon}
                            alt="mvn-arrow-icon"
                            className="img-fluid icon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Column */}
            {/* <Col xs={6} className="px_8 left_col">
         
              <h3 className="sec_title">
                Explore <span>Our Projects</span>
              </h3>
              {leftColProjects.map((item, index) => (
                <div key={index} className="single">
                  
                  <AnImage
                    ref={(el) => (imageDivRefs.current[index] = el)}
                    height={100}
                  >   <img src={NewLaunchIcon} alt="" className="img-fluid new-launch-patch"/>
                    <Link to={item.otherPage ? item.link : import.meta.env.VITE_APP_URL + item.link}>

                      <img
                        src={isDesktop ? item.mobile : item.desktop}
                        alt={item.name}
                        className="img-fluid thumbnail"
                        onLoad={handleImageLoad}
                      />
                    </Link>
                  </AnImage>
                  <div className="content">
                    <div className="left">
                      <h4 className="project_name">{item.name}</h4>
                      <p className="location">{item.location}</p>
                    </div>

                    <div className="right">
                      <Link to={item.link}>
                        <img
                          src={arrowIcon}
                          alt="mvn-arrow-icon"
                          className="img-fluid icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Col> */}

            {/* Right Column */}
            {/* <Col xs={6} className="px_8 right_col">

              {rightColProjects.map((item, index) => (
                <div key={index} className="single">
                        <img src={NewLaunchIcon} alt="" className="img-fluid new-launch-patch"/>
                  <AnImage
                    ref={(el) =>
                      (imageDivRefs.current[leftColProjects.length + index] = el)
                    }
                    height={100}
                  >
                    <Link to={item.link} target="_blank">
                      <img
                        src={isDesktop ? item.mobile : item.desktop}
                        alt={item.name}
                        className="img-fluid thumbnail"
                        onLoad={handleImageLoad}
                      />
                    </Link>
                  </AnImage>
                  <div className="content">
                    <div className="left">
                      <h4 className="project_name">{item.name}</h4>
                      <p className="location">{item.location}</p>
                    </div>

                    <div className="right">
                      <Link to={item.link} target="_blank">
                        <img
                          src={arrowIcon}
                          alt="mvn-arrow-icon"
                          className="img-fluid icon"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;

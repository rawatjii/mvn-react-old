import React, { useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../../common/Button/Button'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnImage from "../../../common/animations/Image/Index";

import 'bootstrap/dist/css/bootstrap.min.css';

import mvnMallImg from '../../assets/images/projects/mvn-mall.webp';
import mvnAerooneImg from '../../assets/images/projects/mvn-aeroone.webp';
import mvnAerooneBangaloreImg from '../../assets/images/projects/mvn-aeroone-bangalore.webp';
import arrowIcon from '../../assets/images/icons/arrow.png'
import btn_arrow from '../../assets/images/icons/btn_arrow.png'
import planeIcon from '../../assets/images/icons/plane.jpg'

import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";


gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    feature_image:mvnMallImg,
    name:'Mvn Mall',
    location:'Gurgaon',
  },
  {
    feature_image:mvnAerooneImg,
    name:'Mvn Aeroone',
    location:'Gurgaon',
  },
  {
    feature_image:mvnAerooneBangaloreImg,
    name:'Mvn Aeroone',
    location:'Bangalore',
  }
]

const Projects = () => {
  const imageDivRefs = useRef([]);
  const titleRef = useRef();

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      if(projectsData.length > 0){
        gsap.from(titleRef.current, {
          y: 50,  
          opacity: 0,
          duration: 1, 
    
          scrollTrigger:{
            trigger: titleRef.current,
            start: "top 95%",
            once: true,
          }
        })
    
        imageDivRefs.current.forEach((imagediv, index) => {
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
        })
      }
    }, imageDivRefs)

    return ()=>ctx.revert();
  }, [projectsData]);

  return (
    <section className="section projects_section pb-0">
      <img src={planeIcon} alt="mvn-plane-icon" className="img-fluid plane_icon" />

      <Container>
        <Row className="mx_-8">
          {projectsData?.map((item, index)=>{
            if(index == 0){
              return (
                <Col key={index} xs={6} className="px_8 left_col">
                  <h3 className="sec_title">Explore <span>Our Projects</span></h3>
                  <div className="single">
                  <AnImage key={index} ref={(el) => (imageDivRefs.current[index] = el)} height={100} >
                      <img src={item.feature_image} alt={item.name} className="img-fluid thumbnail" />
                    </AnImage>
                    <div className="content">
                      <div className="left">
                        <h4 className="project_name">{item.name}</h4>
                        <p className="location">{item.location}</p>
                      </div>

                      <div className="right">
                        <Link to='#' >
                          <img src={arrowIcon} alt="mvn-arrow-icon" className="img-fluid icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            }

            return null;
          })}

            <Col xs={6} className="px_8 right_col">
              {projectsData?.map((item, index)=>{
                if(index > 0){
                  return (
                    <div key={index} className="single">
                      <AnImage ref={(el) => (imageDivRefs.current[index] = el)} height={100} >
                        <img src={item.feature_image} alt={item.name} className="img-fluid thumbnail" />
                      </AnImage>
                      <div className="content">
                        <div className="left">
                          <h4 className="project_name">{item.name}</h4>
                          <p className="location">{item.location}</p>
                        </div>

                        <div className="right">
                          <Link to='#' >
                            <img src={arrowIcon} alt="mvn-arrow-icon" className="img-fluid icon" />
                          </Link>
                        </div>
                      </div>
                      
                    </div>
                  )
                }

                return null;
                
              })}
              
            </Col>

          
        </Row>

        <Button className="btn_style1">
          <span className="txt">View All Projects</span>
          <img src={btn_arrow} alt="mvn button arrow icon" className="img-fluid"  />
        </Button>
      </Container>
    </section>
  );
};

export default Projects;

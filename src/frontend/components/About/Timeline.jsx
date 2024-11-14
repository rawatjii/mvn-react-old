import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import mvnSchoolSec17 from '../../assets/images/timeline/mvnschool-sector-17.webp';
import mvnSchoolAravali from '../../assets/images/timeline/mvnschool-aravalihills.webp';
import athenFaridabad from '../../assets/images/timeline/athens-faridabad-2008.webp';
import gopalInstitute from '../../assets/images/timeline/gopalsharma-institute-of-engineering-and-technology-palwal.webp';
import mvnSchoolPalwal from '../../assets/images/timeline/mvn-school-palwal.webp';
import mvnSchoolKhambi from '../../assets/images/timeline/mvn-school-khambi.webp';
import mvnUniversityPalwal from '../../assets/images/timeline/mvn-university-palwal.webp';
import planeIcon from '../../assets/images/icons/plane2.webp';

import timelineBg from '../../assets/images/timeline/bg.webp'
import LazyLoad from "react-lazyload";

const data = [
  {
    img: mvnSchoolSec17,
    year: '1983',
    title: 'MVN School',
    location: 'Sector-17, Faridabad'
  },
  {
    img: mvnSchoolAravali,
    year: '2000',
    title: 'MVN School',
    location: 'Aravali Hills, Faridabad'
  },
  {
    img: athenFaridabad,
    year: '2008',
    title: 'Luxury Apartments | Project by Gopal Global Developers Pvt Ltd',
    location: 'MVN Athens, Faridabad'
  },
  {
    img: gopalInstitute,
    year: '2008',
    title: 'Gopal Sharma Institute of Engineering and Technology | Co.Edu',
    location: 'Palwal, Haryana'
  },
  {
    img: mvnSchoolPalwal,
    year: '2009',
    title: 'MVN School',
    location: 'Haryana'
  },
  {
    img: mvnSchoolKhambi,
    year: '2009',
    title: 'Gopal Sharma Modern Vidya Niketan School ',
    location: 'Khambi'
  },
  {
    img: mvnUniversityPalwal,
    year: '2012',
    title: 'MVN University ',
    location: 'Haryana State '
  }
];

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const titleRef = useRef();
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);
  const planeRef = useRef();
  const timelineRef = useRef();

  const [imagesLoaded, setImagesLoaded] = useState(0);

  const initializeAnimations = () => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      },
    });

    // Content animations
    contentRefs.current.forEach((contentRef) => {
      if (contentRef) {
        gsap.from(contentRef, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef,
            start: "top 90%",
          },
        });
      }
    });

    // Image animations
    imageRefs.current.forEach((imageRef) => {
      if (imageRef) {
        gsap.from(imageRef, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef,
            start: "top 90%",
          },
        });
      }
    });

    let isClassAdded = false;

    // Plane animation
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top 50%",
      onEnter: () => {
        if (planeRef.current && !isClassAdded) {
          planeRef.current.classList.add("rotated");
          isClassAdded = true;
        }
      },
      onUpdate: (self) => {
        if (planeRef.current) {
          if (self.direction === -1 && isClassAdded) {
            planeRef.current.classList.remove("rotated");
            isClassAdded = false;
          }
          if (self.direction === 1 && !isClassAdded) {
            planeRef.current.classList.add("rotated");
            isClassAdded = true;
          }
        }
      },
      onLeave: () => {
        if (planeRef.current) {
          planeRef.current.classList.remove("rotated");
          isClassAdded = false;
        }
      },
    });

    // Pin the plane at the center and release at the end
    gsap.to(planeRef.current, {
      yPercent: -50,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 50%",
        end: "bottom 55%",
        pin: planeRef.current,
        pinSpacing: false,
        scrub: true,
      },
    });
  };

  useEffect(() => {
    if (imagesLoaded === data.length) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <section className="section timeline_section pb-0">
      <LazyLoad className="timeline_bg">
        <img src={timelineBg} alt="mvn-timeline-bg" className="img-fluid bg" />
      </LazyLoad>

      <Container>
        <SecTitle className="text-center color style1 mb_30">
          <h4 ref={titleRef} className="title">Our Timeline</h4>
        </SecTitle>

        <ul ref={timelineRef} className="timeline_content">
          <div ref={planeRef} className="plane">
            <img src={planeIcon} alt="mvn plan icon" className="img-fluid plan_icon" />
          </div>

          {data.map((item, index) => (
            <li key={index} className={`single ${index % 2 !== 0 ? 'right' : ''}`}>
              <div ref={(el) => (imageRefs.current[index] = el)} className="thumbnail">
                <img
                  src={item.img}
                  alt="mvn-timeline-image"
                  className="img-fluid"
                  onLoad={handleImageLoad}
                />
              </div>
              <div ref={(el) => (contentRefs.current[index] = el)} className="content">
                <p className="year">{item.year}</p>
                <p className="title">{item.title}</p>
                <p className="location">{item.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Timeline;

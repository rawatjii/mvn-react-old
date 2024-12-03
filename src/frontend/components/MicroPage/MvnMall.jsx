import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SecTitle from "../../../common/SecTitle/Index";
import mvnMallImg from "../../assets/images/mvn_mall.webp";
import mvnMallBannerImg1 from "../../assets/images/mall-banner-1.webp"
import mvnMallBannerImg2 from "../../assets/images/mall-banner-2.webp"

gsap.registerPlugin(ScrollTrigger);

const MvnMall = () => {
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      gsap.to(image, {
        x: "-50%", // Moves the image 50% to the left
        ease: "none",
        scrollTrigger: {
          trigger: ".mvn_mall_section",
          start: "top 100px",
          pin: true,
          scrub: 1,
          end: "+=1000", // Adjust this value based on desired scroll distance
          onLeave: () => {
            document.querySelector(".navbar").classList.add("fill");
          },
          onEnterBack: () => {
            document.querySelector(".navbar").classList.remove("fill");
          },
        },
      });
    }
  }, []);

  return (
    <>
      <section className="mvn_mall_section">
        {isMobile ? (
          <>
            <Container>
              <SecTitle className="text-center color style1">
                <h4 className="title">MVN Mall</h4>
              </SecTitle>
            </Container>  
            <div className="image_animation">
              <img
                ref={imageRef}
                src={mvnMallImg}
                alt="mvn_mall_an"
                className="img-fluid"
              />
            </div>
          </>
        ) : (
          <Container>
            <SecTitle className="text-center color style1">
              <h4 className="title">MVN Mall</h4>
              <p>Experience a pollution-free haven at MVN's iconic masterpiece, where every breath you take is purified by advanced air filtration systems. Nestled above MVN mall, everything you need—from gourmet dining to designer boutiques and private cinemas—is just an elevator ride away. This is a sanctuary where luxury and convenience come together, offering you everything at your doorstep, so you never need to leave.</p>
            </SecTitle>

              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <img src={mvnMallBannerImg1} alt="" className="img-fluid"/>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                <img src={mvnMallBannerImg2} alt="" className="img-fluid"/>
                </div>
              </div>
          </Container>
        )}

        
      </section>
    </>
  );
};

export default MvnMall;

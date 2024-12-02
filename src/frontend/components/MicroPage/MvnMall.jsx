import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SecTitle from "../../../common/SecTitle/Index";
import mvnMallImg from "../../assets/images/mvn_mall.webp";

gsap.registerPlugin(ScrollTrigger);

const MvnMall = () => {
  const imageRef = useRef(null);

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
      </section>
    </>
  );
};

export default MvnMall;

import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Accordion from "react-bootstrap/Accordion";

// Import Swiper styles
import "swiper/css";
import "yet-another-react-lightbox/styles.css";

import floorPlanImg from "../../assets/images/floor-plan/floor-plan.png";
import CustomModal from "../../../common/Modal";

gsap.registerPlugin(ScrollTrigger);

const MicroFloorPlan = ({ data }) => {
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);
  const [isMasterPlanOpen, setIsMasterPlanOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const { floorPlanData, title } = data;

  const showModal = () => {
    setIsShowModal(true);
  };

  const isHideModal = () => {
    setIsShowModal(false);
  };

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // for animation
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    typoRefs.current.forEach((singleRef) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%",
          },
        });
      }
    });

    priceRefs.current.forEach((singleRef) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%",
          },
        });
      }
    });

    sizeRefs.current.forEach((singleRef) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 10,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%",
          },
        });
      }
    });
  }, []);

  return (
    <section className="section floor_plan_section">
      <SecTitle className="text-center color style1">
        <h4 ref={titleRef} className="title">
          {title}
        </h4>
      </SecTitle>
      <Container>
        {isDesktop ? (
          <div className="floor_plan_data">
            {floorPlanData.map((item, index) => (
              <div key={index} className="accordion-item open">
                <h2 className="accordion-header">{item.title}</h2>
                <div className="accordion-body">
                  <Swiper pagination={true} className="mySwiper">
                    {item.thumbnail.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image.src} alt="" onClick={showModal} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Accordion defaultActiveKey={0} className="floor_plan_data">
            {floorPlanData.map((item, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <Swiper pagination={true} className="mySwiper">
                    {item.thumbnail.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image.src} alt="" onClick={showModal} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Container>

      <CustomModal show={isShowModal} hide={isHideModal} />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={floorPlanData.thumbnail}
        plugins={[Zoom]}
        carousel={{
          finite: floorPlanData.length <= 1,
        }}
        render={{
          buttonNext: floorPlanData.length > 1 ? undefined : () => null,
          buttonPrev: floorPlanData.length > 1 ? undefined : () => null,
          slide: floorPlanData.length > 1 ? undefined : () => null,
        }}
      />
    </section>
  );
};

export default MicroFloorPlan;

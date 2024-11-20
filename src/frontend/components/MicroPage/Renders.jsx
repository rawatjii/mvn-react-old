import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { Swiper, SwiperSlide } from 'swiper/react';

import * as CONFIG from '../../../config/config'

import "yet-another-react-lightbox/styles.css";

const Renders = ({data})=>{
  const [isRendersShow, setIsRendersShow] = useState(false);
  const [index, setIndex] = useState(-1);

  const renders = data.renders;

  return(
    <section className="section render_section">
      <Container>
        <SecTitle className="text-center color style1">
          <h4  className="title">Renders</h4>
        </SecTitle>

        {/* <Row>
          {renders.map((render, index)=>(
            <Col as={Col} xs={12}>
              <div className="single"  onClick={()=>setIndex(index)}>
                <img src={render.mobile_thumb} alt="mvn-render-image" className="img-fluid" />
              </div>
            </Col>
          ))}
        </Row> */}

        <div className="content">
          {/* <div className="preview">
              <img src={CONFIG.IMAGE_URL + 'renders/1_mobile.webp'} alt="mvn-render-preview-image" className="img-fluid" />
          </div> */}

          <Swiper
            ref={contentRef}
            spaceBetween={30}
            slidesPerView={1}
            className="testimonial_carousel"
            pagination={{ clickable: true }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 3, // 3 items for desktop
                spaceBetween: 50,
              },
              0: {
                slidesPerView: 1, // 1 item for mobile
                spaceBetween: 20,
              },
            }}
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="single">
                  <div className="content">
                    <img src={quoteIcon} alt="mvn quotes icon" className="img-fluid quote_icon" />
                    <h4 className="title">{item.title}</h4>
                    <p className="msg">{item.msg}</p>
                    <p className="testimonial-name">{item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </Container>

      <Lightbox 
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={renders}
        plugins={[Zoom]}
        carousel={{
          finite: renders.length <= 1,  // Prevent looping if there’s only one image
        }}
        render={{
        buttonNext: renders.length > 1 ? undefined : () => null,
        buttonPrev: renders.length > 1 ? undefined : () => null,
        slide: renders.length > 1 ? undefined : () => null, 
      }} />
    </section>
  )
}

export default Renders;
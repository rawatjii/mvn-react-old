import React from "react";
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazyload';
// import hero_img from '../../../frontend/assets/images/micro_hero/hero_img.webp'

const MicroHero = ({ data }) => {
  console.log(data.bannerHighLight);


  return (
    <>
      <section className="section micro_hero_section p-0">
        {
          data.micro_hero_section && Array.isArray(data.micro_hero_section) && data.micro_hero_section.map((imgs, index) => (
            <div key={index} className="hero-img">
              <img src={imgs.imgDesk} alt={`mvn-hero-image-${index}`} className="img-fluid d_lg_block" fetchPriority="high" />
              <img src={imgs.imgMb} alt={`mvn-hero-image-sm-${index}`} className="img-fluid d_sm_block" fetchPriority="high" />
            </div>
          ))
        }
        {
          data.bannerHighLight &&  <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div>
        }

        {/* <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div> */}

      </section>
    </>
  )
}

export default MicroHero;
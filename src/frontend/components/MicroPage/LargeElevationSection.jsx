import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
// import LazyLoad from 'react-lazyload'
import bgImgMB from '../../assets/images/aero-gurgaon/largeBg1Sm.jpg'
import bgImgDesk from '../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../assets/images/aero-gurgaon/largeAbs1.png'
import absMob from '../../assets/images/aero-gurgaon/largeAbs1Sm.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCard from '../../components/Card'

gsap.registerPlugin(ScrollTrigger);


export default function LargeElevation({ data }) {

    const sectionRef = React.useRef(null);
    const desktopRef = React.useRef();

    // console.log(data.images);


    useEffect(() => {
        // gsap.to(".bottom_img_div", {
        //     // y: -80,
        //     scrollTrigger: {
        //         trigger: ".large-elevation",
        //         start: "top bottom",
        //         end: "bottom top",
        //         scrub: true,
        //     },
        // });
        gsap.to(".abs_img_m", {
            y: 222,
            scrollTrigger: {
                trigger: ".large-elevation",
                start: "top 80%",
                end: "top top",
                scrub: 0.2,
            },
        });
        gsap.to(".abs_img1", {
            y: 400,
            scrollTrigger: {
                trigger: desktopRef.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
                markers:false
            },
        });

         // Ensure triggers refresh
            ScrollTrigger.addEventListener("refresh", () => console.log("Triggers refreshed"));
            ScrollTrigger.refresh();
    }, []);
    return (
        <div className='large-elevation' ref={sectionRef}>
            <Container>
                <div className='container_elevation'>
                    <div className='top_div'>
                        <h3 className='title text-uppercase'>{data.title}</h3>
                    </div>
                </div>
            </Container>

            {/* mb view */}
            <div className='bottom_img_div d_sm_block'>
                <div className='full_img'>
                    <img src={bgImgMB} alt={data.title} className="img-fluid img_in" />
                </div>
                <div className='abs_img abs_img_m'>
                    <img src={absMob} alt={data.title} className="img-fluid abs_img_in" />
                </div>
            </div>


            {/* desk view */}
            <div className='bottom_img_div d_lg_block' ref={desktopRef}>
                <div className='full_img'>
                    <img src={bgImgDesk} alt={data.title} className="img-fluid img_in d_lg_block" />
                </div>
                <div className='abs_img abs_img1'>
                    <img src={absDesk} alt={data.title} className="img-fluid abs_img_in d_lg_block" />
                </div>
            </div>
           
            <Container >
                <div className='about'>
                    <CustomCard extra="THIS ARCHITECTURAL MASTERPIECE SEAMLESSLY BLENDS CUTTING-EDGE DESIGN WITH NEW-AGE SOPHISTICATION. EVERY CURVE, EVERY DETAIL, IS METICULOUSLY CRAFTED TO ELEVATE YOUR LIVING EXPERIENCE. EMBRACE A  RESIDENCE WHERE INNOVATION MEETS BEAUTY, CREATING A LANDMARK OF LUXURIOUS URBAN LIVING. YOUR NEW HOME AWAITS."  />
                </div>

            </Container>

            
        </div>
    )
}

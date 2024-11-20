import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
// import LazyLoad from 'react-lazyload'
import bgImgMB from '../../assets/images/aero-gurgaon/largeBg1Sm.jpg'
import bgImgDesk from '../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../assets/images/aero-gurgaon/largeAbs1.png'
import absMob from '../../assets/images/aero-gurgaon/largeAbs1Sm.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function LargeElevation({ data }) {

    const sectionRef = React.useRef(null);

    useEffect(() => {

        // ScrollTrigger.create({
        //     trigger: sectionRef.current,
        //     start: 'top top',
        //     end: () => '+=' + sectionRef.current.offsetHeight,
        //     pin: true,
        //     scrub: 0.5,
        // });

        gsap.to(".bottom_img_div", {
            y: -80,
            scrollTrigger: {
                trigger: ".large-elevation",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(".abs_img", {
            // y: -80,
            width: "70%",
            scrollTrigger: {
                trigger: ".large-elevation",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);
    return (
        <div className='large-elevation' ref={sectionRef}>
            <Container fluid className='container_elevation'>
                <div className='top_div'>
                    <h3 className='title text-uppercase'>{data.title}</h3>
                </div>
                {/* mb view */}
                <div className='bottom_img_div d_sm_block'>
                    {/* <LazyLoad> */}
                    <div className='full_img'>
                        <img src={bgImgMB} alt={data.title} className="img-fluid img_in" />
                    </div>
                    <div className='abs_img'>
                        <img src={absMob} alt={data.title} className="img-fluid abs_img_in" />
                    </div>
                    {/* </LazyLoad> */}
                </div>
                {/* desk view */}
                <div className='bottom_img_div d_lg_block'>
                    <div className='full_img'>
                        <img src={bgImgDesk} alt={data.title} className="img-fluid img_in d_lg_block" />
                    </div>
                    <div className='abs_img'>
                        <img src={absDesk} alt={data.title} className="img-fluid abs_img_in d_lg_block" />
                    </div>
                </div>

            </Container>
        </div>
    )
}

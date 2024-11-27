import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Accordion from 'react-bootstrap/Accordion';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testing = ()=>{

  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = gsap.utils.toArray(wrapper.querySelectorAll(".item"));

    const tl = gsap.timeline({
      defaults: { ease: "none", duration: 1 },
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=600%",
        pin: true,
        scrub: true,
        markers: true
      }
    });

    tl.to({}, { duration: 0.15 }); // Small delay at the start

    items.forEach((item) => {
      const body = item.querySelector(".body");
      const hasChild = body.dataset.haschild;

      // Expand body
      tl.to(
        body,
        {
          height: "auto"
        },
        "+=0.5"
      );

      // Handle horizontal scroll if body has child
      if (hasChild) {
        const cardsContainer = body.querySelector(".cards-container");
        tl.to(
          cardsContainer,
          {
            x: cardsContainer.clientWidth - cardsContainer.scrollWidth,
            duration: 4
          },
          "+=0.35"
        );
      }

      // Collapse body
      tl.to(
        body,
        {
          height: 0
        },
        "+=0.5"
      );
    });

    tl.to({}, { duration: 0.25 }); // Small delay at the end
  }, []);


  return (
    <div className="test_wrapper wrapper center" ref={wrapperRef}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Item One</Accordion.Header>
          <Accordion.Body>
            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                cupiditate minus quisquam eligendi sed veritatis aut
                perspiciatis delectus quo. Sapiente aspernatur nisi optio
                doloremque beatae odit error, alias quam! Veritatis.
              </p>
              <p>
                Corporis ad ducimus quo consequatur ex in placeat, omnis vero,
                laborum nemo velit autem perspiciatis non voluptatem vitae
                exercitationem, saepe consectetur est quia odit quod dolor
                aspernatur explicabo! Ad, quibusdam?
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Item Two</Accordion.Header>
          <Accordion.Body  data-haschild="true">
            <div className="content">
              <div className="horizontal center">
                <div className="cards-container">
                  <div className="card center gradient-green">Card 1</div>
                  <div className="card center gradient-blue">Card 2</div>
                  <div className="card center gradient-purple">Card 3</div>
                  <div className="card center gradient-orange">Card 4</div>
                  <div className="card center gradient-green-2">Card 5</div>
                  <div className="card center gradient-blue-2">Card 6</div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default Testing;
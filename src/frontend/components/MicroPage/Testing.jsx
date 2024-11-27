import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testing = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const items = gsap.utils.toArray(wrapper.querySelectorAll(".accordion-item"));

    const tl = gsap.timeline({
      defaults: { ease: "none", duration: 1 },
      scrollTrigger: {
        trigger: wrapper,
        start: "top 20%",
        end: "+=600%",
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    tl.to({}, { duration: 0.15 }); // Small delay at the start

    items.forEach((item) => {
      const body = item.querySelector(".accordion-body");
      const hasChild = body.dataset.haschild;

      // Expand the accordion body
      tl.to(
        body,
        {
          height: 400, // Fixed height
          onStart: () => item.classList.add("active"),
          onReverseComplete: () => item.classList.remove("active"),
        },
        "+=0.5"
      );

      // Scroll cards vertically if the body has child elements
      if (hasChild) {
        const cardsContainer = body.querySelector(".cards-container");
        const scrollHeight = cardsContainer.scrollHeight;
        const containerHeight = 400; // Fixed accordion content height

        // Animate the cards vertically
        tl.to(
          cardsContainer,
          {
            y: -(scrollHeight - containerHeight), // Scroll to bring the last card into view
            duration: 4, // Adjust the duration as needed
          },
          "+=0.2"
        );
      }

      // Collapse the accordion body
      tl.to(
        body,
        {
          height: 0,
          onComplete: () => item.classList.remove("active"),
        },
        "-=0.3"
      );
    });

    tl.to({}, { duration: 0.25 }); // Small delay at the end

    // Cleanup GSAP instances when the component unmounts
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="test_wrapper wrapper center" ref={wrapperRef}>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header">
            <h3>Item One</h3>
          </div>
          <div className="accordion-body">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                cupiditate minus quisquam eligendi sed veritatis aut.
              </p>
              <p>
                Corporis ad ducimus quo consequatur ex in placeat, omnis vero,
                laborum nemo velit autem perspiciatis.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header">
            <h3>Item Two</h3>
          </div>
          <div className="accordion-body" data-haschild="true">
            <div className="content">
              <div className="vertical center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;

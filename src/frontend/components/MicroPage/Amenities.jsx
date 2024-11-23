import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

// Array of amenity data
const amenities = [
  { name: 'Gym', imgSrc: 'gymSm.webp' },
  { name: 'Library', imgSrc: 'librarySm.webp' },
  { name: 'Business Center', imgSrc: 'businessSm.webp' },
  { name: `Kid's Play Area`, imgSrc: 'kidsSm.webp' },
  { name: `theater`, imgSrc: 'theaterSm.webp' },
  { name: `Business Centre`, imgSrc: 'theaterSm.webp' },
  { name: 'spa', imgSrc: 'spa.webp' },
  { name: 'club house', imgSrc: 'clubhouse.webp' },
  // { name: 'Swimming Pool', imgSrc: 'spa' },  
];

export default function Amenities() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
    const triggers = [];

    sectionsRef.current.forEach((section, i) => {
      const bg = section.querySelector('.bg');
      if (bg) {
        bg.style.backgroundImage = `url(${CONFIG.IMAGE_URL}amenities/${amenities[i].imgSrc})`;
        
        const defaultBgPos = i === 0 ? '50% 0' : `50% ${-window.innerHeight * getRatio(section)}px`;

        const trigger = gsap.fromTo(
          bg,
          { backgroundPosition: defaultBgPos },
          {
            backgroundPosition: `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: i === 0 ? 'top top' : 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
        triggers.push(trigger.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="main_am">
      <div className="sec_title text-center color style1">
        <h4 className="title">Amenities</h4>
      </div>
      {amenities.map((amenity, i) => (
        <section
          key={i}
          className="parallax"
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          <div className="bg"></div>
          <span className='am-name'>{amenity.name}</span>
        </section>
      ))}
    </div>
  );
}

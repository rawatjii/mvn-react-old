import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro_hero/hero_img.webp";

import "./aeroGuragaon.css";
import MicroPageGurgaon1 from "../../MicroPageGurgaon1";

const data = {
  micro_hero_section:
  {
    isVdo: true,
    images: false,
    bannerHighLight: false,
    enquiryBTN: false,
    client:true,
  },
  overview: {
    title: "MVN Aero One",
    location: "Gurugram",
    extra: "ASCEND TO UNRIVALED HEIGHTS OF PURE SOPHISTICATION",
    // desc: "Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.",
    desc: [
      'Luxury Reimagined. Elegance Reborn.',
      'Step into a world of unparalleled luxury, where every detail blends sophistication with style. Relish in tailored interiors, exceptional amenities, and panoramic views. Transform your lifestyle with an extraordinary living experience beyond compare.',
    ],
  },
  LargeElevationSection: {
    title: "an epitome of contemporary elegance",
    isAllow: true,
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    desc:'Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings.',
    isVdo: true,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: true,
  },
  living_room_video:{
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Experience the elegance of a sliding door that seamlessly connects your living space to the outdoors, transforming the ambiance with every glide.",
    isVdo: true,
  },
  video3: {
    title: "ELEVATED LIVING",
    desc: "Turn your living room into the ultimate celebration hub, where lively gatherings and stylish stories come alive, creating lasting memories and joyful moments. ",
    isVdo: true,
  },
  masterBedroom: {
    title: "MASTER BEDROOM",
    desc: "Retreat to a master bedroom that redefines comfort and luxury. Designed for relaxation and rest, it’s a sanctuary of style, where every element exudes tranquility and elegance.",
    isVdo: true,
  },
  highlights: [
    "Power backup for common facilities.",
    "Italian/Imported Marble flooring.",
    "Television points in living room and bedrooms.",
    "Telephone points in living room and master bedroom.",
    "Split AC provision in living room and bedrooms.",
    "Premium emulsion paint finish.",
  ],
  walkthrough: {
    isshow: false,
    desc: "IF YOU THINK YOU'VE EXPERIENCED TRUE LUXURY IT'S TIME TO RAISE YOUR EXPECTATION",
    masterBedroom: {
      title: "MASTER BEDROOM",
      desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
      isVdo: false,
    },
  },
  // LargeElevationSection: {
  //   title: "an epitome of contemporary elegance",
  //   isAllow: true,
  // },
  // renders: [
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/1_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/1_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/2_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/2_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/3_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/3_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/4_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/4_mobile.webp',
  //   },
  //   {
  //     src: CONFIG.IMAGE_URL + 'renders/5_desktop.webp',
  //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/5_mobile.webp',
  //   }
  // ],
  renders: [
    {
      title: 'Apartment',
      data:[
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/1.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/1_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/2.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/2_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/3_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/4_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/5_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/6_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/7_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/8_sm.webp`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/9_sm.webp`,
        }
      ],
    },
    {
      title: 'Elevation',
      data:[
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/1.jpg`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/2Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/2.jpg`,
        },
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/3Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/3.jpg`,
        }
      ],
    },  
    {
      title: 'Landscape',
      data:[
        {
          content:{},
          lg: `${CONFIG.IMAGE_URL}renders/landscape/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/landscape/1.jpg`,
        },
      ],
      
    },  
  ],
  amenities : [
    { name: 'club house', imgSrc: 'clubhouseSm.webp', desc:'A sanctuary of exclusivity, blending graceful leisure with moments that define timeless indulgence.' },  
    { name: 'Gym', imgSrc: 'gymSm.webp', desc:'A space meticulously designed to redefine fitness, where every movement feels empowered amidst an ambiance of precision and poise.' },
    { name: 'Library', imgSrc: 'librarySm.webp', desc:'A retreat for the connoisseur of knowledge, offering a curated realm of intellectual indulgence and quiet sophistication.' },
    { name: 'Business Center', imgSrc: 'businessSm.webp', desc:'Crafted for the discerning professional, this is where ambition meets elegance in an environment of unparalleled refinement.' },
    { name: `Kid's Play Area`, imgSrc: 'kidsSm.webp', desc:'An imaginative wonderland where joy is boundless, and every detail is thoughtfully created for young dreamers to thrive.' },
    { name: `theatre`, imgSrc: 'theaterSm.webp', desc:'A private escape into cinematic grandeur, where every viewing transforms into an experience of opulent immersion.' },
    { name: 'spa', imgSrc: 'spaSm.webp', desc:'An oasis of exquisite rejuvenation, where the art of relaxation is elevated to an unparalleled sensory journey.' },
    { name: 'Entry & Exit', imgSrc: 'no_image.jpg', desc:'Exclusive entrance and exit for the residents.' },
  ],
  amenities_section: [
    {
      title: 'Spa',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
          }
        ]
      }
      
    },
    {
      title: 'Library',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
          }
        ]
      }
    },
    {
      title: 'Gym Area',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
          }
        ]
      }
    },
    {
      title: 'Mini Theater',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
          }
        ]
      }
    },    
    {
      title: 'Business Centre',
      data:{
        content:{},
        images: [
          {
            lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
          },
          {
            lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
            mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
          }
        ]
      }
    },   
  ],
  highlight:{
    isshow: true,
    title: "Highlight",
    point:[
      'Power backup for common facilities.',
    'Italian/Imported Marble flooring.',
    'Television points in living and bedrooms.',
    'Telephone points in living and master bedroom.',
    'Split AC provision in living and bedrooms.',
    'Premium emulsion paint finish.',
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage",
    mapIMG: {
      desktop:CONFIG.IMAGE_URL + 'gurgaon-micro/location_map.webp',
      mobile:CONFIG.IMAGE_URL + 'gurgaon-micro/location-map_sm.webp'
    },
    //     yasho bhoomi
    // indira gandhi international airport
    // diplomatic enclave
    // palam vihar 
    // gurgaon railway station
    // dlf cyber city 
    // world global city
    locationData: [
      {
        distance: '2.9 kms',
        title: 'World global city',
      },
      {
        distance: '10.5 kms',
        title: 'Cyber City 2',
      },
      {
        distance: '10.5 kms',
        title: 'Gurgaon Railway station',
      },
      {
        distance: '18 kms',
        title: 'Yasho Bhoomi',
      },
      {
        distance: '20 kms',
        title: 'Diplomatic enclave 2',
      },
      {
        distance: '29.7 kms',
        title: 'IGI Airport',
      },
    ]
  },
  floorPlan:{
    title:'Floor Plan',
    floorPlanData : [
      {
        title:'Penthouse',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/1.webp',
          },
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/2.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/2.webp',
          }
        ]
      },
      {
        title:'360 Panoramic Apartment',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
          }
        ]
      },
      {
        title:'270 Panoramic Apartment',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/1.webp',
          },
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/2.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/2.webp',
          },
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/3.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/3.webp',
          }
        ]
      },
    ]
  }
};

const AeroOneGurgaon = () => {
  return <MicroPageGurgaon1 data={data} />;
};

export default AeroOneGurgaon;

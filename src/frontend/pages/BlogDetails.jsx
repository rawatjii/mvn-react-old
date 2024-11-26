import React,{useState,useEffect } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/blogBG.jpg";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";
import { useParams } from "react-router-dom";

import BlogIcon from "../assets/images/blogs/blogicon.png";

import blogIMG from "../assets/images/blogs/blog-1.jpg";
import { useSelector } from "react-redux";

function BlogDetails() {
  // const selectedBlog = useSelector((state) => state.blogs.selectedBlog);
  const [selectedBlog, setSelectedBlog] = useState({});
  const { slug } = useParams();


  const breadcrumbs = {
    title: "Blogs",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blogs",
      },
    ],
  };


  const findBlogBySlug = (slug) => {
    return blogData.find((blog) => blog.slug === slug);
  };

  const blogData = [
      // repeat 
      {
        title: "Sky Villas Across the Globe: A Benchmark in Opulence",
        slug:'luxury-at-unimaginable-heights-features-of-mvn-sky-villas',
        img: blogIMG,
        date: "16 April, 2021",
        link: "",
        content: [
          `Internationally, sky villas are the hallmark of luxury. From
                Dubai's iconic Burj Khalifa residences to New York's Billionaires'
                Row penthouses, these homes offer exclusivity, world-class
                interiors, and breathtaking vistas. In Singapore, sky villas in
                Marina Bay Sands provide private infinity pools, concierge
                services, and direct access to high-end shopping and
                entertainment.`,
          `Inspired by these global masterpieces, MVN's Sky Villas are
                designed to reflect similar grandeur, ensuring every element
                speaks of sophistication and class. With expansive layouts and
                cutting-edge amenities, these villas redefine urban living in
                India.`,
               
  
        ],
        description: [
          {
            heading: "",
            description: `Internationally, sky villas are the hallmark of luxury. From Dubai's iconic Burj Khalifa residences to New York's Billionaires' Row penthouses, these homes offer exclusivity, world-class interiors, and breathtaking vistas. In Singapore, sky villas in Marina Bay Sands provide private infinity pools, concierge services, and direct access to high-end shopping and entertainment.
  
  Inspired by these global masterpieces, MVN's Sky Villas are designed to reflect similar grandeur, ensuring every element speaks of sophistication and class. With expansive layouts and cutting-edge amenities, these villas redefine urban living in India.
  `
          },
          {
            heading: `Gurugram's Real Estate Evolution Meets International Luxury`,
            description: `Gurugram has evolved into India's premier luxury real estate destination thanks to its rapid urbanization and proximity to Delhi and the airport. MVN's Sky Villas elevate this status further by introducing a concept that combines the aesthetics of global architecture with the practicality of Gurugram's cosmopolitan lifestyle.
  
  Imagine living in a home that merges the grandeur of New York's skyline views with the exclusivity of Dubai's luxury interiors—all located in the heart of Gurugram.
  
            `
          },
          {
            heading: `Luxury at Unimaginable Heights: Features of MVN Sky Villas`,
            description: `MVN's Sky Villas are not just homes; they're a statement of class. Here's what sets them apart: <ul>
            <li><b>Expansive Living Spaces:</b> Open-concept designs with floor-to-ceiling glass walls offering uninterrupted views of the city.
  </li>
            <li><b>Private Amenities:</b> Dedicated elevators, private terraces, and rooftop pools ensure exclusivity.
  </li>
            <li><b>Premium Finishes:</b> Imported marble flooring, smart home automation, and designer fixtures make every corner exquisite.
  </li>
            <li><b>World-Class Facilities</b>: Residents will enjoy access to concierge services, a fitness center, landscaped gardens, and a sky lounge.
  </li>
            </ul>
            These elements ensure that MVN's Sky Villas are a notch above the rest, giving Gurugram a taste of global luxury.
  
            `,
          },
          {
            heading: `Why Sky Villas in Gurugram Are the Future of Indian Real Estate`,
            description: `Sky Villas cater to the aspirations of India's affluent class, who seek not just a home but an elevated lifestyle. Gurugram, known for its thriving business hubs and vibrant social scene, is the perfect location for such a project. With MVN's reputation for innovation and quality, these sky villas are set to become landmarks in Gurugram's skyline.
  <br>
  Moreover, the growing demand for exclusive, luxury living spaces in Gurugram has made this the ideal time for MVN to introduce a concept that combines the allure of international high-rise living with the comforts of Indian sensibilities.
  
   `
          },
          {
            heading: `A Lifestyle Beyond Compare: The MVN Promise
  `,
            description: `MVN is renowned for creating residences that blend innovation with timeless elegance. The Sky Villas project is no exception. Each villa is a haven of tranquility, offering residents a sanctuary above the bustling city below. With a commitment to sustainability, MVN ensures that luxury and eco-consciousness go hand in hand.
  <br>
  From the moment you step into an MVN Sky Villa, you'll be transported to a world where every detail has been meticulously crafted to enhance your living experience.
  
  
  `,
          },
          {
            heading: `Experience the Pinnacle of Living with MVN Sky Villas
  
  `,
            description: `Sky Villas are not just homes; they're a lifestyle. MVN's latest project brings this unparalleled luxury to Gurugram, allowing residents to experience the exclusivity, grandeur, and sophistication seen in global metropolises. With breathtaking views, world-class amenities, and a promise of privacy, MVN Sky Villas redefine what it means to live luxuriously.
  <br>
  The future of luxury living is here, and it's soaring above Gurugram's skyline. Discover your haven in the clouds with MVN Sky Villas.
  
  `,
          },
        ],
      },
      {
        title: "Dwarka Expressway Redefining Urban Connectivity And Real Estate Dynamics",
        slug:'dwarka-expressway-redefining-urban-connectivity-and-real-estate-dynamics',
        img: blogIMG,
        date: "16 April, 2021",
        link: "",
        content: [
          `Stretching over 29 kilometers, the Dwarka Expressway is a trailblazer in India's urban transportation landscape. Strategically designed to decongest NH-48 and enhance connectivity between Delhi and Gurugram, this eight-lane elevated motorway is much more than a road; it is a symbol of urban evolution. Completed in phases, it has already begun transforming travel and real estate in the National Capital Region (NCR), making it a magnet for investors, developers, and homebuyers alike.`,
      

        ],
        description: [
          {
            heading: "",
            description: `Stretching over 29 kilometers, the Dwarka Expressway is a trailblazer in India's urban transportation landscape. Strategically designed to decongest NH-48 and enhance connectivity between Delhi and Gurugram, this eight-lane elevated motorway is much more than a road; it is a symbol of urban evolution. Completed in phases, it has already begun transforming travel and real estate in the National Capital Region (NCR), making it a magnet for investors, developers, and homebuyers alike.`,
          },
          {
            heading: `The Connectivity Boost`,
            description: `Dwarka Expressway connects Shiv Murti in Delhi to the Kherki Daula Toll Plaza in Gurugram, creating a seamless corridor between key urban hubs. Its strategic layout includes a 3.6 km shallow tunnel providing direct access to Terminal 3 of Indira Gandhi International Airport, dramatically reducing travel time for frequent flyers and international travellers. By offering an alternative route to the highly congested NH-48, the expressway has alleviated long-standing traffic woes in the regiom.
<br>
            Its integration with essential infrastructures, such as the India International Convention Centre in Dwarka Sector 25, positions it as a critical link for business and leisure travellers. Furthermore, the Intelligent Transport System (ITS) ensures real-time traffic monitoring, making commutes safer and more efficient.`,
          },
          {
            heading: `An Engineering and Environmental Marvel`,
            description: `Built with over 200,000 metric tons of steel and two million cubic meters of cement, the expressway's robust construction reflects its long-term durability. It features additional three-lane service roads on both sides, ensuring smooth traffic flow even during peak hours. Notably, the inclusion of a 2.5-meter-wide cycle track promotes sustainable commuting options, aligning with modern, eco-conscious urban planning​.`,
            
          },
          {
            heading: `Catalyst for Real Estate Growth`,
            description: `Real estate along Dwarka Expressway has seen exponential growth, driven by the promise of improved infrastructure and connectivity. Luxury property prices in the vicinity surged by 26% in 2023 alone, underscoring its status as a prime investment destination​.

  <br>
  Prominent sectors such as 83, 84, and 99-113 in Gurugram have emerged as hotspots for premium residential and commercial developments. These areas offer modern amenities, proximity to business hubs, and superior lifestyle opportunities. The expressway has attracted leading developers, and projects like MVN Mall contribute to the commercial vibrancy of the region, offering residents a one-stop destination for shopping, dining, and entertainment​.
  
   `
          },
          {
            heading: `Infrastructure Advancements Driving Economic Growth`,
            description: `The Dwarka Expressway is packed with advanced features, including multi-level interchanges, underpasses, and overpasses designed to ensure uninterrupted traffic flow. Its automated toll collection system further enhances commuter convenience, reducing delays and congestion​.
              <br>
            The operational 19-kilometer stretch from the Delhi-Gurugram border to Kherki Daula is already easing traffic woes. Upon full completion, expected later in 2024, the expressway will unlock further economic potential by connecting emerging commercial districts and residential hubs to central areas​.
              `,
          },
          {
            heading: `Shaping the Future of Urban Living`,
            description: `Dwarka Expressway has redefined urban planning by opening up new areas for residential and commercial developments. With improved connectivity to Indira Gandhi International Airport and major highways, the expressway has created a ripple effect, attracting both businesses and residents looking for convenience and luxury​.
              <br>
            Retail spaces, including iconic projects like MVN Mall, add to the region's allure, offering an ideal blend of work-life balance. This transformation marks the expressway as more than just a road—it is the backbone of a modern, sustainable, and economically vibrant urban ecosystem​.
              
              `,
          },

          {
            heading: `Conclusion`,
            description: `The Dwarka Expressway is not merely a testament to engineering prowess but also a beacon of urban transformation. Integrating cutting-edge infrastructure with sustainable initiatives has created a corridor that promotes connectivity, economic growth, and real estate development. As its full potential unfolds, the expressway promises to remain a cornerstone of NCR's future, catering to the needs of businesses, investors, and residents alike.

  <br>
 Whether you're looking for luxury living, commercial investment opportunities, or an enhanced lifestyle, the Dwarka Expressway has it all—and projects like MVN Mall further amplify its appeal, making this a destination worth exploring.
  
  `,
          },


        ],
      }

      // end repeat 

  ];


useEffect(() => {
  // Side effect code here
const result=findBlogBySlug(slug);
debugger;
setSelectedBlog(result);
}, [slug]);



  const blogData2 = [
    {
      title: "Sky Villas Across the Globe: A Benchmark in Opulence",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
      content: [
        `Internationally, sky villas are the hallmark of luxury. From
              Dubai's iconic Burj Khalifa residences to New York's Billionaires'
              Row penthouses, these homes offer exclusivity, world-class
              interiors, and breathtaking vistas. In Singapore, sky villas in
              Marina Bay Sands provide private infinity pools, concierge
              services, and direct access to high-end shopping and
              entertainment.`,
        `Inspired by these global masterpieces, MVN's Sky Villas are
              designed to reflect similar grandeur, ensuring every element
              speaks of sophistication and class. With expansive layouts and
              cutting-edge amenities, these villas redefine urban living in
              India.`,

        
      ],
    },
    {
      title: "Gurugram's Real Estate Evolution Meets International Luxury",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
      content: [
        `Gurugram has evolved into India's premier luxury real estate destination thanks to its rapid urbanization and proximity to Delhi and the airport. MVN's Sky Villas elevate this status further by introducing a concept that combines the aesthetics of global architecture with the practicality of Gurugram's cosmopolitan lifestyle.`,
        `Imagine living in a home that merges the grandeur of New York's skyline views with the exclusivity of Dubai's luxury interiors—all located in the heart of Gurugram.`,
      ],
    },
    // {
    //   title: "Luxury at Unimaginable Heights: Features of MVN Sky Villas",
    //   img: blogIMG,
    //   date: "16 April, 2021",
    //   link: "",
    //   content: [
    //     `MVN's Sky Villas are not just homes; they're a statement of class. Here's what sets them apart:`,
    //     {
    //       type: "li",
    //       list: [
    //         `Expansive Living Spaces: Open-concept designs with floor-to-ceiling glass walls offering uninterrupted views of the city.`,
    //         `Private Amenities: Dedicated elevators, private terraces, and rooftop pools ensure exclusivity.`,
    //         `Premium Finishes: Imported marble flooring, smart home automation, and designer fixtures make every corner exquisite.`,
    //         `World-Class Facilities: Residents will enjoy access to concierge services, a fitness center, landscaped gardens, and a sky lounge.`,
    //       ],
    //     },
    //     `These elements ensure that MVN's Sky Villas are a notch above the rest, giving Gurugram a taste of global luxury.`,
    //   ],
    // },
    // {
    //   title: "Why Sky Villas in Gurugram Are the Future of Indian Real Estate",
    //   img: blogIMG,
    //   date: "16 April, 2021",
    //   link: "",
    //   content: [
    //     `Sky Villas cater to the aspirations of India's affluent class, who seek not just a home but an elevated lifestyle. Gurugram, known for its thriving business hubs and vibrant social scene, is the perfect location for such a project. With MVN's reputation for innovation and quality, these sky villas are set to become landmarks in Gurugram's skyline.`,
    //     `Moreover, the growing demand for exclusive, luxury living spaces in Gurugram has made this the ideal time for MVN to introduce a concept that combines the allure of international high-rise living with the comforts of Indian sensibilities.`,
    //   ],
    // },
    // {
    //   title: "A Lifestyle Beyond Compare: The MVN Promise",
    //   img: blogIMG,
    //   date: "16 April, 2021",
    //   link: "",
    //   content: [
    //     `MVN is renowned for creating residences that blend innovation with timeless elegance. The Sky Villas project is no exception. Each villa is a haven of tranquility, offering residents a sanctuary above the bustling city below. With a commitment to sustainability, MVN ensures that luxury and eco-consciousness go hand in hand.`,
    //     `From the moment you step into an MVN Sky Villa, you'll be transported to a world where every detail has been meticulously crafted to enhance your living experience.`,
    //   ],
    // },
  ];

  return (
    <div className="blog_page">
      <MicroBanner bg={Desktopmicro_bg} data={breadcrumbs} />
      <Container className="text-center py-5">
        {/* <img src={BlogIcon} alt="mvn-support-icon" className="img-fluid supportIcon mb-4" /> */}

        {/* <SecTitle className="text-center color style1 mb_30">
                <h4 className="title">Perspectives That Redefine: Welcome to Our Blogs</h4>
            </SecTitle> */}
      </Container>
      <div className="container">
        <div className="row row-gap-3">
         <div className="col-sm-12 col-md-8 col-lg-8">
 
         <div className="w-100 p-3">
            <img
              src={selectedBlog?.img}
              alt=""
              className="w-100 rounded-3"
            />
          </div>
          <div>
            <h3 style={{ color: "#c9b047" }}>
              {selectedBlog?.title}
            </h3>
        
              

                {selectedBlog?.description?.map((item)=>{
                  return <>
                  <div className="mb-2">
                    
                   <h2 dangerouslySetInnerHTML={{ __html: item.heading }} ></h2> 
                   <div dangerouslySetInnerHTML={{ __html: item.description }} />

                  </div>
                   </>
                })}



           
            {selectedBlog?.content?.map(
              (item) =>
                item?.type === "li" ? (
                  <ul className="my-2">
                    {item.list.map((li) => (
                      <li
                        style={{
                          listStyleType: "disc",
                          paddingLeft: 2,
                          fontSize: 14,
                        }}
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontSize: 16 }}>{item}</p>
                )
            )}
          </div>
          


         </div>
         <div className="col-sm-12 col-md-4 col-lg-4">


         <h3>Related Blogs</h3>
          {blogData2 &&
            blogData2.map((el, i) => (
              <div
                className="col-sm-12 col-md-4 col-lg-4 col-xl-4"
                key={`blog-${i}`}
              >
                <div className="blog-platter-box">
                  <div className="blog-platter-img">
                    <img className="img-fluid" src={el.img} alt="" />
                  </div>
                  <div className="blog-platter-detail">
                    <h4>{el.title}</h4>
                    <div className="blog-platter-detail-btn">
                      <p>{el.date}</p>
                      <a className="btn btn_style2" href={el.link}>
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>



          <div className="col-sm-12">
            <div className="text-center py-5">
              <a href="" className="btn btn_style2">
                View More
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

import React from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/blogBG.jpg";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

import BlogIcon from "../assets/images/blogs/blogicon.png";

import blogIMG from "../assets/images/blogs/blog-1.jpg";
import { useSelector } from "react-redux";

function BlogDetails() {
  const selectedBlog = useSelector((state) => state.blogs.selectedBlog);
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
  const blogData = [
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
    {
      title: "Luxury at Unimaginable Heights: Features of MVN Sky Villas",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
      content: [
        `MVN's Sky Villas are not just homes; they're a statement of class. Here's what sets them apart:`,
        {
          type: "li",
          list: [
            `Expansive Living Spaces: Open-concept designs with floor-to-ceiling glass walls offering uninterrupted views of the city.`,
            `Private Amenities: Dedicated elevators, private terraces, and rooftop pools ensure exclusivity.`,
            `Premium Finishes: Imported marble flooring, smart home automation, and designer fixtures make every corner exquisite.`,
            `World-Class Facilities: Residents will enjoy access to concierge services, a fitness center, landscaped gardens, and a sky lounge.`,
          ],
        },
        `These elements ensure that MVN's Sky Villas are a notch above the rest, giving Gurugram a taste of global luxury.`,
      ],
    },
    {
      title: "Why Sky Villas in Gurugram Are the Future of Indian Real Estate",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
      content: [
        `Sky Villas cater to the aspirations of India's affluent class, who seek not just a home but an elevated lifestyle. Gurugram, known for its thriving business hubs and vibrant social scene, is the perfect location for such a project. With MVN's reputation for innovation and quality, these sky villas are set to become landmarks in Gurugram's skyline.`,
        `Moreover, the growing demand for exclusive, luxury living spaces in Gurugram has made this the ideal time for MVN to introduce a concept that combines the allure of international high-rise living with the comforts of Indian sensibilities.`,
      ],
    },
    {
      title: "A Lifestyle Beyond Compare: The MVN Promise",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
      content: [
        `MVN is renowned for creating residences that blend innovation with timeless elegance. The Sky Villas project is no exception. Each villa is a haven of tranquility, offering residents a sanctuary above the bustling city below. With a commitment to sustainability, MVN ensures that luxury and eco-consciousness go hand in hand.`,
        `From the moment you step into an MVN Sky Villa, you'll be transported to a world where every detail has been meticulously crafted to enhance your living experience.`,
      ],
    },
  ];
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
          <div className="w-100 p-3">
            <img
              src={blogData[localStorage.getItem("selectedBlog") ?? 0]?.img}
              alt=""
              className="w-100 rounded-3"
            />
          </div>
          <div>
            <h3 style={{ color: "#c9b047" }}>
              {blogData[localStorage.getItem("selectedBlog") ?? 0]?.title}
            </h3>

            {blogData[localStorage.getItem("selectedBlog") ?? 0]?.content?.map(
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

          <h3>Related Blogs</h3>
          {blogData &&
            blogData2.map((el, i) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
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

import React from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/1865.jpg";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

// import BlogIcon from "../assets/images/blogs/blogicon.png";
import headingIconImg from "../assets/images/icons/heading-icon-img.png";
import blogIMG from "../assets/images/blogs/blog-1.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../../redux/blogsSlice";

function Blog() {
  const dispatch = useDispatch();

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
      title: "Sky Villas by MVN: Redefining Luxury Living in Gurugram",
      slug: "Sky-Villas-by-MVN-Redefining-Luxury-Living-in-Gurugram",

      img: blogIMG,
      date: "16 April, 2021",
      link: "",
      content: [
        `Sky Villas—luxurious residences perched high above the city—are synonymous with opulence and exclusivity in major global cities like New York, Dubai, and Singapore. These architectural marvels, often occupying the highest floors of premium skyscrapers, offer panoramic views, unparalleled privacy, and amenities fit for royalty. Now, MVN is bringing this epitome of luxury to Gurugram, introducing a lifestyle never seen before in India's real estate market.
`,
        `Prepare to experience something extraordinary: Sky Villas by MVN, where the extravagance of international high-rise living meets the dynamism of Gurugram's skyline.`,
      ],
    },
    {
      title: "Dwarka Expressway: Redefining Urban Connectivity and Real Estate Dynamics",
      slug:'dwarka-expressway-redefining-urban-connectivity-and-real-estate-dynamics',
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
      slug:'luxury-at-unimaginable-heights-features-of-mvn-sky-villas',
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
  ];

  return (
    <div className="blog_page">
      <MicroBanner bg={Desktopmicro_bg} data={breadcrumbs} />
      <Container className="text-center py-5">
        {/* <img
          src={BlogIcon}
          alt="mvn-support-icon"
          className="img-fluid supportIcon mb-4"
        /> */}

        <SecTitle className="text-center color style1 mb_30">
        <img src={headingIconImg} alt="" className="img-fluid headingIcon"/>
          <h4 className="title">
            Perspectives That Redefine: Welcome to Our Blogs
          </h4>
        </SecTitle>
      </Container>
      <div className="container">
        <div className="row row-gap-3">
          {blogData &&
            blogData.map((el, i) => (
              <div className="col-sm-4" key={`blog-${i}`}>
                <div className="blog-platter-box">
                  <div className="blog-platter-img">
                    <img className="img-fluid" src={el.img} alt="" />
                  </div>
                  <div className="blog-platter-detail">
                    <h4>{el.title}</h4>
                    <div className="blog-platter-detail-btn">
                      <p>{el.date}</p>
                      <Link
                        to={`/blogs/details/${el.slug}`}
                        className="btn btn_style2"
                        onClick={() => {
                          localStorage.setItem("selectedBlog", i);
                          dispatch(setSelectedBlog(i))
                        }}
                      >
                        View Details
                      </Link>
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

export default Blog;
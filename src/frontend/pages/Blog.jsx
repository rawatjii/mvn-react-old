import React from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/blogBG.jpg";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

import BlogIcon from "../assets/images/blogs/blogicon.png";

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
      title: "How 2021 Will Be Favourable For You To Buy Your Dream Home",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
    },
    {
      title: "How 2021 Will Be Favourable For You To Buy Your Dream Home",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
    },
    {
      title: "How 2021 Will Be Favourable For You To Buy Your Dream Home",
      img: blogIMG,
      date: "16 April, 2021",
      link: "",
    },
  ];

  return (
    <div className="blog_page">
      <MicroBanner bg={Desktopmicro_bg} data={breadcrumbs} />
      <Container className="text-center py-5">
        <img
          src={BlogIcon}
          alt="mvn-support-icon"
          className="img-fluid supportIcon mb-4"
        />

        <SecTitle className="text-center color style1 mb_30">
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
                        to="/blogs/details"
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

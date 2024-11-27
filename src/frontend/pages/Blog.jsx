import React from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/1865.jpg";
import { Container } from "react-bootstrap";
import SecTitle from "../../common/SecTitle/Index";

import headingIconImg from "../assets/images/icons/heading-icon-img.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../../redux/blogsSlice";
import {blogData} from '../../data/blogsdata';

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
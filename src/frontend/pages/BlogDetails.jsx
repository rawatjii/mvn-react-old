import React,{useState,useEffect } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import Desktopmicro_bg from "../assets/images/blogs/blogBG.jpg";
import { Container,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



import {blogData} from '../../data/blogsdata';

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
    return  blogData.find((blog) => blog.slug === slug);

  };




useEffect(() => {
  // Side effect code here
const result=findBlogBySlug(slug);
debugger;
setSelectedBlog(result);
}, [slug]);




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
 
         <div className="w-100 px-3">
            <img
              src={selectedBlog?.img}
              alt=""
              className="w-100 rounded-3"
            />
          </div>
          <div>
            {/* <h3 style={{ color: "#c9b047" }}>
              {selectedBlog?.title}
            </h3> */}
        
{/*                
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
            )} */}


                {selectedBlog?.description?.map((item)=>{
                  return <>
                  <div className="mb-2">
                    
                   <h2 className="blog-detail-page-heading" dangerouslySetInnerHTML={{ __html: item.heading }} ></h2> 
                   <div className="blog-deatail-page-description" dangerouslySetInnerHTML={{ __html: item.description }} />

                  </div>
                   </>
                })}



          
          </div>
          


         </div>
         <div className="col-sm-12 col-md-4 col-lg-4">

                <div className="row">
              <h3>Related Blogs</h3>
                {blogData &&
                  blogData.map((el, i) => (
                    <div
                      className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mb-2"
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
                            <Link className="btn btn_style2"   to={`/blogs/details/${el.slug}`}>
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

</div>


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

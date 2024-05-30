import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

import blogList from "../utilis/blogdata";
import { Fade } from "react-reveal";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    // behavior: 'smooth' 
  });
};

 
const Blog = () => {
  useEffect(()=>{
    scrollToTop();
  },[]);

  return (
    <div>
      <PageHeader title={"Our Blog Posts"} curPage={"Blog"} />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
            <Fade top distance ="10%" duration={1500}>
              {blogList.map((blog, i) => (
                <div className="col" key={i}>
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to={`/blog/${blog.id}`}>
                          <img src={blog.imgUrl}/>
                        </Link>
                      </div>
                      <div className="post-content">
                        <Link to={`/blog/${blog.id}`}>
                          <h4>{blog.title}</h4>
                        </Link>
                        <div className="meta-post">
                          <ul className="lab-ul">
                            {blog.metaList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i>
                                {val.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p>{blog.desc}</p>
                      </div>
                      <div className="post-footer">
                        <div className="pf-left">
                          <Link
                            to={`/blog/${blog.id}`}
                            className="lab-btn-text"
                          >
                            {blog.btnText}
                            <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                        <div className="pf-right">
                          <i className="icofont-comment"></i>
                          <span className="comment-count">
                            {blog.commentCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
                          </Fade>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

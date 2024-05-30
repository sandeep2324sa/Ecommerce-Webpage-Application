/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Tags from "../Shop/Tags";
import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import blogList from "../utilis/blogdata";
import PopularPost from "../shop/PopularPost"
import { Fade, Flip, Slide } from "react-reveal";
const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    // behavior: 'smooth' 
  });
};


const SingleBlog = () => {
  useEffect(()=>{
    scrollToTop();
  },[]);
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
//   console.log(Number(id));

  const result = blog.filter((p) => p.id === Number(id));
//   console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <Fade top distance ="20%" duration={1500}>
                                <img
                                  src={item.imgUrl}
                                  alt="blog thumb rajibraj91"
                                  className="w-100"
                                />
                                </Fade>
                              </div>
                              <div className="post-content">
                                <h2>{item.title}</h2>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    <li>
                                      <a href="#">
                                        <i className="icofont-calendar"></i>
                                        January 24,2024
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icofont-ui-user"></i>Sandeep Kishor
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="icofont-speech-comments"></i>
                                       {item.commentCount}{" Comments"}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Serenity hasir taken poseson mying entre soung
                                  these sweet morngs sprng whch enoywith whole
                                  heart create am alones and feel the charm of
                                  exstenceth spot whch the blissouls like
                                  mineing am soo happy my dearsi frend absoribed
                                  the exquste sense enjoy my whole hearts alone
                                  and fee the charm of exstenceths spotsi whch
                                  was the blis of soulis mineing amsoing dear
                                  frend soingu absoribed the exqust sense
                                  tranqui existence neglect my talentsr should
                                  ncapable ofing is drawng singe wonderful
                                  serenty has taken possesison of my entre
                                  soulng these sweet present moment and yet feel
                                  that never was greater artst
                                </p>

                                <blockquote>
                                  <p>
                                    Dynamically recaptiualize distributed
                                    technologies is wherease turnkey channels
                                    and onotonectally provide access to resource
                                    leveling expertise vias worldwide
                                    deliverables uolisticly extend aserser are
                                    diverse vortals.{" "}
                                  </p>
                                  <cite>
                                    <a href="#">...~ By Aarti Prajapati</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot whch the blissouls
                                  like mineing am soo happy my dearsi frend
                                  absoribed the exquste sense enjoy my whole
                                  hearts alone and fee the charm of exstenceths
                                  spotsi whch was the blis of soulis mineing
                                  amsoing dear frend soingu absoribed the exqust
                                  sense tranqui existence neglect my talentsr
                                  should ncapable ofing is drawng singe
                                  wonderful serenty has taken possesison of my
                                  entre soulng these sweet present moment and
                                  yet feel that never was greater artst
                                </p>
                                <Slide left duration={1500}>
                                <img
                                  src="/images/blog/single/01.jpg"
                                />
                                </Slide>
                                <p>
                                  Serenity hasir taken poseson mying entre soung
                                  these sweet morngs sprng whch enoywith whole
                                  heart create am alones and feel the charm of
                                  exstenceth spot whch the blissouls like
                                  mineing am soo happy my dearsi frend absoribed
                                  the exquste sense enjoy my whole hearts alone
                                  and fee the charm of exstenceths spotsi whch
                                  was the blis of soulis mineing amsoing dear
                                  frend soingu absoribed the exqust sense
                                  tranqui existence neglect my talentsr should
                                  ncapable ofing is drawng singe wonderful
                                  serenty has taken possesison of my entre
                                  soulng these sweet present moment and yet feel
                                  that never was greater artst
                                </p>

                                 <Slide left duration={1500}>
                                <div className="video-thumb">
                                  <img
                                    src="/images/blog/single/02.jpg"
                                  />
                                  <a
                                    href="https://youtu.be/KLuTLF3x9sA?si=JcOALOGPIMdBVMvL"
                                    className="video-button popup"
                                    target="_blank"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                </Slide>

                                <p>
                                  whole heart create am alones and feel the
                                  charm of exstenceth spot whch the blissouls
                                  like mineing am soo happy my dearsi frend
                                  absoribed the exquste sense enjoy my whole
                                  hearts alone and fee the charm of exstenceths
                                  spotsi whch was the blis of soulis mineing
                                  amsoing dear frend soingu absoribed the exqust
                                  sense tranqui existence neglect my talentsr
                                  should ncapable ofing is drawng singe
                                  wonderful serenty has taken possesison of my
                                  entre soulng these sweet present moment and
                                  yet feel that never was greater artst
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                  <Flip>
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a
                                          href={val.link}
                                          className={val.className}
                                        >
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                    </Flip>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

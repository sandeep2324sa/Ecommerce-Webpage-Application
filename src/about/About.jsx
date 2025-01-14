import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { Fade, Flip } from "react-reveal";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc =
  "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: "/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};


const About = () => {
  useEffect(()=>{
    scrollToTop();
  },[]);

  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <Fade top distance ="10%" duration ={1500}>
                <div className="about-thumb">
                  <img src="/images/about/01.jpg"/>
                </div>
                </Fade>
                
                <div className="abs-thumb">
                <Fade top distance ="10%" duration ={2000}>
                  <img src="/images/about/02.jpg"/>
                  </Fade>
                </div>
                
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <Flip duration={1500}>
                          <img src={val.imgUrl} />
                          </Flip>
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

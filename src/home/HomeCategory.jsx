import React from "react";
import { Link } from "react-router-dom";
const subTitle = "Choose Any Products";
const title = "Buy Everything With Us";
const btnText = "Get Started Now";
import { Fade } from "react-reveal";
import { Flip } from "react-reveal";

const categoryList = [
  {
    imgUrl: "/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return<><div className="category-section style-4 paddding-tb">
      <div className="container">
        {/* section header  */}
        <Flip left duration={1500}>
        <div className="section-header text-center mt-5">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>  
        </div>
        </Flip> 
        {/* section cards  */}
         <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
          <Fade left duration={1000}>
            {categoryList.map((val, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* image thumbnail  */}
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>

                    {/* content  */}

                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <Link to="/shop">
                        <h6>{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
                    </Fade>  
          </div>
           <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
           </div>
        </div>
 
      </div>
    </div>
    
    </>
};

export default HomeCategory;

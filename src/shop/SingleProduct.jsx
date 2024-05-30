import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Review from "./Review";

import ProductDisplay from "./ProductDisplay";
import { Fade } from "react-reveal";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    // behavior: 'smooth' 
  });
};

const SingleProduct = () => {
  
  useEffect(()=>{
    scrollToTop();
  },[]);
  
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  const result = product?.filter((p) => p.id === id);
  console.log("result->",result);
  return (
    
    <div>
      <PageHeader title={"Your Product Details"} curPage={"Shop / Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <Fade left duration={1500}>
                      <div className="product-thumb">
                      
                          
                            {result?.map((item, i) => (
                              <div key={i}>
                                <div className="single-thumb">
                                  <img src={`${item.img}`} alt="" />
                                </div>
                              </div>
                            ))}
                          
                        

                        {/* ----- */}
                       
                      </div>
                      </Fade>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {
                            result.map(item => <ProductDisplay item={item} key={item.id}/>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-7 col-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

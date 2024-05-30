import React from "react";
import { useState } from "react";
import Rating from "../components/Rating";
import products from '../products.json'

const reviewtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews 4
        </li>
      </ul>
       
       {/* REVIEW  */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="client-review">
            <div className="review-form">
                <div className="review-tile">
                    <h5>{reviewtitle}</h5>
                </div>

                <form className="row">
                    <div className="col-md-4 col-12">
                        <input type="text" name="name" id="name" placeholder=" Your Full Name *" />
                    </div>
                    <div className="col-md-4 col-12">
                        <input type="text" name="email"  id="email" placeholder=" Your Email *" />
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="rating">
                            <span className="me-2">Your Rating </span>
                            <Rating/>
                        </div>                  
                    </div>
                    <div className="col-md-12 col-12">
                        <textarea name="meassage" id="message" rows="8" placeholder="Type Your Message Here..."></textarea>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="default-button">
                            <span>Submit Preview</span>
                        </button>
                        </div> 
                </form>
            </div>
          </div>
        </div>

                {/* DECRIPTION? */}
        <div className="description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aperiam assumenda vel reprehenderit. Dolor tempora voluptates ad a ut, ipsum amet nobis aut doloremque at. Maiores voluptate ab iste explicabo a molestiae sunt provident, ipsa reprehenderit possimus dolor voluptates nesciunt reiciendis animi sint sit illo quibusdam amet commodi cumque fugit omnis vel quaerat? Laboriosam, ab dolorem?Repellendus aperiam assumenda vel reprehenderit. Dolor tempora voluptates ad a ut, ipsum amet nobis aut doloremque at.</p>

            <div className="post-item">
                <div className="post-thumb">
                   <img src="data:image/jpeg;base64,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"/>
                </div>
                <div className="post-content">
                    <ul className="lab-ul">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo obcaecati</li>
                    </ul>
                </div>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aperiam assumenda vel reprehenderit. Dolor tempora voluptates ad a ut, ipsum amet nobis aut doloremque at. Maiores voluptate ab iste explicabo a molestiae sunt provident, ipsa reprehenderit possimus dolor voluptates nesciunt reiciendis animi sint sit illo quibusdam amet commodi cumque fugit omnis vel quaerat? Laboriosam, ab dolorem?Repellendus aperiam assumenda vel reprehenderit. Dolor tempora voluptates ad a ut, ipsum amet nobis aut doloremque at.</p>
        </div>
      </div>
    </>
  );
};

export default Review;

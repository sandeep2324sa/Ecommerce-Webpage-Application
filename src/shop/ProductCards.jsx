import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { Fade } from "react-reveal";

const ProductCards = ({ products, GridList }) => {
  // console.log(products)
  return (
   
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >  <Fade top distance="10%" duration={1500}>
      {
        products.map((product, i) => (
        <div className="col-lg-4 col-md-6 col-12" key={i}>
          {/* product grid */}
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={`${product.img}`} alt={`${product.img}`} />
              </div>

              {/* product action link  */}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            {/* product content  */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className="productRating">
                <Rating />
              </p>
              <h6>₹{product.price}</h6>
            </div>
          </div>

          {/* product list  */}
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={`${product.img}`} alt={`${product.img}`} />
              </div>

              {/* product action link  */}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            {/* product content  */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className="productRating">
                <Rating />
              </p>
              <h6>₹{product.price}</h6>
            </div>
          </div>
        </div>
      ))}
      </Fade>
    </div>

  );
};

export default ProductCards;

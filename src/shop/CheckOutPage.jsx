import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa"); // Initial active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order confirmation and redirect to home page
  const location = useLocation();
  const navigate = useNavigate();
  
  //this will take user to home page
  // const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your order is placed successfully!")
      localStorage.removeItem("cart");
      navigate("/");
    }

  return (
    <div className="modalCard">
      <Button variant="primary" onClick={handleShow} className="py-2">
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      href="#visa"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      <img src="https://i.imgur.com/sB4jftM.png" width="80" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paytm" ? "active" : ""
                      }`}
                      id="paytm-tab"
                      data-toggle="tab"
                      href="#paytm"
                      role="tab"
                      aria-controls="paytm"
                      aria-selected={activeTab === "paytm"}
                      onClick={() => handleTabChange("paytm")}
                    >
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABQVBMVEX////+/v4HLW4CuvAHLHIFLm4CufMDvPX7//7///sFue0AJHL///pjdJoAJHD6//kyueRpeZEAs+UAuvcArePt+/fh9v3H7fYAtPYAF2SL2+8ELmsIKXJzz+33///09vVSZ5Cyu8VRYIcAI2YAJ2cpR3rl6/AADmUAHmX7+f18jq12g6x0gJ16h6o6wN9nzehZbIyJ0t8AGF4AGHUDMmuQoa8httktSXYAJXsAAk4ADVax3+zP2ue0u84AGG4AHVYAFlcJN2Cu7vLd+O4AuP8Nvef//utkveZAtdWy6Oddxtve+/vv//iGm7Hx8Pp7jaOqv9JKXYoAAF1AtNAvsNeZr7ZTw88AB0vX9P8AwvCk3/FgbY6Y5/QAq/N7yteeo7xCUW9EU4VacIAAKVgnOWjb3N+3yM25xtuXosAkNmY4Vnu5RsylAAAMPElEQVR4nO2bC1vTyBqAZ3JpMyE2pWmgITEVW2nDKrBsKQrlIlp05bouuyvoOeq6smf9/z/gzJdbmzYtF8sC+r3PQx+dTiaTN99MZqYTQhAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQc4Hve4KXDOUUp3pNOC6K3NNwKUr3vfugOw++44dQAgwdypfnHKDgLgirvs6h8Grp5nzR8bzvPndOoCGMK+qbbH9PToIKsZcb6sgqlmjvXuFBm62A7r9Jp9RVTEz9/06UCbmSkYme2McUEJZP7rOWE/dvU7ZPEPvOXSmKMGhCgmPhDLi8ngaP0zhZ+PZdl4YpYzvwORPCM0vTNO0RP15Zv/IKJl5PCf/N+PZ2agd9JfIr9bjJArhdXG7UTwlUYwXwS+GkbCn87ywPM83qPhJnjL5smiIQLZpui6l8Mc/vE7plMDwqUxZp266oulgi2kedUfsgN++1HRdTxQSXFnnxhKSPKw7bGjooJPE4GaybY3prvnzq4Jo+A5U45iHiqb432pU8SGaThj4YuYOx+TVUwJ5VNv1U5i2PWIH+syj+/3c2Vvb99tJWA7T9x/diXn7dvxg73DG4x6i80wcRIcurIUOlLWFX8K02X2o0sTdl/l8u5AV28dixndQnAOmTIiDk7mQ9sstytyTF0WxWCwWXr57Rjweq665Ol8oFnjS3MkEOV9rOK8D9rBW9ZGcDkKlstI4KOtBQfCxfceqdFGvW9bilyVTZ36ToeTgSSPnf1OtvG75UUBarz9VJUESBEF6PQvFTBXbWd4AAvzGIPJOoSQWt1x+iUdG+IVR+nV3lXeakCWbyYjNE5dum6tHmaABiWKpObV7rlA4pwJK3uZs25ZlWZBiBLshOI+djUOihw4oW4CL6eAfYDm/aaGDhUojyCAL1nTgYLrWgGyAMw7neiWqYo8DjpEpTSlU2SnECdnmfOlYVdXo/6Xfn028KvKMUYJYmNsZrYOxPgeSDbfPkZ68V2gU2PdyQh+y8PqRP+jjDhw5dCCtdxxIgQI7Bw7ovH8jex1kMqUfuYOJktGlJWOoYnTJGbWUzxdLBTVMKGVUw2juwGlH1BbInVxwWxOEQlYOw/N4qQ64hJVZAqFA7o3ZcMGQaPU5kMf8OJiPrhEcZCIM34E+UciIg+B5MtmepLn93TM7hQs4kAc6GNtw2TAHvNX80fLPdi83zEHuHA7ygx3wWOn7MvPjtjf46kfooPJ4jwxzwHtP+b6rDHDw+twOyPA4SHOQPXqjDbv+izkYkwYijy27ih8J7j0pxQHvPp3NVhwHQWLggPhxAGWcKw7YUAepWl5sn9UljMSBIG20FF+3cq+a4gA0VJZI6CBMuJQDbeeCDgzx6MxucSQOJHtlmvgO2P0BDoTKAks4uEwcuN7FHaiFyStyAD2D43QGChbvEBQYuY7X4hFUzhE6DUOu/EVSHJDAgRB0NYGDV8cqv+ZjtSBGDgxfQaavLah8LKDCaKJrGMGnWOoxT1YjB8YJOWMF5lIO1mvrtVqtLthhnygL9Vni6XwYr8/8sODzFvhYiR3Y0oaS0hZCB8HQI3BA3xWhcys9N4I44B8GPP3/05zkk8luB5lSoZk/ErOlrgficUFttwt8onEc5lFLJ2ctQl3GQX1vGhjfkKXYwUHggMLUxZ/TQNnKQT2OA2fFJQPjoNuBxt5sra6unuRVNYgD0SicrK5unexoStKB2Hy3bz7byoslNU4q3TV3zclXMHi6UgfW3/6knSw8drodwKXzDy1CMbXP653no+WlOaB9DhRP9/jRejOMA3CwqzFNhxljwkFhi/GpMplsPo8dZP6raXzquNOMRsxZ1Zg6a6B4CQfy4po/TSVLP4WBIMv1WeY7oP4ygOeVYYmgTFtW/FxopDqgvQ6CSvE/PZ8VIwfFYG094SAjZgumDuMfs2nEc4biFr8P/DyvopGCkS1xBzoZFguXcCB0HAgpDvg9JMR1FcU13Yd1OXJg9ziQhjig6Q5ojwPVhOulbreDSQpeyLyRvT4H/PJb78cXfln++PGXj8tdD8peB8Pi4NwOdA8az1G3A893cLd0pQ4EcABxSZbWkw78Wq4tP/kpWCKQqkLUaUqS01hMdUDI2ut47pzuQDWKZrAI09cW3DLtjgNVLEwynUeifjdaRcjAlPuM0fJoHZDPHywhuKcBZzngSWu1hjwqB1nfAWPadTnghZ1u5CS5Ksu2T9JBPemgmovGieuji4PQgXb1DqxDHRo/W1p0Ygf82ejqnzf4ANLunl5C5xc4sK0yOHDCdSTBrn7ch3Jn7lfsEceB9i/EgfW37j//F4SEA9394PRNrnscLMQO+Ayi+vHLgy+NXMfZCB0YV+ygPrv22+HS0kLc5wUO2Pt6/wJDj4NHkQPJ4QfDrCIs4GsczF2DA6lqWdZiPXjwhVoOFOo+cOxwfSQeIScc8LPtxYNnmHbZ8CfDDCyeM13GQf5fd+BfM9Q5uhigvkTY55os9DgQeh2crkh9GUJdt8+BnHAADzpyWIvXyQbFgVdu8MnmN+nAcRZbjBx01gplv7nUrDE56YDS2ToPhLT1ttvmIGwOnTh4/MHVycOKEPQHsmSP/Tl9eHi490+1py2w/caYLI/WgXIjHAi8O0g4qD4glFGNnNaiYVLoQNemn0hyWnO49Q4+ebTLgSBVZjWYRLMJq8eBwry9J2NSSt95qxyk1N065QNU8rAa9weVH2DDAqMzi1KXg2Ce6C5tOnEpnQJvswPez7/+jXqe70DocyD0OqCa0vqy4jhhBH0TcSBZT/nkx6NpDryUOIBtJqx1sFxd2bR8bqMDTjVXrfuMWU/+mp3xV9D6HXAJM5vJsTLAZ3UaI8rM588t4PBp9SvnC9fiIHfvUcjsWstl/qJSShwMccAthJu8ymRtUbBvnwPrNNwMBvvBon31/X3iUAe8WrB5SdPI35Z06+IA1g/8BSCa+A2LPxvj1UNJGufTSKqQ1qI/Hko40Bktwyp8GdaeXbP1oSJ3OYjX/W66g+mUBUqdHMAKok9V2mzpvNGbf1btPgdkevlBh0YuJ39DDvbq8TNDytUqm5vVyuNGnwPifZKcakSj0ehafRw7uN0ONPLeiqdRvHfkjdzmk0RZ6HUw81SwYxLbOuz1JUJvjYO0LT6kVWskBw/xgDjhYP+pE40Hupeb4NNqRfvbbquDMr/v53MgD3Cw7Hq32wHVHlUEeaAD+QwHPKH+P/3mxgHk6x4fTLO+vV78Sc9aG5LdP58IHEjOxn7UH4ylzZ0dufJPebtr83XggNPtgOwUSkMcZMLfmTpr68HWzuHb80boQNOXVmQhbb3QP+pTeZgDWXD40KurwBvvgKQ54DH40JIGOah+UQY68A+pTfNxk9LlwEhzMNHvgOSjraupDoyROVAWwo2HfB64Oa0p6YUpe5uwO4lHftjig2NsyZFW1oJjyIwt9TiAjW31SvjTW9QfmM1j0QiJHHDVO0U12KKsqu38hAavKJh5sa36ZLgDynTeLOefq7Ct2zAyx6WpkexDgXzjuTAKHOnJKSsPKq61YC1W+ExQqHZhS4t/7JHgGFJ+6kg9Bqr1jfEZLXobJCjJaxrPQwX8hkcO6E6xFCbyZD5fg6xzWUgrlUrZbOGN70D70d/EEhz8jqTfsQs7KJ9+Cn5JbdjVhTId1NOWFbe1NP5lOcmDB3dO3Sgelb0/KgmqT7+8n9FdFr0NEmTTp4rFTKYIlO6anW/e/dpsNwuqmi/mT1jwzsvPv8+1203OUfOVGczJJn49moOUZvvohamMwoEfhfFrOB5hij6oOEXRUgvoet2G7M8kUeANFjd+nyXIxdzJrYCfJ10lrigjEP58zuW6rhbUXyGuGbzbY+6EZ2Fa/I50kG0UDkh3TqqcZfaC50ymR9kUGihXovfcOl8m/vU1VUmvz0AHXXylgzPqEp4D1ud8KNN6v/x2HdDkmZSw6elBO+oJmc4hozntRRnRuW8K6AAdAJdyEJv4NkAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB+gAQAfoAEAH6ABAB5T+Hzn1FSkVZWs8AAAAAElFTkSuQmCC" width="40" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* Visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                         <span>Cardholder Name</span>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required="required"
                           
                          />
                          
                        </div>
                        <div className="inputbox">
                        <span>Card Number</span>
                          <input
                            type="text"
                            name="name"
                            min="1"
                            max="999"
                            className="form-control"
                            required="required"
                          />
                           <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row pt-4">
                          <div className="inputbox ">
                            <input 
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              className="form-control"
                              required="required"
                              placeholder="Enter Expiration Date.."
                            />
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              className="form-control"
                              required="required"
                              placeholder=" Enter CVV.."
                            />
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-outline-success btn-block mt-2" onClick={handleOrderConfirm}>
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paytm" ? "show active" : ""
                    }`}
                    id="paytm"
                    role="tabpanel"
                    aria-labelledby="paytm-tab"
                  >
                    {/* Paypal tab content */}
                    <div className="mx-4 mt-4">
                      <div className="text-center">
                        <h5>Paytm Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                        <span>Enter Your UPI-ID</span>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required="required"
                          />
                        </div>
                        <div className="inputbox">
                        <span> Enter Your Name</span>
                          <input
                            type="text"
                            name="name"
                            min="1"
                            max="999"
                            className="form-control"
                            required="required"
                          />
                          
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              className="form-control mt-3"
                              required="required"
                              placeholder="Enter Your UPI PIN.."
                            />
                          </div>
                        </div>
                        <div className="pay px-5">
                          <button className="btn btn-outline-primary btn-block mt-2" onClick={handleOrderConfirm}>
                          Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* payment desclaimer */}
              <p className="mt-3 px-4 p-Disclaimer">
              <em>Payment Disclaimer:</em> In no event shall payment or partial payment by Owner for any material or service
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;

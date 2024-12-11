import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Context/HeaderContext";

const IndustriesContainer = () => {
  const { setShowIndustriesContainer, showIndustriesContainer } =
    useContext(HeaderContext);
  return (
    <div>
      {showIndustriesContainer && (
        <div
          className="sub-menu d-flex"
          onMouseEnter={() => setShowIndustriesContainer(true)}
          onMouseLeave={() => setShowIndustriesContainer(false)}
        >
          <div
            className="d-flex flex-column align-items-start gap-2"
            id="container-1"
          >
            <img src="industryMainIcon.svg" alt="Verified Icon" />
            <h1 className="hearder-item-text">Solutions for all industries</h1>
            <p className="header-description-text">
              Learn how RaptorX.ai solves the challenges specific to your
              industry.
            </p>
            <div className="navigation-wrapper">
              <div>Explore industry solutions</div>
              <img src="arrow-icon.svg"></img>
            </div>
          </div>
          <div id="container-2">
            <div id="container-3">
              {/* <Link className="container-4" to="/industries/fintech" >
                  <div className="container-5">
                    <img src="../icons/fintech-inner-icon.svg"></img>
                  </div>
                  <div className="container-6">
                    <h1>Fintech</h1>
                    <p>Increase revenue and customer trust</p>
                  </div>
                </Link> */}

              <Link className="container-4" to="/industries/banking">
                <div className="container-5">
                  <img src="bankingHeader.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Banking</h1>
                  <p>Expand learning offerings and improve revenue</p>
                </div>
              </Link>

              {/* <div className="container-4">
                    <div className="container-5">
                        <img src="../icons/online-learning-icon.svg"></img>
                    </div>
                    <div className="container-6">
                        <h1>
                            Online Learning
                        </h1>
                        <p>Expand learning offerings and improve revenue.</p>
                    </div>
                </div> */}
            </div>
            <div id="container-3">
              <Link className="container-4" to="/industries/ecommerce">
                <div className="container-5">
                  <img src="new-ecommerce-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Ecommerce</h1>
                  <p>Protect your online store and increase revenue.</p>
                </div>
              </Link>
              {/* <div className="container-4">
                    <div className="container-5">
                        <img src="../icons/health-and-beauty-icon.svg"></img>
                    </div>
                    <div className="container-6">
                        <h1>
                            Health and Beauty
                        </h1>
                        <p>
                            Grow brand awareness while reducing resale activity
                        </p>
                    </div>
                </div> */}
              {/* <a className="container-4" href="/industries/online-gaming">
                <div className="container-5">
                  <img src="../icons/online-gaming-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Online Gaming</h1>
                  <p>Provide secure gaming experiences</p>
                </div>
              </a> */}
              {/* <a className="container-4" href="/industries/streaming-services">
                <div className="container-5">
                  <img src="../icons/streaming-services-icon.svg"></img>
                </div>
                <div className="container-6">
                  <h1>Streaming Services</h1>
                  <p>Decrease account sharing and artificial streaming.</p>
                </div>
              </a> */}

              {/* <div className="container-4">
                    <div className="container-5">
                        <img src="../icons/direct-sales-icon.svg"></img>
                    </div>
                    <div className="container-6">
                        <h1>
                            Direct Sales
                        </h1>
                        <p>
                            Stop promotion abuse and affiliate account fraud
                        </p>
                    </div>
                </div> */}
            </div>
            <div id="container-3">
              {/* <div className="container-4">
                    <div className="container-5">
                        <img src="../icons/health-care-icon.svg"></img>
                    </div>
                    <div className="container-6">
                        <h1>
                            Healthcare
                        </h1>
                        <p>
                            Protect medical records and access to patient portals
                        </p>
                    </div>
                </div> */}
              {/* <div className="container-4">
                    <div className="container-5">
                        <img src="../icons/automotive-rentals-icon.svg"></img>
                    </div>
                    <div className="container-6">
                        <h1>
                            Automotive Rentals
                        </h1>
                        <p>
                            Deploy safeguards at every step of the rental process
                        </p>
                    </div>
                </div> */}
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default IndustriesContainer;

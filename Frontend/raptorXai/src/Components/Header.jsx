import React, { useContext } from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import WhyPanopilaContainer from "./HeaderList/WhyPanopilaContainer";
import FeaturesContainer from "./HeaderList/FeaturesContainer";
import IndustriesContainer from "./HeaderList/IndustriesContainer";
import ResourcesContainer from "./HeaderList/ResourcesContainer";
import MenuContainer from "./HeaderList/MenuContainer";
import { HeaderContext } from "../Context/HeaderContext";

const Header = () => {
  const {
    showWhyPanopilaContainer,
    setShowWhyPanopilaContainer,
    showFeaturesContainer,
    setShowFeaturesContainer,
    showIndustriesContainer,
    setShowIndustriesContainer,
    showResourcesContainer,
    setShowResourcesContainer,
    handleToggle,
  } = useContext(HeaderContext);

  return (
    <>
      <div className="header-container hidden lg:block">
        <div className="d-flex justify-content-center">
          <div
            className="d-flex justify-content-between align-items-center"
            id="header"
          >
            <Link to="/" className="text-decoration-none" id="company-logo">
              <img src="mainLogo.svg" alt="Company Logo" />
            </Link>
            <div id="menu-items">
              <Link
                className={`menu-item ${
                  showWhyPanopilaContainer ? "blue-text" : ""
                }`}
                id="item-1"
                onMouseEnter={() => setShowWhyPanopilaContainer(true)}
                onMouseLeave={() => setShowWhyPanopilaContainer(false)}
                to="/why-raptorx"
              >
                Why RaptorX.ai
              </Link>
              <Link
                className={`menu-item ${
                  showFeaturesContainer ? "blue-text" : ""
                }`}
                id="item-2"
                onMouseEnter={() => setShowFeaturesContainer(true)}
                onMouseLeave={() => setShowFeaturesContainer(false)}
                to="/solutions"
              >
                Solutions
              </Link>
              <div
                className={`menu-item ${
                  showIndustriesContainer ? "blue-text" : ""
                }`}
                id="item-3"
                onMouseEnter={() => setShowIndustriesContainer(true)}
                onMouseLeave={() => setShowIndustriesContainer(false)}
              >
                Industries
              </div>
              <div
                className={`menu-item ${
                  showResourcesContainer ? "blue-text" : ""
                }`}
                id="item-4"
                onMouseEnter={() => setShowResourcesContainer(true)}
                onMouseLeave={() => setShowResourcesContainer(false)}
              >
                Resources
              </div>
            </div>
            <button
              className="d-flex justify-content-center align-items-center"
              id="sign-up-button"
            >
              <div>Sign Up</div>
            </button>
            <div className="menu-icon" onClick={() => handleToggle()}>
              <img src="menu-icon.svg" alt="Menu Icon" />
            </div>
          </div>
        </div>
        <WhyPanopilaContainer />
        <FeaturesContainer />
        <IndustriesContainer />
        <ResourcesContainer />
        <MenuContainer />
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;

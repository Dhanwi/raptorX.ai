import React, { useState } from "react";
import { Link } from "react-router-dom";

const RaptorxFooter = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <>
      <div
        className="content-container p-2"
        style={{ marginTop: "0", backgroundColor: "#11171F" }}
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-16 p-[1rem] md:p-[3.5rem] lg:gap-8"
          style={{ width: "100%" }}
        >
          <div
            className="d-flex flex-column items-center lg:items-start gap-3 col-span-2 lg:col-span-1"
            id="footer-description"
            // style={{ maxWidth: "24.51rem" }}
          >
            <img src="assets\image\mainLogo.svg"></img>
            <div
              style={{ color: "rgba(255, 255, 255, 0.70)" }}
              className="lg:hidden text-center"
            >
              At Raptorx.ai, our technology is all about trust and safety. We
              make sure every interaction fills you with confidence.
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.70)" }}
              className="hidden text-left lg:flex"
            >
              At Raptorx.ai, our technology is all about trust and safety. We
              make sure every interaction fills you with confidence.
            </div>
          </div>
          <div
            className="flex-column gap-3 justify-center md:justify-start col-span-2 items-center lg:items-start lg:hidden flex"
            style={{ width: "100%" }}
          >
            <div className="d-flex align-items-start gap-2 opacity-50">
              <img src="assets\image\facebook-icon.svg" alt="facebook-icon" />
              <img src="assets\image\instagram-icon.svg" alt="instagram-icon" />
              <img src="assets\image\twitter-icon.svg" alt="twitter-icon" />
              <img src="assets\image\telegram-icon.svg" alt="telegram-icon" />
              <img src="assets\image\youtube-icon.svg" alt="youtube-icon" />
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.30)" }}
              className="text-center lg:text-left"
            >
              © Copyright 2023 Raptorx.ai, All rights reserved.
            </div>
          </div>
          <div
            className="flex-column align-items-start gap-3 lg:pl-32 lg:hidden flex"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            <div id="personalized-solution" className="text-center w-full">
              Company
            </div>
            <Link
              to="/why-raptorx"
              className="text-center w-full text-[#808388]"
            >
              About Us
            </Link>
            <Link to="/careers" className=" text-center w-full text-[#808388]">
              Careers
            </Link>
            <div className=" text-center w-full text-[#808388]">
              News and Press
            </div>
          </div>
          <div
            className="flex-column align-items-start gap-3 lg:pl-32 hidden lg:flex"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            <div id="personalized-solution">Company</div>
            <Link to="/why-raptorx" className="text-[#808388]">
              About Us
            </Link>
            <Link to="/careers" className="text-[#808388]">
              Careers
            </Link>
            <div className="text-[#808388]">News and Press</div>
          </div>
          <div
            className="flex-column align-items-start gap-3 lg:pl-16 flex lg:hidden"
            style={{
              maxWidth: "19.4375rem",
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            <div id="personalized-solution" className="text-center w-full">
              Support
            </div>
            <div className="text-center w-full text-[#808388]">Login</div>
            <div className="text-center w-full text-[#808388]">Developers</div>
            {/* <div className="text-center w-full text-[#808388]">Pricing</div> */}
            <div className="text-center w-full text-[#808388]">Support</div>
            <div className="text-center w-full text-[#808388]">FAQs</div>
          </div>
          <div
            className="flex-column align-items-start gap-3 lg:pl-16 hidden lg:flex"
            style={{
              maxWidth: "19.4375rem",
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            <div id="personalized-solution">Support</div>
            <div className="text-[#808388]">Login</div>
            <div className="text-[#808388]">Developers</div>
            {/* <div className="text-[#808388]">Pricing</div> */}
            <div className="text-[#808388]">Support</div>
            <div className="text-[#808388]">FAQs</div>
          </div>
          <div
            className="flex-column gap-3 justify-center md:justify-start col-span-2 items-center lg:items-start hidden lg:flex"
            style={{ width: "100%" }}
          >
            <div className="d-flex align-items-start gap-2 opacity-50">
              <img src="assets\image\facebook-icon.svg" alt="facebook-icon" />
              <img src="assets\image\instagram-icon.svg" alt="instagram-icon" />
              <img src="assets\image\twitter-icon.svg" alt="twitter-icon" />
              <img src="assets\image\telegram-icon.svg" alt="telegram-icon" />
              <img src="assets\image\youtube-icon.svg" alt="youtube-icon" />
            </div>
            <div
              style={{ color: "rgba(255, 255, 255, 0.30)" }}
              className="text-center lg:text-left"
            >
              © Copyright {currentYear} Raptorx.ai, All rights reserved.
            </div>
          </div>
        </div>
        <div className="d-flex"></div>
      </div>
      <div
        className="py-3 flex justify-center"
        id="footer-base"
        style={{ backgroundColor: "#1B2129" }}
      >
        <div className="flex justify-between md:justify-around lg:w-7/12 w-11/12">
          <div className="col-auto">
            <a
              href="/legal/terms-of-use"
              className="text-[12px] md:text-[14px]"
            >
              Terms of Use
            </a>
          </div>
          <div className="col-auto">
            <a href="/legal/compliance" className="text-[12px] md:text-[14px]">
              Compliance
            </a>
          </div>
          <div className="col-auto">
            <a href="/legal/privacy" className="text-[12px] md:text-[14px]">
              Privacy
            </a>
          </div>
          <div className="col-auto">
            <a
              href="/legal/privacy-policy"
              className="text-[12px] md:text-[14px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaptorxFooter;

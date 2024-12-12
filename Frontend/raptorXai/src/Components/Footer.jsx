import React from "react";

import "../css/Footer.css";
import ScrollToTop from "./ScrollToTop";
import Form from "./Footer/Form";
import RaptorxFooter from "./Footer/RaptorxFooter";

function Footer() {
  return (
    <>
      <ScrollToTop />
      <div className="content-container bg-[#020811]">
        <Form />
        <RaptorxFooter />
      </div>
    </>
  );
}

export default Footer;

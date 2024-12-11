import React from "react";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  // const appRef = useRef(null);

  // useGSAP(()=>{
  //   gsap.to(appRef.current, {
  //     y: 100,
  //     x: 200
  //   })
  // })

  return (
    <div className="layout-container">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;

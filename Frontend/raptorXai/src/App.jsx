import Header from "./components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="layout-container">
      <ScrollToTop />
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import { useLocation } from "react-router-dom";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Roadmap from "./components/Roadmap/Roadmap";
import Faq from "./components/Faq/Faq";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" element={<WhoWeAre />} />
        <Route path="/#choose" element={<WhyChooseUs />} />
        <Route path="/#roadmap" element={<Roadmap />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="home-two" element={<HomeTwo />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-details" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;

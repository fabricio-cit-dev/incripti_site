// Home.js

import React, {useState, useEffect} from "react";
import { useCookies } from "react-cookie";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import Roadmap from "../../components/Roadmap/Roadmap";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [cookies, setCookie] = useCookies(['cookie_consent']);

  useEffect(() => {
    const hasConsented = cookies.cookie_consent;

    if (hasConsented) {
      setShowBanner(false);
    }
  }, [cookies]);

  const handleConsent = () => {
    setCookie('cookie_consent', true, { path: '/' });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner">
        <p>Nosso site usa cookies para melhorar a navegação.</p>
        <button onClick={handleConsent}>Aceitar</button>
      </div>
    )
  );
};

const Home = () => {
  return (
    <LayoutOne>
      <main className="home">
        <CookieBanner />
        <Banner />       
        <WhoWeAre />      
        <WhyChooseUs />
        <Sales />        
        <div className="area-bg">
          <Roadmap />
        </div>
        <div className="team-wrapper">
          <TeamOne />
        </div>
      </main>
    </LayoutOne>
  );
};

export default Home;

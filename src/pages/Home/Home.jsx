// Home.js

import React, { useState, useEffect } from "react";
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
import Cookie from "../../assets/img/logo/cookies.png";
import styles from "./styles";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [cookies, setCookie] = useCookies(["cookie_consent"]);
  const [openBanner, setOpenBanner] = useState(true);

  useEffect(() => {
    const hasConsented = cookies.cookie_consent;

    if (hasConsented) {
      setShowBanner(false);
    }
  }, [cookies]);

  const handleConsent = () => {
    setCookie("cookie_consent", true, { path: "/" });
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookie("cookie_consent", false, { path: "/" });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className={openBanner ? "cookie-button" : "cookie-banner"}>
        {openBanner && (
          <button
            style={styles.button}
            onClick={() => setOpenBanner(!openBanner)}
          >
            <img src={Cookie} style={styles.imageCooke} />
          </button>
        )}

        {!openBanner && (
          <div>
            <p>Nosso site usa cookies para melhorar a navegação.</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <button
                style={{
                  backgroundColor: "#aa13b0",
                  fontWeight: "bold",
                  color: "#fff",
                  border: "none",
                  borderRadius: 15,
                  padding: "8 16",
                  fontSize: 14,
                  cursor: "pointer",
                }}
                onClick={handleDecline}
              >
                Recusar
              </button>
              <button onClick={handleConsent}>Aceitar</button>
            </div>
          </div>
        )}
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

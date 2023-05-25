import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import Roadmap from "../../components/Roadmap/Roadmap";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";
import Faq from "../../components/Faq/Faq";
import CountDownOne from "../../components/CountDown/CountDownOne";

const Home = () => {
  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
        <br/>
        <TopPartners />
        <WhoWeAre />        
        <WhyChooseUs />
        <CountDownOne />
        <Sales />
        <TeamOne />
        <div className="area-bg">
          <Roadmap />
          <Faq />
        </div>        
        <ContactOne />
      </main>
    </LayoutOne>
  );
};

export default Home;

import React from "react";
import img01 from "../../assets/img/parceiros/logo-msfintech.png";
import img02 from "../../assets/img/parceiros/Weria PNG 06 Artboard 6 Copy 4.png";
import img03 from "../../assets/img/parceiros/Logo_Newin.png";
import img04 from "../../assets/img/parceiros/AresLogo.png";
import img05 from "../../assets/img/parceiros/Bz__01_Artboard_498-removebg-preview.png";

const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "ms" },
    { src: img02, title: "weria" },
    { src: img03, title: "newin" },
    { src: img04, title: "ares" },
    { src: img05, title: "bztech" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Nossos Parceiros</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;

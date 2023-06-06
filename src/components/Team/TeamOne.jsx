import React from "react";
import img01 from "../../assets/img/team/Lucas G.png";
import img02 from "../../assets/img/team/Brenda.png";
import img03 from "../../assets/img/team/Lucas T.png";
import img04 from "../../assets/img/team/Isis.png";
import img05 from "../../assets/img/team/Mauricio.png";
import img06 from "../../assets/img/team/Matheus.png";
import img07 from "../../assets/img/team/Fabricio.png";
import img08 from "../../assets/img/team/Kevison..png";
import img09 from "../../assets/img/team/Douglas.png"
import img10 from "../../assets/img/team/Luigi.png"
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: img01,
      name: "Lucas Gasparone",
      designation: "Founder & CO",
    },
    {
      src: img03,
      name: "Lucas Tauan",
      designation: "Commercial Executive",
    },
    {
      src: img02,
      name: "Brenda Miguins",
      designation: "Designer and Social Media",
    },
    {
      src: img04,
      name: "Ísis Silva",
      designation: "Fullstack Developer",
    },
    {
      src: img05,
      name: "Maurício Azevedo",
      designation: "Fullstack Developer",
    },
    {
      src: img06,
      name: "Mateus Pequeno",
      designation: "Fullstack Developer",
    },
    {
      src: img07,
      name: "Fabrício Hiury",
      designation: "Fullstack Developer",
    },
    {
      src: img08,
      name: "Kevison Filipe",
      designation: "Fullstack Developer",
    },
    {
      src: img09,
      name: "Douglas Santos",
      designation: "UI / UX",
    },
    {
      src: img10,
      name: "Luigi Vila",
      designation: "UI / UX",
    },
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Nosso Time</span>
              <h2 className="title">
                Uma equipe de <br /> <span>Liderança</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;

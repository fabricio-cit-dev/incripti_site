import React from "react";
import shape01 from "../../assets/img/images/faq_shape01.png";
import shape02 from "../../assets/img/images/faq_shape02.png";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faq_items = [
    {
      id: "headingOne",
      controls: "collapseOne",
      expanded: true,
      btnClass: "",
      contentClass: "show",
      title: "O que sua empresa faz?",
      details: `Nossa empresa é especializada no desenvolvimento de 
      softwares personalizados para atender às necessidades 
      específicas de nossos clientes. Criamos soluções de software sob medida, 
      desde aplicativos móveis até sistemas empresariais complexos.`,
    },
    {
      id: "headingTwo",
      controls: "collapseTwo",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Como funciona o processo de desenvolvimento de software em sua empresa?",
      details: `Nosso processo de desenvolvimento de software segue uma abordagem colaborativa. 
      Começamos com uma fase de descoberta, onde entendemos as necessidades e requisitos do cliente. 
      Em seguida, passamos para o design, desenvolvimento, testes e implementação. 
      Ao longo do processo, mantemos uma comunicação próxima com o cliente para garantir que suas expectativas sejam atendidas.`,
    },
    {
      id: "headingThree",
      controls: "collapseThree",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Quais são as tecnologias com as quais sua empresa trabalha?",
      details: `Trabalhamos com uma ampla gama de tecnologias, 
      incluindo linguagens de programação como Java, C#, Python, 
      JavaScript, frameworks como React, Angular, Vue.js, 
      bancos de dados como MySQL, PostgreSQL, MongoDB e 
      plataformas de nuvem como AWS, Azure e Google Cloud.`,
    },
    {
      id: "headingFour",
      controls: "collapseFour",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Como garantem a segurança dos softwares desenvolvidos?",
      details: `A segurança é uma prioridade para nós. 
      Seguimos as melhores práticas de segurança no desenvolvimento de software, 
      implementando medidas como criptografia de dados, autenticação e autorização adequadas, 
      proteção contra ataques de segurança conhecidos e 
      realizando testes rigorosos de segurança durante todo o processo de desenvolvimento.`,
    },
    {
      id: "headingFive",
      controls: "collapseFive",
      expanded: false,
      btnClass: "collapsed",
      contentClass: "",
      title: "Quanto tempo leva para desenvolver um software personalizado?",
      details: `O tempo de desenvolvimento varia dependendo da complexidade e escopo do projeto. 
      Projetos menores podem levar algumas semanas, enquanto projetos mais complexos podem levar vários meses. 
      Durante a fase de descoberta, trabalhamos em estreita colaboração com o cliente para estabelecer 
      um cronograma realista e transparente.`,
    },
  ];

  return (
    <section id="faq" className="faq-area">
      <div className="container custom-container-four">
        <div className="faq-shape-wrap">
          <img src={shape01} alt="" className="img-one" />
          <img src={shape02} alt="" className="img-two rotateme" />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="section-title section-title-two text-center mb-60">
              <h2 className="title-faq">Perguntas Frequentes</h2>
            </div>

            <div className="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div className="accordion" id="accordionExample">
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

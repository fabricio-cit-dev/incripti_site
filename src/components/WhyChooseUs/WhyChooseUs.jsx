import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/Icon 03 TEAM.png";
import icon02 from "../../assets/img/icon/Icon UI-UX.png";
import icon03 from "../../assets/img/icon/Untitled-33 05 Digital transformation.png";
import icon04 from "../../assets/img/icon/Icon 01 SOFTWARE.png";
import icon05 from "../../assets/img/icon/Icon 02 ERP.png";
import WhyChooseUsItem from "./WhyChooseUsItem";
import CountDownOne from "../CountDown/CountDownOne";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Team Allocation",
      description: `Impulsione seus projetos com equipes altamente qualificadas. Nossa alocação
      estratégica garante que você tenha os especialistas certos para atender às
      demandas do seu projeto. Aumente a eficiência e acelere o sucesso com talentos
      sob medida."`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "UI / UX",
      description: `Encante seus clientes com designs envolventes e experiências do usuário
      intuitivas. Nossa abordagem centrada no usuário combina pesquisa, análise e
      criatividade para criar interfaces atraentes e funcionais. Destaque-se no mercado
      com soluções de UI/UX de alta qualidade.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Digital Transformation",
      description: `Prepare-se para o futuro digital e conquiste uma vantagem competitiva. Nossa
      abordagem de transformação digital combina estratégia, tecnologia e mudança
      organizacional. Trabalhamos em parceria com você para identificar oportunidades,
      implementar soluções inovadoras e impulsionar a transformação em toda a sua
      organização.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Desenvolvimento de Software",
      description: `Crie soluções de software personalizadas que atendam às suas necessidades
      exclusivas. Nossa equipe de desenvolvedores altamente qualificados segue um
      processo ágil, desde a análise de requisitos até o desenvolvimento e entrega do
      software. Transforme sua visão em realidade com soluções de software sob
      medida.`,
    },                  
    {
      src: icon05,
      alt: "",
      link: "/",
      title: "ERP",
      description: `Obtenha o máximo do seu sistema ERP TOTVS Protheus com nossa consultoria
      especializada. Nossos consultores experientes em Protheus realizam análises
      detalhadas, identificam oportunidades de otimização e implementam soluções
      personalizadas. Alcance a eficiência operacional e o sucesso com nossa expertise
      em Protheus.`,
    },                  
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Team Allocation",
      description: `Impulsione seus projetos com equipes altamente qualificadas. Nossa alocação
      estratégica garante que você tenha os especialistas certos para atender às
      demandas do seu projeto. Aumente a eficiência e acelere o sucesso com talentos
      sob medida."`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "UI / UX",
      description: `Encante seus clientes com designs envolventes e experiências do usuário
      intuitivas. Nossa abordagem centrada no usuário combina pesquisa, análise e
      criatividade para criar interfaces atraentes e funcionais. Destaque-se no mercado
      com soluções de UI/UX de alta qualidade.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Digital Transformation",
      description: `Prepare-se para o futuro digital e conquiste uma vantagem competitiva. Nossa
      abordagem de transformação digital combina estratégia, tecnologia e mudança
      organizacional. Trabalhamos em parceria com você para identificar oportunidades,
      implementar soluções inovadoras e impulsionar a transformação em toda a sua
      organização.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Desenvolvimento de Software",
      description: `Crie soluções de software personalizadas que atendam às suas necessidades
      exclusivas. Nossa equipe de desenvolvedores altamente qualificados segue um
      processo ágil, desde a análise de requisitos até o desenvolvimento e entrega do
      software. Transforme sua visão em realidade com soluções de software sob
      medida.`,
    },                  
    {
      src: icon05,
      alt: "",
      link: "/",
      title: "ERP",
      description: `Obtenha o máximo do seu sistema ERP TOTVS Protheus com nossa consultoria
      especializada. Nossos consultores experientes em Protheus realizam análises
      detalhadas, identificam oportunidades de otimização e implementam soluções
      personalizadas. Alcance a eficiência operacional e o sucesso com nossa expertise
      em Protheus.`,
    },                  
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old === 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <br />
              <span className="sub-title">Por que nos escolher? </span>
              <h2 className="title">
                Por que somos os melhores para o seu <span>negócio?</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        {/*<div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
          </div> */}
        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;

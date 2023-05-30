import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/choose_icon01.svg";
import icon02 from "../../assets/img/icon/choose_icon02.svg";
import icon03 from "../../assets/img/icon/choose_icon03.svg";
import icon04 from "../../assets/img/icon/choose_icon04.svg";
import icon05 from "../../assets/img/icon/choose_icon05.svg";
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
      description: `Contamos com uma equipe especializada e altamente 
      capacitada para alocar os melhores profissionais de desenvolvimento em seus projetos. Trabalhamos em conjunto para alcançar 
      resultados excepcionais.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "UI / UX",
      description: `Acreditamos na importância de uma experiência de usuário incrível. Nossa equipe de design 
      cria interfaces intuitivas e visualmente atraentes, garantindo que seus usuários se encantem com seu software.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Digital Transformation",
      description: `Ajudamos sua empresa a se adaptar e prosperar na era digital. 
      Através de soluções inovadoras, transformamos processos tradicionais em experiências digitais eficientes e modernas.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Software",
      description: `Desenvolvemos software personalizado que atende às 
      necessidades exclusivas do seu negócio. Do planejamento à implementação, criamos soluções de software poderosas e escaláveis.`,
    },                  
    {
      src: icon05,
      alt: "",
      link: "/",
      title: "ERP",
      description: `Simplifique sua gestão empresarial com nosso sistema integrado de recursos. 
      Nosso ERP oferece uma visão abrangente e centralizada de suas operações, impulsionando a eficiência e o crescimento.`,
    },                
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Team Allocation",
      description: `Contamos com uma equipe especializada e altamente 
      capacitada para alocar os melhores profissionais de desenvolvimento em seus projetos. Trabalhamos em conjunto para alcançar 
      resultados excepcionais.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "UI / UX",
      description: `Acreditamos na importância de uma experiência de usuário incrível. Nossa equipe de design 
      cria interfaces intuitivas e visualmente atraentes, garantindo que seus usuários se encantem com seu software.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Digital Transformation",
      description: `Ajudamos sua empresa a se adaptar e prosperar na era digital. 
      Através de soluções inovadoras, transformamos processos tradicionais em experiências digitais eficientes e modernas.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Software",
      description: `Desenvolvemos software personalizado que atende às 
      necessidades exclusivas do seu negócio. Do planejamento à implementação, criamos soluções de software poderosas e escaláveis.`,
    },                  
    {
      src: icon05,
      alt: "",
      link: "/",
      title: "ERP",
      description: `Simplifique sua gestão empresarial com nosso sistema integrado de recursos. 
      Nosso ERP oferece uma visão abrangente e centralizada de suas operações, impulsionando a eficiência e o crescimento.`,
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

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>
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

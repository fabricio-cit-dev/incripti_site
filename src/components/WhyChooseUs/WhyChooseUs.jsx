import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/choose_icon01.svg";
import icon02 from "../../assets/img/icon/choose_icon02.svg";
import icon03 from "../../assets/img/icon/choose_icon03.svg";
import icon04 from "../../assets/img/icon/choose_icon04.svg";
import WhyChooseUsItem from "./WhyChooseUsItem";

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
      title: "Preços competitivos",
      description: `Oferecemos soluções de software de qualidade a preços acessíveis, proporcionando um excelente retorno 
      sobre o investimento para o seu negócio.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Qualidade Excepcional",
      description: `Nossos softwares são desenvolvidos com alto padrão de qualidade, garantindo funcionalidade, 
      usabilidade e desempenho superiores.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Privacidade Garantida",
      description: `Respeitamos a privacidade dos dados de nossos clientes e asseguramos a confidencialidade absoluta das informações do seu negócio.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Segurança em Primeiro Lugar",
      description: `Protegemos seus dados com rigor, adotando as melhores práticas de segurança cibernética. 
      Sua tranquilidade é nossa prioridade.`,
    },                   
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Preços competitivos",
      description: `Oferecemos soluções de software de qualidade a preços acessíveis, proporcionando um excelente retorno 
      sobre o investimento para o seu negócio.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Qualidade Excepcional",
      description: `Nossos softwares são desenvolvidos com alto padrão de qualidade, garantindo funcionalidade, 
      usabilidade e desempenho superiores.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Privacidade Garantida",
      description: `Respeitamos a privacidade dos dados de nossos clientes e asseguramos a confidencialidade absoluta das informações do seu negócio.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Segurança em Primeiro Lugar",
      description: `Protegemos seus dados com rigor, adotando as melhores práticas de segurança cibernética. 
      Sua tranquilidade é nossa prioridade.`,
    },                   
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
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

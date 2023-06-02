import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Step 1",
      title: "Pesquisa e Desenvolvimento",
      info: [
        "Investimos em inovação, explorando tecnologias e metodologias para",
        " oferecer soluções de software ",
        "de ponta.",
      ],
    },
    {
      roadmapTitle: "Step 2",
      title: "Design de Software",
      info: [
        "Criamos uma arquitetura sólida e uma interface intuitiva para proporcionar",
        "uma experiência excepcional aos usuários.",
      ],
    },

    {
      roadmapTitle: "Step 3",
      title: "Desenvolvimento do Software",
      info: [
        "Transformamos o design em código de alta qualidade, implementando as",
        "funcionalidades e recursos do software.",
      ],
    },

    {
      roadmapTitle: "Step 4",
      title: "Testes",
      info: [
        "Realizamos testes rigorosos para garantir", 
        "que o software atenda aos requisitos e", 
        "funcione corretamente em diferentes cenários.",
      ],
    },
    {
      roadmapTitle: "Step 5",
      title: "Aprovação do Cliente",
      info: [
        "Apresentamos o software para sua revisão e validação, ajustando-o ", 
        "conforme suas necessidades e feedback.",
      ],
    },
    {
      roadmapTitle: "Step 6",
      title: "Implantação",
      info: [
        "Configuramos e implementamos o software em seu ambiente de ", 
        "produção, garantindo uma transição", 
        "suave e eficiente.",
      ],
    },
    {
      roadmapTitle: "Step 7",
      title: "Suporte e Manutenção",
      info: [
        <>
          Fornecemos assistência técnica e manutenção contínua
          para garantir que o software continue operando de maneira 
          adequada e atualizada.  
        </>,
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Nosso Processo de Desenvolvimento</span>
              <h2 className="title">
              Construindo Soluções de Software com <span>Excelência</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

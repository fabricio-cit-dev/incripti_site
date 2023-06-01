import React from "react";
import { useState } from "react";
import styles from "./styles";

import IconNest from "../../assets/img/icon/play.png";
import aparty from "../../assets/img/projects/APARTY MOCKUP 2.png";
import Ares from "../../assets/img/projects/ares mockup sem fundo.png";
import ms from "../../assets/img/projects/mockup ms sem fundo.png";
import cl from "../../assets/img/projects/mockup tela sem fundo.png";

const Sales = () => {
  let portfolio = [
    {
      id: 1,
      image: ms,
      title: "Alguns de nossos projetos",
      description:
        "Estamos sempre à procura das melhores linguagens e frameworks afim de oferecer o que há de melhor no mercado.",
    },
    {
      id: 2,
      image: cl,
      title: "Alguns de nossos projetos",
      description:
        "Estamos sempre buscando o que há de melhor no mercado, para oferecer soluções inovadoras e de qualidade excepcional.",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const showPreviousItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    }
  };

  const showNextItem = () => {
    if (currentItemIndex < portfolio.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };

  const currentItem = portfolio[currentItemIndex];

  console.log('CURRET', currentItem)
  return (
    <section id="portfolio" className="chart-area chart-bg ">
      <div style={styles.header}>
        <div className="texto-projetos">
          <tr>{currentItem.title}</tr>
          <td>{currentItem.description}</td>
        </div>

        <div style={styles.containerImage}>
          <div class="slide">
            <img
              src={currentItem.image}
              alt="ms-project"
              style={{ marginLeft: "30%" }}
            />
          </div>
        </div>
      </div>

      <div style={styles.containerButtons}>
        <button style={styles.button} onClick={showPreviousItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageLeftSide} />
        </button>
        <button style={styles.button} onClick={showNextItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageRightSide} />
        </button>
      </div>
    </section>
  );
};

export default Sales;

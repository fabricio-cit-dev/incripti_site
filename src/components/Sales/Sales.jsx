import React, { useState, useEffect } from "react";
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
      description: "Software",
      changingText: "personalizado",
      endtext: "para seu negócio",
    },
    {
      id: 2,
      image: cl,
      description: "Software",
      changingText: "sob medida",
      endtext: "para seu negócio",
    },
    {
      id: 3,
      image: Ares,
      description: "Software",
      changingText: "exclusivo",
      endtext: "para seu negócio",
    },
    {
      id: 4,
      image: aparty,
      description: "Software",
      changingText: "especializado",
      endtext: "para seu negócio",
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
    } else {
      setCurrentItemIndex(0); // Volta para o primeiro item
    }
  };

  const currentItem = portfolio[currentItemIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      showNextItem();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentItemIndex]);

  return (
    <section id="portfolio" className="chart-area chart-bg ">
      <div className="sub-title-div">
        <span className="sub-title-about">Alguns de nossos projetos</span>
      </div>
      <div className="projetos" style={styles.header}>
        <div className="texto-projetos">
          <td>
            {currentItem.description} <tr> {currentItem.changingText} </tr>{" "}
            <br />
            {currentItem.endtext}
          </td>
        </div>

        <div style={styles.containerImage}>
          <div class="slide">
            <img
              src={currentItem.image}
              alt="ms-project"
              style={{ marginLeft: "0" }}
            />
          </div>
        </div>
      </div>

      <div style={styles.containerButtons}>
        <button style={styles.button} onClick={showPreviousItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageLeftSide} />
        </button>
        <hr style={styles.separator} />
        <button style={styles.button} onClick={showNextItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageRightSide} />
        </button>
      </div>
    </section>
  );
};

export default Sales;

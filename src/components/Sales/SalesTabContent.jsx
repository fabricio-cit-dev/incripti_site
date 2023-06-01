import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: "smooth" });
  }
};
const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <p>{props.description}</p>
        <Link to="https://wa.me/+5561983463082" className="btn">
          Faça seu projeto conosco
        </Link>
      </div>
    </div>
  );
};

export default SalesTabContent;

import React from "react";
import cn from "classnames";

const SalesTabButton = (props) => {
  return (
    <li className="nav-item">
      <a
        className={cn("nav-link", { active: props.className === "active" })}
        id={props.id}
        data-toggle="tab"
        href={`#${props.id}`}
        role="tab"
        aria-controls={props.id}
        aria-selected={props.className === "active"}
      >
        {props.title}
      </a>
    </li>
  );
};

export default SalesTabButton;

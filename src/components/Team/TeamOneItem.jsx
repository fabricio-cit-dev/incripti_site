import React from "react";

const TeamOneItem = (props) => {
  return (
    <div className="team-item">
      <div className="team-thumb">
        <img src={props.item.src} alt={props.item.name} />
      </div>
      <div className="team-content">
        <h2 className="title">{props.item.name}</h2>
        <span>{props.item.designation}</span>
      </div>
    </div>
  );
};

export default TeamOneItem;

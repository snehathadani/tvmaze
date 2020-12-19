import React from "react";
import "./Cards.css";

export const Cards = (props) => {
  const showImg = () => {
    if (props.shows.image) {
      console.log("working", props.shows.image.original);
      return <img src={props.shows.image.medium} alt="original" />;
    }
  };
  return (
    <div className="card-container">
      <h1>{props.shows.name}</h1>
      <div className="card-content">
        {showImg()}
        <div dangerouslySetInnerHTML={{ __html: props.shows.summary }}></div>
      </div>
    </div>
  );
};

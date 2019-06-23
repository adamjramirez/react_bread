import React from "react";
import { Link } from "@reach/router";

const Recipe = props => {
  const { name, bread, flour, media, duration, id } = props;

  let hero = "";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="recipe">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${bread} — ${flour} — ${duration}`}</h2>
      </div>
    </Link>
  );
};

export default Recipe;
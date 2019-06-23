import React from "react";
import Recipe from "./Recipe";

const Results = ({ recipes }) => {
  return (
    <div className="search">
      {!recipes.length ? (
        <h1>No Recipes Found</h1>
      ) : (
        recipes.map(recipe => {
          return (
            <Recipe
              animal={recipe.type}
              key={recipe.id}
              name={recipe.name}
              breed={recipe.breeds.primary}
              media={recipe.photos}
              location={`${recipe.contact.address.city}, ${
                recipe.contact.address.state
              }`}
              id={recipe.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
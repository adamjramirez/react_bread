import React, { useState, useEffect, useContext } from "react";
//import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [duration, updateDuration] = useState("Seattle, WA");
  const [flours, updateFlours] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [bread, BreadDropdown] = useDropdown("Flour Type", "White (550)", ["White (550)", "Rye"]);
  const [flour, FlourDropdown, updateFlour] = useDropdown("Flavor", "", ["Light", "Sour"]);
  const recipe = ["White (550)", "Light", "22"];

  async function requestRecipes() {
    const { breads } = await recipes.bread({
      mainFlour,
      flavor,
      duration,
      type: bread
    });

    console.log("breads", breads);

    setRecipes(breads || []);
  }

  useEffect(() => {
    updateFlours([]);
    updateFlour("");
  }, [bread]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestRecipes();
        }}
      >
        <label htmlFor="duration">
          Duration
          <input
            id="duration"
            value={duration}
            placeholder="Duration"
            onChange={e => updateDuration(e.target.value)}
          />
        </label>
        <BreadDropdown />
        <FlourDropdown />
        </form>
      <Results recipes={recipes} />
    </div>
  );
};

export default SearchParams;
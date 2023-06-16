import React from "react";
import "./App.css";
import Button from "./Components/Button";
import RecipeForm from "./Components/RecipeForm";
import { useState } from "react";
import Recipe from "./model";

const App: React.FC<{}> = () => {
  const [recipe, setRecipe] = useState<Recipe[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    async function fetchingData(): Promise<any> {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        setRecipe(data);
        if (response.ok) {
          // Success (Good Response)
          return data;
        } else {
          // Failure (Bad Response)
          console.error("Bad Response");
        }
      } catch (error) {
        // Failure (Network error, etc)
        console.error(error);
      }
    }
    fetchingData();
  };

  return (
    <div className="App">
      <h2>Feeling Hungry?</h2>
      <h3>get a random Meal by clicking below</h3>
      <Button handleClick={handleClick} />
      <RecipeForm recipeData={recipe} />
    </div>
  );
};

export default App;

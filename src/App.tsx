import React from "react";
import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";

interface ObjectRecipe {
  [meal: string]: any;
}

const App: React.FC<{}> = (): any => {
  const [recipe, setRecipe] = useState<{ [key: string]: any }>({});

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
  console.log(recipe.meals);

  const ingridiets : Array<string> = []

  for (let i = 1; i<= 20; i++){
    if(recipe.meals.)
    }
  }

  return (
    <>
      <div className="App">
        <h2>Feeling Hungry?</h2>
        <h3>get a random Meal by clicking below</h3>
        <Button handleClick={handleClick} />
      </div>
      {recipe.meals?.map((meal: ObjectRecipe) => {
        return (
          <>
            <div className="recipeDiv">
              <h3>{meal.strMeal}</h3>
            </div>
            <div className="ratio ratio-16x9">
              <h4>Video Recipe</h4>
              <iframe
                id="YoutubeVideo"
                key={meal.idMeal}
                src={`https://www.youtube.com/embed/${meal.strYoutube}`}
                title="YouTube video"
              ></iframe>
            </div>
            <div className="ingridientDiv">
              <h4>Ingridients:</h4>
              <p></p>
            </div>
            <span className="instructoinSpan">
              <h4>Instruction</h4>
              <p>{meal.strInstructions}</p>
              <img key={meal.idMela} src={meal.strMealThumb} alt="mealPic" />
            </span>
          </>
        );
      })}
    </>
  );
};

export default App;

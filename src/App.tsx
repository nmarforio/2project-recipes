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

  return (
    <>
      <div className="App">
        <div className="button">
          <h2>Feeling Hungry?</h2>
          <h3>get a random Meal by clicking below</h3>
          <Button handleClick={handleClick} />
        </div>

        {recipe.meals?.map((meal: ObjectRecipe) => {
          return (
            <>
              <div className="mealTitle">
                <h3>{meal.strMeal}</h3>
                <img
                  key={meal.idMela}
                  src={meal.strMealThumb}
                  alt="mealPic"
                  width={300}
                  height={300}
                />
              <div className="ingridientDiv">
                <h4>Ingridients:</h4>
                <p>
                  {meal.strIngredient1} {meal.strMeasure1}
                </p>
                <p>
                  {meal.strIngredient2} {meal.strMeasure2}
                </p>
                <p>
                  {meal.strIngredient3} {meal.strMeasure3}
                </p>
                <p>
                  {meal.strIngredient4} {meal.strMeasure4}
                </p>
                <p>
                  {meal.strIngredient5} {meal.strMeasure5}
                </p>
                <p>
                  {meal.strIngredient6} {meal.strMeasure6}
                </p>
                <p>
                  {meal.strIngredient7} {meal.strMeasure7}
                </p>
                <p>
                  {meal.strIngredient8} {meal.strMeasure8}
                </p>
                <p>
                  {meal.strIngredient9} {meal.strMeasure9}
                </p>
                <p>
                  {meal.strIngredient10} {meal.strMeasure10}
                </p>
                <p>
                  {meal.strIngredient11} {meal.strMeasure11}
                </p>
                <p>
                  {meal.strIngredient12} {meal.strMeasure12}
                </p>
                <p>
                  {meal.strIngredient13} {meal.strMeasure13}
                </p>
                <p>
                  {meal.strIngredient14} {meal.strMeasure14}
                </p>
                <p>
                  {meal.strIngredient15} {meal.strMeasure15}
                </p>
                <p>
                  {meal.strIngredient16} {meal.strMeasure16}
                </p>
                <p>
                  {meal.strIngredient17} {meal.strMeasure17}
                </p>
                <p>
                  {meal.strIngredient18} {meal.strMeasure18}
                </p>
                <p>
                  {meal.strIngredient19} {meal.strMeasure19}
                </p>
                <p>
                  {meal.strIngredient20} {meal.strMeasure20}
                </p>
              </div>
              </div>
              <div className="ratio">
                <h4>Video Recipe</h4>
                <iframe
                  id="YoutubeVideo"
                  key={meal.idMeal}
                  src={`https://www.youtube.com/embed/${meal.strYoutube}`}
                  title="YouTube video"
                ></iframe>
              </div>

              <span className="instructoinSpan">
                <h4>Instruction</h4>
                <p>{meal.strInstructions}</p>
              </span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;

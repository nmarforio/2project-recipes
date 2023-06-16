import React from "react";
import Recipe from "../model";

interface Props {
    recipeData: Recipe[];

}

const RecipeForm = ({ recipeData }: Props) => {
  console.log(recipeData);
//  const myRecipe: Array<string> =  recipeData.meals.map((meal)=>{
//     return meal 
//   })
//   console.log(myRecipe)
  return (
    <div>
      <p>Hola</p>
    </div>
  );
};

export default RecipeForm;

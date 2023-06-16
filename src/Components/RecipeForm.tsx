interface Props {
    recipeData: {[key: string]: any;}
}
interface ObjectRecipe {
  [meal: string]: any;
}

const RecipeForm = ( {recipeData} : Props) : void => {
  recipeData.meals?.forEach((meal: object) => console.log(meal, "ForEach"));
  recipeData.meals?.map(
    (meal: ObjectRecipe) => {
      return (
        <div>
          <p>{meal.strMeal}</p>
        </div>
      );
    }
  );
};

export default RecipeForm;



interface Props {
  recipeData: {
    [key: string]: any;
  };
}
interface ObjectRecipe { [meal: string]: any;}

// array.map(val => <IKeys>{
//   key1: val.key1,
//   key2: val.key2
// });

const RecipeForm = ({ recipeData }: Props) => {
  recipeData.meals?.forEach((meal: object) => console.log(meal, "ForEach"));
  const objectRecipe: Array<object> = recipeData.meals?.map((meal : ObjectRecipe) => {
    return console.log(meal, "MAP")
  })
  


  return (
    <div>
      <p>a</p>
    </div>
  );
};

export default RecipeForm;

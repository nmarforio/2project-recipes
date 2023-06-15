import React from "react";


interface Props{
  handleClick : (e: React.MouseEvent) => void
}

const Button = ({handleClick} :Props) => {
  return (
    <form className="buttonForm">
      <button className="buttonMeal" type="button" onClick={(e)=>handleClick(e)}>
        Get A Meal!
      </button>
    </form>
  );
};

export default Button;

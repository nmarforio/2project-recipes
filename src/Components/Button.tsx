import React from "react";


interface Props {
  handleClick: (e: React.FormEvent) => void;
}

const Button = ({ handleClick }: Props) => {
  return (
    <form className="buttonForm" onSubmit={(e)=>handleClick(e)}>
      <button className="buttonMeal" type="submit">
        Get A Meal!
      </button>
    </form>
  );
};

export default Button;

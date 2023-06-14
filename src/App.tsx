import React from "react";
import "./App.css";
import Button from "./Components/Button";
import { useEffect, useState } from "react";
import { Service } from "./models";
import { Meal } from "./models";

interface Meals {
  resutls: Meal[];
}

const App: React.FC = () => {
  const [meal, setMeal] = useState<Service<Meals>>({ status: "loading" });

  const HandleCLick = (e: React.FormEvent) => {
    e.preventDefault();
    useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((response) => setMeal({ status: "loaded", payload: response }))
        .catch((error) => setMeal({ status: "error", error }));
    }, []);
    return meal;
  };

  return (
    <div className="App">
      <h1>Feeling Hungry?</h1>
      <Button handleClick={HandleCLick} />
    </div>
  );
};

export default App;

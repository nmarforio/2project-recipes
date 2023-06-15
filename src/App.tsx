import React from "react";
import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState<string>("");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    async function fetchingData(): Promise<any> {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        setData(data);
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

  console.log(data)
  return (
    <div className="App">
      <h1>Feeling Hungry?</h1>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default App;

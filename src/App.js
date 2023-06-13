import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import AdviceApp from "./components/AdviceApp/AdviceApp";

const API_URL = "https://api.adviceslip.com/advice";
const addv1 = {
  id: 132,
  advice: "Repeat people's names when you meet them.",
};
const App = () => {
  const [advices, setAdvice] = useState([]);

  const myAdvice = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    myAdvice("Repeat people's names when you meet them.");
  }, [advices]);

  return (
    <>
      <div className="container">
        {advices.forEach((advice) => {
          <AdviceApp advice={advice} />;
        })}
      </div>
    </>
  );
};
export default App;

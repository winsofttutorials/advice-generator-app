import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import dice from "./components/images/icon-dice.svg";
import AdviceApp from "./components/AdviceApp/AdviceApp";

const API_URL = "https://api.adviceslip.com/advice";
const App = () => {
  const [advices, setAdvices] = useState([]);

  const myAdvice = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setAdvices(data.slip);
  };

  useEffect(() => {
    myAdvice(API_URL);
  }, []);

  return (
    <>
      <div className="container">
        <AdviceApp advices={advices} />
        <button className="button">
          <img src={dice} alt="icon-dice" onClick={() => myAdvice(API_URL)} />
        </button>
      </div>
    </>
  );
};
export default App;

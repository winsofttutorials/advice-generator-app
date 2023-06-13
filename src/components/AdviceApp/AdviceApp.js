import React from "react";
import "./AdviceApp.css";

// import dice from "../images/icon-dice.svg";

const AdviceApp = ({ advices }) => {
  return (
    <div className="adv-wrapper">
      <div className="adv-container">
        <h1>ADVICE #{advices.id}</h1>
        <div>
          <h3>{advices.advice}</h3>
        </div>
        <div className="icondivide"></div>
      </div>
    </div>
  );
};

export default AdviceApp;

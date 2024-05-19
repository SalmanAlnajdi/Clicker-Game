import React, { useState } from "react";
import "../App.css";

const Clicker = () => {
  const BOOSTS_MILESTONES = [20, 40, 100];
  const [counter, setCounter] = useState(0);
  const [fils, setFils] = useState(0);
  const [boost, setBoost] = useState(1);

  const userClick = () => {
      setCounter(counter + boost);
      setFils(fils + boost);
  
  };

  function tradeFilsWithBoosts() {
      setBoost(boost + 1);
      setFils(fils - BOOSTS_MILESTONES[boost - 1]);
  }

  return (
    <>
      <div className="clickerCard">
        <h1> Cookies : {counter}</h1>
        <h5>Fils : {fils}</h5>

   
        <button onClick={userClick}>Click Here</button>
      </div>

      {
        fils >= BOOSTS_MILESTONES[boost-1] && <div className="shopCard">
        <h4>Boost your Cookies in {BOOSTS_MILESTONES[boost-1]} Fils</h4>
        <button onClick={tradeFilsWithBoosts}>Click Here</button>
      </div>
      }
      
    </>
  );
};

export default Clicker;

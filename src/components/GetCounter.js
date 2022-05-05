import React from "react";
import { useSelector } from "react-redux";

function GetCounter() {
  // 2nd way to get counter using useSelector hook
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <div
        style={{
          backgroundColor: "#999",
          width: "450px",
          margin: "0 auto",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h4>This component show the counter got from store using hook</h4>
        <div style={{fontSize: '25px'}}>{counter}</div>
      </div>
    </>
  );
}

export default GetCounter;

import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./style.css";

const CalculateHypotenuse = forwardRef(({ isShow }, hypotenuseRef) => {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [output, setOutput] = useState("");

  const inputOneHandler = (e) => {
    setBase(e.target.value);
  };
  const inputTwoHandler = (e) => {
    setHeight(e.target.value);
  };

  const checkBtnHandler = (e) => {
    e.preventDefault();
    let squareOfBase = Number(base) * Number(base);
    let squareOfHeight = Number(height) * Number(height);
    let result = Math.sqrt(squareOfBase + squareOfHeight).toFixed(2);
    setOutput(
      `Hypotenuse of this triangle with base ${base} units and height ${height} units is ${result} units.`
    );
  };

  const initialStateHandler = () => {
    setBase("");
    setHeight("");
    setOutput("");
  };

  useImperativeHandle(hypotenuseRef, () => {
    return {
      initialStateHandler: initialStateHandler,
    };
  });

  return (
    <div style={{ display: `${isShow}` }}>
      <p style={{ textAlign: "center" }}>
        Enter base & height of right angle triangle.
      </p>
      <form className="is-triangle-div" onSubmit={checkBtnHandler}>
        <input
          onChange={inputOneHandler}
          value={base}
          type="number"
          required
          placeholder="base"
        />
        <input
          onChange={inputTwoHandler}
          value={height}
          type="number"
          required
          placeholder="height"
        />
        <button className="button" type="submit">
          Calculate
        </button>
      </form>
      <div className="output-result">{output}</div>
    </div>
  );
});

export default CalculateHypotenuse;

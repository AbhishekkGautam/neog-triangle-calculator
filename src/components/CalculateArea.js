import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./style.css";

const CalculateArea = forwardRef(({ isShow }, areaRef) => {
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
    let result = (0.5 * base * height).toFixed(2);
    setOutput(
      `Area of this triangle with base ${base} units and height ${height} units is ${result} sq units.`
    );
  };

  const initialStateHandler = () => {
    setBase("");
    setHeight("");
    setOutput("");
  };

  useImperativeHandle(areaRef, () => {
    return {
      initialStateHandler: initialStateHandler,
    };
  });

  return (
    <div style={{ display: `${isShow}` }}>
      <p>Enter base & height of a triangle.</p>
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
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "1.5rem",
          fontSize: "1.3rem",
        }}
      >
        {output}
      </div>
    </div>
  );
});

export default CalculateArea;

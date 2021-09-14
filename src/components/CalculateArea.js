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
    if (base > 0 && height > 0) {
      let result = (0.5 * base * height).toFixed(2);
      setOutput(
        `Area of this triangle with base ${base} units and height ${height} units is ${result} sq units.`
      );
    } else {
      setOutput("Values must be greater than 0.");
    }
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
      <p style={{ textAlign: "center" }}>Enter base & height of a triangle.</p>
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

export default CalculateArea;

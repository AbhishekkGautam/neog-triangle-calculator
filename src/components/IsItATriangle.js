import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./style.css";

const IsItATriangle = forwardRef(({ isShow }, isTriangleRef) => {
  const [angleOne, setAngleOne] = useState("");
  const [angleTwo, setAngleTwo] = useState("");
  const [angleThree, setAngleThree] = useState("");
  const [output, setOutput] = useState("");

  const inputOneHandler = (e) => {
    setAngleOne(e.target.value);
  };
  const inputTwoHandler = (e) => {
    setAngleTwo(e.target.value);
  };
  const inputThreeHandler = (e) => {
    setAngleThree(e.target.value);
  };

  const checkBtnHandler = (e) => {
    e.preventDefault();
    let sumofAngles = Number(angleOne) + Number(angleTwo) + Number(angleThree);
    if (sumofAngles === 180) {
      setOutput("Yeah! these angles can make a triangle.");
    } else {
      setOutput("Oops! these angles cannot make a triangle");
    }
  };

  const initialStateHandler = () => {
    setAngleOne("");
    setAngleTwo("");
    setAngleThree("");
    setOutput("");
  };

  useImperativeHandle(isTriangleRef, () => {
    return {
      initialStateHandler: initialStateHandler,
    };
  });

  return (
    <div style={{ display: `${isShow}` }}>
      <p>
        Enter the angles and check to see if those angles can make a triangle or
        not.
      </p>
      <form className="is-triangle-div" onSubmit={checkBtnHandler}>
        <input
          onChange={inputOneHandler}
          value={angleOne}
          type="number"
          required
          placeholder="angle"
        />
        <input
          onChange={inputTwoHandler}
          value={angleTwo}
          type="number"
          required
          placeholder="angle"
        />
        <input
          onChange={inputThreeHandler}
          value={angleThree}
          type="number"
          required
          placeholder="angle"
        />
        <button className="button" type="submit">
          Check
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

export default IsItATriangle;

import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./style.css";

const TypesOfTriangleSide = forwardRef(({ isShow }, typeSideRef) => {
  const [firstSide, setFirstSide] = useState("");
  const [secondSide, setSecondSide] = useState("");
  const [thirdSide, setThirdSide] = useState("");
  const [output, setOutput] = useState("");
  const [radioInput, setRadioInput] = useState("");

  const sides = [
    [4, 6, 8],
    [3, 3, 3],
    [7, 5, 5],
    [6, 6, 6],
    [8, 8, 2],
    [3, 6, 7],
    [5, 4, 4],
    [3, 10, 5],
    [5, 3, 5],
    [8, 8, 8],
  ];

  const randomSideGenerator = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(sides.length));
    setFirstSide(sides[randomIndex][0]);
    setSecondSide(sides[randomIndex][1]);
    setThirdSide(sides[randomIndex][2]);
  };

  const radioInputHandler = (e) => {
    setRadioInput(e.target.value);
  };

  const checkBtnHandler = (e) => {
    e.preventDefault();
    if (
      Number(firstSide) === Number(secondSide) &&
      Number(secondSide) === Number(thirdSide) &&
      radioInput === "equilateral"
    ) {
      setOutput("Congrats! Your answer is correct.");
    } else if (
      (Number(firstSide) === Number(secondSide) ||
        Number(secondSide) === Number(thirdSide) ||
        Number(firstSide) === Number(thirdSide)) &&
      radioInput === "isosceles"
    ) {
      setOutput("Congrats! Your answer is correct.");
    } else if (
      Number(firstSide) !== Number(secondSide) &&
      Number(secondSide) !== Number(thirdSide) &&
      Number(firstSide) !== Number(thirdSide) &&
      radioInput === "scalene"
    ) {
      setOutput("Congrats! Your answer is correct.");
    } else {
      setOutput("Oops! Your answer is incorrect, play again.");
    }
  };

  const initialStateHandler = () => {
    setFirstSide("");
    setSecondSide("");
    setThirdSide("");
    setRadioInput("");
    setOutput("");
  };

  const playAgainBtnHandler = () => {
    initialStateHandler();
    randomSideGenerator();
  };

  useImperativeHandle(typeSideRef, () => {
    return {
      initialStateHandler: initialStateHandler,
      randomSideGenerator: randomSideGenerator,
    };
  });

  return (
    <div style={{ display: `${isShow}` }}>
      <p style={{ textAlign: "center" }}>
        Choose the type of triangle based on given sides.
      </p>
      <div className="given-angle-div">
        <span>{firstSide} cm</span>
        <span>{secondSide} cm</span>
        <span>{thirdSide} cm</span>
      </div>
      <div className="type-angle-div">
        <form onSubmit={checkBtnHandler}>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "equilateral"}
              value="equilateral"
              type="radio"
              required
            />
            Equilateral
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "isosceles"}
              value="isosceles"
              type="radio"
              required
            />
            Isosceles
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "scalene"}
              value="scalene"
              type="radio"
              required
            />
            Scalene
          </label>
          <button className="check-button" type="submit">
            Check Answer
          </button>
        </form>
      </div>
      <div className="type-button-div">
        <button className="play-again-button" onClick={playAgainBtnHandler}>
          Play Again
        </button>
      </div>
      <div className="output-result">{output}</div>
    </div>
  );
});

export default TypesOfTriangleSide;

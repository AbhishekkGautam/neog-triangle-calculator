import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./style.css";

const TypesOfTriangleAngle = forwardRef(({ isShow }, typeAngleRef) => {
  const [firstAngle, setFirstAngle] = useState("");
  const [secondAngle, setSecondAngle] = useState("");
  const [thirdAngle, setThirdAngle] = useState("");
  const [output, setOutput] = useState("");
  const [radioInput, setRadioInput] = useState("");

  const angles = [
    [40, 60, 80],
    [60, 60, 60],
    [75, 50, 55],
    [35, 105, 40],
    [80, 25, 75],
    [30, 60, 90],
    [90, 25, 65],
    [30, 100, 50],
    [125, 30, 25],
    [85, 55, 40],
  ];

  const randomAngleGenerator = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(angles.length));
    setFirstAngle(angles[randomIndex][0]);
    setSecondAngle(angles[randomIndex][1]);
    setThirdAngle(angles[randomIndex][2]);
  };

  const radioInputHandler = (e) => {
    setRadioInput(e.target.value);
  };

  const checkBtnHandler = (e) => {
    e.preventDefault();
    if (
      Number(firstAngle) < 90 &&
      Number(secondAngle) < 90 &&
      Number(thirdAngle) < 90 &&
      radioInput === "acute"
    ) {
      setOutput("Congrats! Your answer is correct.");
    } else if (
      (Number(firstAngle) === 90 ||
        Number(secondAngle) === 90 ||
        Number(thirdAngle) === 90) &&
      radioInput === "right"
    ) {
      setOutput("Congrats! Your answer is correct.");
    } else if (
      (Number(firstAngle) > 90 ||
        Number(secondAngle) > 90 ||
        Number(thirdAngle) > 90) &&
      radioInput === "obtuse"
    ) {
      setOutput("Congrats! Your answer is correct.");
    } else {
      setOutput("Oops! Your answer is incorrect, play again.");
    }
  };

  const initialStateHandler = () => {
    setFirstAngle("");
    setSecondAngle("");
    setThirdAngle("");
    setRadioInput("");
    setOutput("");
  };

  const playAgainBtnHandler = () => {
    initialStateHandler();
    randomAngleGenerator();
  };

  useImperativeHandle(typeAngleRef, () => {
    return {
      initialStateHandler: initialStateHandler,
      randomAngleGenerator: randomAngleGenerator,
    };
  });

  return (
    <div style={{ display: `${isShow}` }}>
      <p style={{ textAlign: "center" }}>
        Choose the type of triangle based on given angles.
      </p>
      <div className="given-angle-div">
        <span>{firstAngle}°</span>
        <span>{secondAngle}°</span>
        <span>{thirdAngle}°</span>
      </div>
      <div className="type-angle-div">
        <form onSubmit={checkBtnHandler}>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "acute"}
              value="acute"
              type="radio"
              required
            />
            Acute
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "right"}
              value="right"
              type="radio"
              required
            />
            Right
          </label>
          <label>
            <input
              onChange={radioInputHandler}
              checked={radioInput === "obtuse"}
              value="obtuse"
              type="radio"
              required
            />
            Obtuse
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

export default TypesOfTriangleAngle;

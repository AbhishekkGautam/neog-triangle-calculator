import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./style.css";

const FindTheThirdAngle = forwardRef(({ isShow }, thirdAngleRef) => {
  const [firstAngle, setFirstAngle] = useState("");
  const [secondAngle, setSecondAngle] = useState("");
  const [thirdAngle, setThirdAngle] = useState("");
  const [output, setOutput] = useState("");

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
  };

  const inputOneHandler = (e) => {
    setThirdAngle(e.target.value);
  };

  const checkBtnHandler = () => {
    let result = Number(firstAngle) + Number(secondAngle) + Number(thirdAngle);
    if (thirdAngle === "" || thirdAngle === "0") {
      setOutput("Enter a valid value of third angle.");
    } else if (result === 180) {
      setOutput("Congrats! Your answer is right.");
    } else {
      setOutput("Oops! Your answer is wrong, play again.");
    }
  };

  const initialStateHandler = () => {
    setThirdAngle("");
    setOutput("");
  };

  const playAgainBtnHandler = () => {
    initialStateHandler();
    randomAngleGenerator();
  };

  useImperativeHandle(thirdAngleRef, () => {
    return {
      initialStateHandler: initialStateHandler,
      randomAngleGenerator: randomAngleGenerator,
    };
  });

  return (
    <div style={{ display: `${isShow}` }}>
      <p style={{ textAlign: "center" }}>
        Find the 3rd angle to form a triangle.
      </p>
      <div className="given-angle-div">
        <span>First Angle: {firstAngle}</span>
        <span>Second Angle: {secondAngle}</span>
      </div>
      <div className="third-angle-div">
        <input
          onChange={inputOneHandler}
          value={thirdAngle}
          type="number"
          required
          placeholder="enter third angle"
        />
      </div>
      <div className="button-div">
        <button className="check-button" onClick={checkBtnHandler}>
          Check Answer
        </button>
        <button className="play-again-button" onClick={playAgainBtnHandler}>
          Play Again
        </button>
      </div>
      <div className="output-result">{output}</div>
    </div>
  );
});

export default FindTheThirdAngle;

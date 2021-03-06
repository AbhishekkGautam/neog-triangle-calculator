import React, { useState, useRef } from "react";
import "./App.css";
import IsItATriangle from "./components/IsItATriangle";
import FindTheThirdAngle from "./components/FindTheThirdAngle";
import CalculateArea from "./components/CalculateArea";
import CalculateHypotenuse from "./components/CalculateHypotenuse";
import TypesOfTriangleAngle from "./components/TypesOfTriangleAngle";
import TypesOfTriangleSide from "./components/TypesOfTriangleSide";
import InitialComponent from "./components/InitialComponent";

function App() {
  const [showInitialComponent, setShowInitialComponent] = useState("flex");
  const [showIsTriangle, setShowIsTriangle] = useState("none");
  const [showThirdAngle, setShowThirdAngle] = useState("none");
  const [showCalculateArea, setShowCalculateArea] = useState("none");
  const [showHypotenuse, setShowHypotenuse] = useState("none");
  const [showTriangleSide, setShowTriangleSide] = useState("none");
  const [showTriangleAngle, setShowTriangleAngle] = useState("none");

  const isTriangleRef = useRef(null);
  const hypotenuseRef = useRef(null);
  const areaRef = useRef(null);
  const thirdAngleRef = useRef(null);
  const typeAngleRef = useRef(null);
  const typeSideRef = useRef(null);

  const isItATriangleHandler = () => {
    setShowIsTriangle("block");
    setShowInitialComponent("none");
    setShowThirdAngle("none");
    setShowHypotenuse("none");
    setShowCalculateArea("none");
    setShowTriangleSide("none");
    setShowTriangleAngle("none");
    isTriangleRef.current.initialStateHandler();
  };

  const thirdAngleHandler = () => {
    setShowInitialComponent("none");
    setShowIsTriangle("none");
    setShowThirdAngle("block");
    setShowHypotenuse("none");
    setShowCalculateArea("none");
    setShowTriangleSide("none");
    setShowTriangleAngle("none");
    thirdAngleRef.current.initialStateHandler();
    thirdAngleRef.current.randomAngleGenerator();
  };

  const hypotenuseHandler = () => {
    setShowInitialComponent("none");
    setShowIsTriangle("none");
    setShowThirdAngle("none");
    setShowHypotenuse("block");
    setShowCalculateArea("none");
    setShowTriangleSide("none");
    setShowTriangleAngle("none");
    hypotenuseRef.current.initialStateHandler();
  };

  const areaHandler = () => {
    setShowInitialComponent("none");
    setShowIsTriangle("none");
    setShowThirdAngle("none");
    setShowHypotenuse("none");
    setShowCalculateArea("block");
    setShowTriangleSide("none");
    setShowTriangleAngle("none");
    areaRef.current.initialStateHandler();
  };

  const sideTriangleHandler = () => {
    setShowInitialComponent("none");
    setShowIsTriangle("none");
    setShowThirdAngle("none");
    setShowHypotenuse("none");
    setShowCalculateArea("none");
    setShowTriangleSide("block");
    setShowTriangleAngle("none");
    typeSideRef.current.initialStateHandler();
    typeSideRef.current.randomSideGenerator();
  };

  const angleTriangleHandler = () => {
    setShowInitialComponent("none");
    setShowIsTriangle("none");
    setShowThirdAngle("none");
    setShowHypotenuse("none");
    setShowCalculateArea("none");
    setShowTriangleSide("none");
    setShowTriangleAngle("block");
    typeAngleRef.current.initialStateHandler();
    typeAngleRef.current.randomAngleGenerator();
  };

  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-heading">Triangle Junior</h1>
      </header>
      <section className="section">
        <div className="container container-center section-center">
          <button className="tab" onClick={isItATriangleHandler}>
            Is it a triangle?
          </button>
          <button className="tab" onClick={thirdAngleHandler}>
            Find the third angle
          </button>
          <button className="tab" onClick={hypotenuseHandler}>
            Calculate Hypotenuse
          </button>
          <button className="tab" onClick={areaHandler}>
            Calculate Area
          </button>
          <button className="tab" onClick={sideTriangleHandler}>
            Types of ??? (side)
          </button>
          <button className="tab" onClick={angleTriangleHandler}>
            Types of ??? (angle)
          </button>
          <div className="outputDiv">
            {/* all components */}
            <InitialComponent isShow={showInitialComponent} />
            <IsItATriangle isShow={showIsTriangle} ref={isTriangleRef} />
            <FindTheThirdAngle isShow={showThirdAngle} ref={thirdAngleRef} />
            <CalculateHypotenuse isShow={showHypotenuse} ref={hypotenuseRef} />
            <CalculateArea isShow={showCalculateArea} ref={areaRef} />
            <TypesOfTriangleSide isShow={showTriangleSide} ref={typeSideRef} />
            <TypesOfTriangleAngle
              isShow={showTriangleAngle}
              ref={typeAngleRef}
            />
          </div>
          <div className="footer">
            <p>
              Developed by{" "}
              <a
                href="https://abhishekkgautam.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Abhishek Gautam
              </a>
            </p>
            <ul class="social-links list-non-bullet">
              <li class="list-item-inline">
                <a
                  target="_blank"
                  class="link"
                  href="https://github.com/AbhishekkGautam"
                  rel="noreferrer"
                >
                  <i class="fab fa-github fa-1x"></i>
                </a>
              </li>
              <li class="list-item-inline">
                <a
                  target="_blank"
                  class="link"
                  href="https://twitter.com/helloAbhishekk"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter fa-1x"></i>
                </a>
              </li>
              <li class="list-item-inline">
                <a
                  target="_blank"
                  class="link"
                  href="https://www.linkedin.com/in/abhishek-gautam-54684a167/"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in fa-1x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

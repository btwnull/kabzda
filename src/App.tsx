import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function AppTitle() {
  return <>This is APP Component</>;
}

function Accordion() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

function Star() {
  return <div>star</div>;
}

export default App;

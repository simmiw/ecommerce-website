import React, { useState } from "react";

const ColorSwitcher = () => {
  const [bgColor, setBgColor] = useState("white");
  function changeBgColor(event) {
    let updateColor = event.target.value;
    setBgColor(updateColor);
  }

  return (
    <>
      <select onChange={changeBgColor}>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>
      <div
        style={{ backgroundColor: bgColor, width: "100px", height: "100px" }}
      ></div>
    </>
  );
};

export default ColorSwitcher;

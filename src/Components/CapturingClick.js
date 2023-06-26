import React, { useState } from "react";

function CapturingClick() {
  const [button1click, setButton1Click] = useState("");
  const [button2click, setButton2Click] = useState("");
  const [button3click, setButton3Click] = useState("");

  function button1() {
    if (!button1click) {
      console.log("Button1 is clicked");
    }
    setButton1Click(button1click);
  }

  function onHover() {
    console.log("mouse is hovered");
  }

  function button2() {
    if (!button2click) {
      console.log("Button2 is clicked");
    }
    setButton2Click(button2click);
  }
  function button3() {
    if (!button3click) {
      console.log("Button3 is clicked");
    }
    setButton3Click(button3click);
  }

  return (
    <>
      <button value={button1click} onClick={button1} onMouseOver={onHover}>
        Button1
      </button>
      <button onClick={button2}>Button2</button>
      <button onClick={button3}>Button3</button>
    </>
  );
}
export default CapturingClick;

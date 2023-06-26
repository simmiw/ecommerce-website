import react, { useState } from "react";

// you're tasked with creating a component that toggles the visibility of a piece of text when a button is clicked.

const Toggle = () => {

const[clicked, setClicked]=useState(false);

const iAmClicked=()=>{
    setClicked(!clicked)
}
  return<>
    <button onClick={iAmClicked}>Click Me</button>
    {clicked?<p>Hello Simmi</p>:null}
  </>;
}

export default Toggle;

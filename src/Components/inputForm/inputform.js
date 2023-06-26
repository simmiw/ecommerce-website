import React, { useState } from "react";

const InputForm = () => {
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  const pushName = (event) => {
    setCurrentName(event.target.value);
  };

  const pushEmail = (event) => {
    setCurrentEmail(event.target.value);
  };

  const listItems=(currentName)=>{
  return `<li>${currentName}<li/>`;
  }

  return (
    <>
      <input
        type="text"
        value={currentName}
        placeholder="Eneter your name"
        onChange={pushName}
      />
      <br />
      <br />

      <input
        type="text"
        value={currentEmail}
        placeholder="Eneter your email"
        onChange={pushEmail}
      />
      <br />
      <br />

      <button onClick={listItems}>Submit Details</button>

      <ul>
      </ul>
    </>
  );
};

export default InputForm;

import react, { useState } from "react";

const CharacterCounter = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState({});

  const charCount = (event) => {
    let charObj = {};
    let updatedValue = event.target.value;
    setInput(updatedValue);
    for (let i = 0; i < updatedValue.length; i++) {
      if (charObj[updatedValue[i]]) {
        charObj[updatedValue[i]]++;
      } else {
        charObj[updatedValue[i]] = 1;
      }
    }
    setCount(charObj);
  };

  return (
    <>
      <input
        className="char-input"
        type="text"
        value={input}
        placeholder="Enter Something!!"
        onChange={charCount}
      />
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>Character</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(count).map(function (char) {
            return (
              <tr key={char[0]}>
                <td>{char[0]}</td>
                <td>{char[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CharacterCounter;

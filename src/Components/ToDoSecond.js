import react, { useState } from "react";

let id = 0;

const ToDoSecond = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [currentArray, setCurrentArray] = useState([]);

  const updateInput = (event) => {
    let updatedValue = event.target.value;
    setCurrentValue(updatedValue);
  };
  function addTask() {
    let toDoListArray = [...currentArray, { id: id++, task: currentValue }];
    setCurrentArray(toDoListArray);
  }

  return (
    <>
      <input
        type="text"
        value={currentValue}
        placeholder="Enter Task"
        onChange={updateInput}
      />
      <button onClick={addTask}>Submit</button>
      <ul>
        {currentArray.map(function (item) {
          return <li key={item.id}> {item.task}</li>;
        })}
      </ul>
    </>
  );
};

export default ToDoSecond;

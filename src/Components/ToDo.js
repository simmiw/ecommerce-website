import React, { useState } from "react";

let id = 0; // to allocate id, id intitated!

function ToDo() {
  const [currentTask, setCurrentTask] = useState("");
  const [currentArray, setCurentArray] = useState([]);

  const currentTaskData = (event) => setCurrentTask(event.target.value);

  function addTask() {
    let arrayOftask = [
      ...currentArray,
      {
        id: id++, // id being incremented on each new element of array
        task: currentTask,
        status: "nothing",
      },
    ];
    setCurentArray(arrayOftask);
    setCurrentTask("");
  }
  function completeTask(id) {
    const newTasks = [...currentArray];
    newTasks.forEach((item) => {
      if (item.id === id) {
        item.status = "completed";
      }
    });

    setCurentArray(newTasks);
}


    function pendingTask(id) {
      const newTask1 = [...currentArray];
      newTask1.forEach((item) => {
        if (item.id === id) {
          item.status = "pending";
        }
      });
    
    setCurentArray(newTask1)
    }


  return (
    <>
      <input
        type="text"
        value={currentTask}
        placeholder="Enter Today's Task"
        onChange={currentTaskData}
      />
      <button onClick={addTask}>Submit Task</button>
      <ul>
        {currentArray.map(function (item) {
          return (
            <li className="todo-list" key={item.id}>
              {item.task}
              <button
                disabled={item.status === "completed"}
                onClick={() => completeTask(item.id)}
              >
                Complete
              </button>
              <button
                disable={item.status === "pending"}
                onClick={() => pendingTask(item.id)}
              >
                Pending
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ToDo;

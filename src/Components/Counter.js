import React, { useEffect, useState } from "react";

const Dummy = () => {
  console.log("test");
  // useEffect(() => {
  //     console.log("DUMMY RENDERED");
  // }, []);
  return <div>TEST</div>;
};

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(function () {
    // mounting
    // updating
    // unmounting
    if (counter === 1) {
      console.log("fsdasfa");
    }
  }, []);

  return (
    <>
      <button onClick={increment}>+</button>
      <h3>{counter}</h3>
      <button onClick={decrement}>-</button>
      {/* {counter === 3 ? <Dummy />: null} */}
      <Dummy counter={counter} />
    </>
  );
}

export default Counter;

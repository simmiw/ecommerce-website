import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeRemaining, setTimeRemainig] = useState(199);
  useEffect(()=>{
    if(timeRemaining<=0){
        clearInterval(timer);
    }

  })
let prevTime=200;
  const timer= setInterval(() => {
    setTimeRemainig((prevTime)=prevTime- 1);
  }, 1000);

  return <>
      <h1 className="header">CountDown</h1>
      <p>Time Remaing {timeRemaining}</p>
    </>

};

export default CountDown;

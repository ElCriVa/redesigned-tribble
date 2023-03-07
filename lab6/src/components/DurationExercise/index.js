import React, { useRef, useState } from "react";

function DurationExercise({name}) {    
  const [duration, setDuration] = useState("00:00:00");
  const intervalRef = useRef();

  const startTimer = () => {
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      setDuration(getFormattedTime(elapsedTime));
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setDuration("00:00:00");
  };

  const getFormattedTime = (time) => {
    const dateObj = new Date(time);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();
    const milliseconds = dateObj.getMilliseconds();
    return (
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0") +
      "." +
      milliseconds.toString().padStart(3, "0")
    );
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>{duration}</div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

    export default DurationExercise
    
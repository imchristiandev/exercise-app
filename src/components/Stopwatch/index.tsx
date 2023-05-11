// @ts-nocheck

import { useState, useEffect, useRef } from "react";

import "./Stopwatch.css"
import clockSound from '../../assets/sounds/chronometer.mp3'
import { Timer } from "./Timer";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [trainingDuration, setTrainingDuration] = useState(300);
  const [restingDuration, setRestingDuration] = useState(60);
  const [trainingTime, setTrainingTime] = useState(0);
  const [restingTime, setRestingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTraining, setIsTraining] = useState(true);

  const audioElement = useRef(Audio);

  useEffect(() => {
  }, [])
  useEffect(() => {
    let intervalId:any;
    if (isRunning) {
      intervalId = setInterval(() => {
        if(isTraining === true)
          setTrainingTime(trainingTime + 1)
        else
          setRestingTime(restingTime + 1 )
        setTime(time + 1)
        if(trainingSeconds === trainingDuration) {
          setTrainingTime(trainingTime + 1)
          setTrainingTime(0);
          setIsTraining(!isTraining);
        }
        if(restingSeconds === restingDuration) {
          setRestingTime(restingTime + 1)
          setRestingTime(0);
          setIsTraining(!isTraining);
        }
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    if(trainingSeconds === trainingDuration - 5 || restingSeconds === restingDuration - 5 ) {
      audioElement.current.play()
    }
  }, [trainingTime, restingTime])

  
  const trainingSeconds = Math.floor((trainingTime % 6000) / 100);
  const restingSeconds = Math.floor((restingTime % 6000) / 100);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setTrainingTime(0);
    setRestingTime(0);
    setIsTraining(true);
  };
  

  return (
    <div className="stopwatch">
      <audio ref={audioElement} src={clockSound} preload="auto" />
      <Timer 
        time={time}
        trainingSeconds={trainingSeconds}
        restingSeconds={restingSeconds}
        trainingDuration={trainingDuration}
        restingDuration={restingDuration}
        isTraining={isTraining}
      />
      <p className="stopwatch-time">
        { isTraining ? "Training" : "Resting" }
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
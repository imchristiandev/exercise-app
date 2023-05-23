import { createContext, useEffect, useState } from "react";

import { RoutineType, TimeContextType } from "../@types/TimeContext";
import { createRoutine } from "../utils/createRoutine";

const TimeContext = createContext<TimeContextType | null>(null)

type Props = {
    children: string | JSX.Element | JSX.Element[]
} 

const TimeProvider = ({ children }: Props) => {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [filledTimes, setFilledTimes] = useState(false)
    const [warmingUpTime, setWarmingUpTime] = useState(10)
    const [exerciseTime, setExerciseTime] = useState(10)
    const [restTime, setRestTime] = useState(10)
    const [seriesNumber, setSeriesNumber] = useState(1)
    const [routine, setRoutine] = useState<RoutineType[] >([])
    const [routineStepTime, setRoutineStepTime] = useState(0)
    const [routineStep, setRoutineStep] = useState<RoutineType | null >({timeType: "", seconds: 0})
    const [routinePosition, setRoutinePosition] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (filledTimes === true) {
            const routineGroup:Array<RoutineType> = createRoutine(warmingUpTime, seriesNumber, exerciseTime, restTime)
            setRoutine(routineGroup)
        }
    }, [filledTimes])

    useEffect(() => {
        setRoutineStep(routine[routinePosition]);
    }, [routine])

    useEffect(() => {
        setRoutineStep(routine[routinePosition])
    }, [routinePosition]) 


    useEffect(() => {
        let interval:number
        isActive && (
            interval = setInterval(() => {
                setTime(time + 1)
                setRoutineStepTime(routineStepTime + 1)
                const routineStepInSeconds = Math.floor((routineStepTime % 6000) / 100)
                if(routineStep?.seconds !== 0 && routineStep?.seconds === routineStepInSeconds) {
                    if (routinePosition + 1 < routine.length) {
                        setRoutinePosition(routinePosition + 1)
                        setRoutineStepTime(0)
                    } else {
                        handleReset()
                    }
                }
            }, 10)
        )
        return () => clearInterval(interval)
    }, [isActive, time])

    const handleReset = () => {
        setTime(0)
        setIsActive(false)
        setFilledTimes(false)
        setWarmingUpTime(10)
        setExerciseTime(10)
        setRestTime(10)
        setSeriesNumber(1)
        setRoutine([])
        setRoutineStepTime(0)
        setRoutineStep({timeType: "", seconds: 0})
        setRoutinePosition(0)
    }

    const currentTime = {
        hours: Math.floor(time / 360000).toString().padStart(2, "0"),
        minutes: Math.floor((time % 360000) / 6000).toString().padStart(2, "0"),
        seconds: Math.floor((time % 6000) / 100).toString().padStart(2, "0"),
        miliseconds: (time % 100).toString().padStart(2, "0")
    }

    const handleActive = () => {
        setTime(0)
        setIsActive(!isActive)
    }

    return (
        <TimeContext.Provider value={{
            currentTime,
            isActive,
            filledTimes,
            routineStep,
            openModal,
            setWarmingUpTime,
            setExerciseTime,
            setRestTime,
            setSeriesNumber,
            handleActive,
            setFilledTimes,
            handleReset,
            setOpenModal
        }}>
            {children}
        </TimeContext.Provider>
    )
}

export { TimeProvider }
export default TimeContext
import { useContext } from "react"
import TimeContext from "../../../context/TimeContext"
import { TimeContextType } from "../../../@types/TimeContext"

import { ExerciseFormUI } from "./ExerciseFormUI"

import { transformToSeconds } from "../../../utils/transformToSeconds"

export const ExerciseForm = () => {

    const {
        setWarmingUpTime, 
        setExerciseTime, 
        setRestTime, 
        setSeriesNumber,
        setFilledTimes,
        handleActive,
        filledTimes
    } = useContext(TimeContext) as TimeContextType

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target.elements
        const warmingUpTotalSeconds = transformToSeconds( form["warmingUpMinutes"].value,  form["warmingUpSeconds"].value)
        const exerciseTotalSeconds = transformToSeconds( form["exerciseMinutes"].value,  form["exerciseSeconds"].value)
        const restTotalSeconds = transformToSeconds( form["restMinutes"].value,  form["restSeconds"].value)
        const seriesNumber = form["series"].value !== "" ? parseInt(form["series"].value) : 1
        setWarmingUpTime(warmingUpTotalSeconds)
        setExerciseTime(exerciseTotalSeconds)
        setRestTime(restTotalSeconds)
        setSeriesNumber(seriesNumber)
        setFilledTimes(!filledTimes)
        handleActive()
    }

    return (
        <ExerciseFormUI handleSubmit={handleSubmit} />
    )
}
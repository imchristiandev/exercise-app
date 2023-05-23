import { RoutineType } from "../@types/TimeContext"

export const createRoutine = (warmingUpTime:number, seriesNumber:number, exerciseTime:number, restTime:number) => {
    let routineGroup:Array<RoutineType> = []
    if (warmingUpTime !== 0)
        routineGroup = [ ...routineGroup, { timeType: "Calentamiento", seconds: warmingUpTime}]
    for(let i = 0; i < seriesNumber; i++) {
        routineGroup = [ ...routineGroup, { timeType: "Ejercicio", seconds: exerciseTime }]
        routineGroup = [ ...routineGroup, { timeType: "Descanso", seconds: restTime }]
    }
    if (warmingUpTime !== 0)
        routineGroup = [ ...routineGroup, { timeType: "Calentamiento", seconds: warmingUpTime}]
    return routineGroup
}
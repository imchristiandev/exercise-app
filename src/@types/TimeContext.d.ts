export interface ICurrentTime {
    hours: string,
    minutes: string,
    seconds: string,
    miliseconds: string
}

export type RoutineType = {
    timeType: string,
    seconds: number
}

export type TimeContextType = {
    currentTime: ICurrentTime,
    isActive: boolean,
    filledTimes: boolean,
    routineStep: RoutineType | null,
    openModal: boolean,
    setWarmingUpTime: (time:number) => void,
    setExerciseTime: (time:number) => void,
    setRestTime: (time:number) => void,
    setSeriesNumber: (series:number) => void,
    setFilledTimes: (filled:boolean) => void,
    handleActive: () => void,
    handleReset: () => void,
    setOpenModal: (openModal:boolean) => void
}

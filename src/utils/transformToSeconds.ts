export const transformToSeconds = (minutes:string, seconds:string) => {
    const minutesInSeconds = minutes !== "" ? parseInt(minutes, 10)*60 : 0
    const secondsTime = seconds !== "" ? parseInt(seconds, 10) : 0
    const totalSeconds = minutesInSeconds + secondsTime
    return totalSeconds
}
import { createContext, PropsWithChildren, useEffect, useState } from "react";

const TimeContext = createContext({
    currentTime: {
        hours: "00",
        minutes: "00",
        seconds: "00",
        miliseconds: "00"
    },
    isActive: false,
    handleActive: () => {},
})

const TimeProvider = (props :PropsWithChildren) => {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval:number
        isActive && (
            interval = setInterval(() => {
                setTime(time + 1)
            }, 10)
        )
        return () => clearInterval(interval)
    }, [isActive, time])

    const currentTime = {
        hours: Math.floor(time / 360000).toString().padStart(2, "0"),
        minutes: Math.floor((time % 360000) / 6000).toString().padStart(2, "0"),
        seconds: Math.floor((time % 6000) / 100).toString().padStart(2, "0"),
        miliseconds: (time % 100).toString().padStart(2, "0")
    }

    const handleActive = () => {
        setIsActive(!isActive)
    }

    const data = {
        currentTime,
        isActive,
        handleActive
    }
    return (
        <TimeContext.Provider value={data}>{props.children}</TimeContext.Provider>
    )
}

export { TimeProvider }
export default TimeContext
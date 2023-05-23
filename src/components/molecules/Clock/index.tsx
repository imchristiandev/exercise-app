import { useContext } from "react"

import TimeContext from "../../../context/TimeContext"

import "./styles/Clock.css"

export const Clock = () => {
    const { currentTime }:any = useContext(TimeContext);

    return (
        <div className="clock">
            <div 
                className="clock__timer" 
                style={{background: `conic-gradient(lightseagreen ${50}%, #ffffff0c ${50}%)`}}
            ></div>
            <p
                className="clock__hour"
            >{ currentTime.hours }:{ currentTime.minutes }:{ currentTime.seconds }:{ currentTime.miliseconds }</p>
        </div>
    )
}
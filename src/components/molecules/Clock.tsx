import { useContext } from "react"

import TimeContext from "../../context/TimeContext";

export const Clock = () => {
    const { currentTime } = useContext(TimeContext);

    return (
        <p>{ currentTime.hours }:{ currentTime.minutes }:{ currentTime.seconds }:{ currentTime.miliseconds }</p>
    )
}
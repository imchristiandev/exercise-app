import { TimeProvider } from "../../context/TimeContext"


import { Clock } from "../molecules/Clock"
import { ButtonGroup } from  "../molecules/ButtonGroup"

export const Chronometer = () => {
    return (
        <TimeProvider>
            <Clock />
            <ButtonGroup />
        </TimeProvider>
    )
}
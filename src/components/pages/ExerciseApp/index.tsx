import { TimeProvider } from "../../../context/TimeContext"

import { Chronometer } from "../../organisms/Chronometer"
import { ExerciseModal } from "../../organisms/ExerciseModal"

export const ExerciseApp = () => {
    return (
        <TimeProvider>
            <Chronometer />
            <ExerciseModal />
        </TimeProvider>
    )
}
import { useContext } from 'react'
import TimeContext from '../../../context/TimeContext'
import { TimeContextType } from '../../../@types/TimeContext'


export const RoutineStep = () => {
    const ctx:TimeContextType | null = useContext(TimeContext)
    const routineStep = ctx?.routineStep
    return(
        <div>
            <p>
                {routineStep?.timeType}
            </p>
        </div>
    )
}
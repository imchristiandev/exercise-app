import { useContext } from "react"

import TimeContext from "../../context/TimeContext";

import { Button } from "../atoms/Button";


export const ButtonGroup = () => {
    const { isActive, handleActive } = useContext(TimeContext);
    return (
        <Button callback={handleActive} text={ isActive ? "Detener" : "Iniciar"} />
    )
}
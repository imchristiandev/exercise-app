import { useContext } from "react"

import TimeContext from "../../../context/TimeContext"

import { Button } from "../../atoms/Button"
import { ExerciseForm } from "../../molecules/ExerciseForm"
import { Modal } from "../../atoms/Modal"

export const ExerciseModal = () => {
    const { openModal, setOpenModal }: any = useContext(TimeContext)
    
    const handleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <>
            <Button callback={handleModal} text="Configurar Rutina"  />
            <p>{ openModal ? "open" : "closed"}</p>
            { openModal && 
                <Modal>
                    <ExerciseForm />
                </Modal> 
            }
        </>
    )
}
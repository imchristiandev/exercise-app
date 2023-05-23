import { ReactNode } from 'react'
import {ReactComponent as ViteSVG} from '../../assets/icons/vite.svg'

type IconOptionsType = {
    "vite": ReactNode
}

const iconOptions:IconOptionsType = {
    "vite": <ViteSVG />
}

type IconType = {
    type: string
}

export const Icon = ({ type }: IconType) => {
    return (
        <span>
            { (iconOptions[type as keyof typeof iconOptions]) }
        </span>
    )
}
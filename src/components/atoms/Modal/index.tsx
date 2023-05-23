import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

type Props = {
    children: ReactNode
}

export const Modal = ({children}: Props) => {
    return ReactDOM.createPortal(
    <section>
        {children}
    </section>
    , document.getElementById('modal') as HTMLElement)
}


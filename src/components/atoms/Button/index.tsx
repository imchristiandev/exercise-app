export const Button = ({
    callback = () => {}, 
    text= "Boton"
}) => {
    return (
        <button onClick={callback}> {text} </button>
    )
}
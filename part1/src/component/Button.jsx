{/*const Button= (props)=>{
    return(
        <button onClick={props.handleClick}>{props.text}</button>
    )
}
*/}
//desestruturacion
const Button= ({handleClick,text})=>{
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

export default Button;
import { useState } from "react"

const Click=()=>{
    const [counter, setCounter]= useState(0);

    //const handleClick=()=>console.log('Click');
    //No es buena practica definir funciones dentron de los controladores
    const incrementByOne = ()=>setCounter(counter+1);
    const setZero =()=>setCounter(0);
    return(
        <div>
            <div>{counter}</div>
            {/*<button onClick={handleClick}>Pus</button>*/}
            <button onClick={incrementByOne}>Plus</button>
            <button onClick={setZero}>Zero</button>
        </div>
    )
}

export default Click;
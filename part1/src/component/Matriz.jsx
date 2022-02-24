import { useState } from "react"
import History from './History'
import Button from './Button'

const Matriz = ()=>{
    const [left,setLeft]=useState(0);
    const [right,setRight]=useState(0);
    const [allClicks, setAllClicks]=useState([]);

    const handleLeftClick=()=>{
        setAllClicks(allClicks.concat('L'));
        setLeft(left+1);
    }

    const handleRightClick=()=>{
        setAllClicks(allClicks.concat('R'));
        setRight(right+1);
    }

    return(
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='Left'/> 
            <Button handleClick={handleRightClick} text='Right'/> 
            {/*<button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>*/}
            {right}
            {/*<p>{allClicks.join(' ')}</p>*/}
            <History allClicks={allClicks}/>

        </div>

    )
}

export default Matriz;
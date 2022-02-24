import './App.css';
import Mensaje from './Mensaje';
import Click from './component/Click';
import { useState } from 'react';
import Display from './component/Display';
import Button from './component/Button';
import Matriz from './component/Matriz';
import Agenda from './component/Agenda';

const Description=()=>{
  return(
    <h1>Hola descripcion de ahora</h1>
  )
}

function App() {
  //Complejos
  //const [left, setLeft]=useState(0);
  //const [right, setRight]=useState(0);
  const [clicks, setClicks]=useState({
    left:0,right:0
  });

  const handleLeftClick=()=>{
    /*const newClicks ={
      left:clicks.left+1,
      right:clicks.right
      setClicks(newClicks);
    }*/
    setClicks({...clicks, left:clicks.left+1});
  }

  const handleRightClick = ()=>{
    setClicks({...clicks, right:clicks.right+1});
  }

  //Basicos
  //const [counter, setCounter]=useState(0);

  //const incrmentByOne = ()=> setCounter(counter+1);
  //const decrmentByOne = ()=> setCounter(counter-1);
  //const setZero = ()=>setCounter(0);

  

  return (
    <div className="App">
      {/*Mensaje color='red' msg='Estamos trabajando' />
      <Mensaje color='green'msg='En un curso'/>
      <Mensaje color='yellow' msg='De React'/>
    <Description/>
      <Click/>*/}
      {/*<Display counter={counter}/>
      <button onClick={incrmentByOne}>Plus</button>
      <button onClick={setZero}>Zero</button>*/}
      {/*<Button handleClick={incrmentByOne} text='Plus'/>
      <Button handleClick={decrmentByOne} text='minus'/>
      <Button handleClick={setZero} text='Zero'/>*/}

      {/*Complejos*/}
     {/* {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      {clicks.right}
      <button onClick={handleRightClick}>Right</button>

        <br/>
        <Matriz/>*/}
        <Agenda/>
    </div>
  );
}

export default App;

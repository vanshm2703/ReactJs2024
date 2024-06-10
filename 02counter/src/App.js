
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(15)
  // let counter=15

  
  const addValue= ()=>{ 
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  }
  const removeValue= ()=>{
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
    setCounter((prevCounter)=>prevCounter-1)
  }
  
  // const addValue= ()=>{
  //   setCounter(counter + 1)
  // }
  // const removeValue= ()=>{
  //   setCounter(counter-1)
  // }
  return (
    <>
     <h1>React JS : {counter}</h1>
     <h2>Counter App :{counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
     
    </>
  ); 
}

export default App;

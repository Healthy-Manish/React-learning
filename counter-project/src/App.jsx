import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(5)

  const add = ()=>{
    if(count<20) setCount(count+1);
  }

  const subtract = ()=>{
    if(count>0)setCount(count-1);
  }
  return (
    <>
      <h1>Hello world</h1> 
      <h2>counter value: {count}</h2>
      <button onClick={add}>Add value</button>
      <br />
      <button onClick={subtract}>remove value</button>
    </>
  )
}

export default App

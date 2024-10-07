import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

// let counter = 15

const addValue = () => {
  // counter = counter + 1
  setCount(prevCounter => prevCounter + 1) 
}

const removeValue = () => {
  setCount(count - 1)
}

  return (
    <>
      <button
      onClick={addValue}
      >Add value {count}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App

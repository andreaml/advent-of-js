import { useState } from 'react'
import './App.css'
import Challenge1 from './challenges/Challenge1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Advent of JavaScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Portfolio of the challenges accomplished during the <a href='https://www.adventofjs.com/'>Advent of Javascript</a>.
          Experimenting with Vite, practicing React and improving my CSS skills.
        </p>
        <h2>Challenge 1: Show/Hide Password</h2>
        <Challenge1 />
      </div>
    </>
  )
}

export default App

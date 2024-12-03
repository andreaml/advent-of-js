import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      </div>
    </>
  )
}

export default App

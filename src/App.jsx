import { useState } from 'react'
import './App.css'
import Challenge1 from './challenges/Challenge1'
import Challenge2 from './challenges/Challenge2'
import Challenge3 from './challenges/Challenge3'
import Challenge4 from './challenges/Challenge4'
import Challenge5 from './challenges/Challenge5'
import Challenge6 from './challenges/Challenge6'
import Challenge7 from './challenges/Challenge7'
import Challenge8 from './challenges/Challenge8'


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
        <h2>Challenge 2: Dropdown input</h2>
        <Challenge2 />
        <h2>Challenge 3: Dropdown input</h2>
        <Challenge3 />
        <h2>Challenge 4: Dropdown input</h2>
        <Challenge4 />
        <h2>Challenge 5: Character counter</h2>
        <Challenge5 />
        <h2>Challenge 6: Copy to clipboard</h2>
        <Challenge6/>
        <h2>Challenge 7: Slugify input</h2>
        <Challenge7/>
        <h2>Challenge 8: Tag Input Editor</h2>
        <Challenge8/>
      </div>
    </>
  )
}

export default App

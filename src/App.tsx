import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [countData, setCountData] = useState("")

  const processData = (data)=>{
    let ret = ""
    for (const dataKey in data) {
      ret += `${dataKey}: ${data[dataKey]},\n`
    }
    return ret
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input onChange={(e)=>{setText(e.target.value)}}></input>
        <button onClick={() => {const fetchPromise = fetch("http://localhost:5000/api/count/" + text);
          fetchPromise
            .then((response) => response.json())
            .then((data) => {
              setCountData(data)
            })}}>submit</button>
        <div>{processData(countData)}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {const fetchPromise = fetch("http://localhost:5000/api/data");
          fetchPromise
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })}
        }>
          request
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

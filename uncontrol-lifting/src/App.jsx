import { useState, useRef } from 'react'
import LiftingStateUpExample from './components/LiftingStateUpExample'
import './App.css'

function ControlledInputExample() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Controlled value submitted: ${inputValue}`)
  }

  return (
    <div className="card">
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
      <p>Current state value: {inputValue}</p>
    </div>
  )
}

function UncontrolledInputExample() {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const finalValue = inputRef.current.value
    alert(`Uncontrolled value submitted: ${finalValue}`)
  }

  return (
    <div className="card">
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          ref={inputRef} 
          placeholder="Type something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <>
      <h1>React Forms & State Elements</h1>
      <ControlledInputExample />
      <UncontrolledInputExample />
      <LiftingStateUpExample />
    </>
  )
}

export default App

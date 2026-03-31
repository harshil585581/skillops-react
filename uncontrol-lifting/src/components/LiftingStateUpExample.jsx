import { useState } from 'react'

export function ChildInput({ label, value, onChange }) {
  return (
    <div style={{ padding: '10px', border: '1px solid #555', margin: '5px' }}>
      <label>{label}: </label>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  )
}

export default function LiftingStateUpExample() {
  const [sharedText, setSharedText] = useState('')

  return (
    <div className="card" style={{ border: '2px solid #646cff' }}>
      <h3>Lifting State Up Example</h3>
      
      <ChildInput 
        label="Input A" 
        value={sharedText} 
        onChange={setSharedText} 
      />
      <ChildInput 
        label="Input B" 
        value={sharedText} 
        onChange={setSharedText} 
      />
      
      <p style={{ marginTop: '15px' }}><strong>Parent's Shared State:</strong> {sharedText}</p>
    </div>
  )
}

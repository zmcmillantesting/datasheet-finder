import { useState } from 'react'
import { fetchDigiKeyData } from './API/digikeyParcer.js'

import './App.css'

function App() {
  const [partNumber, setPartNumber] = useState('')

  return (
    <>
      <title>Datasheet Tracker</title>
      <meta name="description" content="A simple app to track datasheets" />
      <h1>Datasheet Tracker</h1>

      <div className="partSearch">
        <label><b>OEM Part Number: </b></label>
        <input
          type="text"
          id="partNumber"
          value={partNumber}
          onChange={(e) => setPartNumber(e.target.value)}
        />
        <button type="button" onClick={() => alert(`Searching for ${partNumber}`, fetchDigiKeyData(partNumber))}>
          Search
        </button>
      </div>

      <div className="partInfo">
        <h2>Part Information</h2>
        <p><b>Part Number:</b> {partNumber}</p>
        <p><b>Description:</b> Mock part description</p>
        <p><b>Manufacturer:</b> Mock Manufacturer</p>
        <p><b>Datasheet:</b> <a href="#">Link to Datasheet</a></p>
      </div>
    </>
  )


}

export default App

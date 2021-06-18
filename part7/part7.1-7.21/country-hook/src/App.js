import React, { useState } from 'react'
import { useField, useCountry } from './hooks'
import Country from './components/Country'

const App = () => {
  const nInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (event) => {
    event.preventDefault()
    setName(nInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App

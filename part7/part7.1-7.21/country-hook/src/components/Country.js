import React from 'react'

const Country = ({ country }) => {
    if (!country) {
      return null
    }

    if (country.length === 0) {
        return (
            <div>
            not found...
            </div>
        )
    }

    const  cObject = country[0]

    return (
    <div>
        <h3>{ cObject.name} </h3>
        <div>capital { cObject.capital} </div>
        <div>population { cObject.population}</div>
        <img src={ cObject.flag} height='100' alt={`flag of ${countryObj.name}`}/>
    </div>
    )
  }

  export default Country

import "./Countries.css"

import { useEffect, useState } from 'react';

import Country from './Country';

const Countries = () => {
  const [countries,setCountries] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        console.log(data)
    })
  }, [])
  return (
    <div>
      Countries: {countries.length}
      <div className='countryMain'>
      {
        countries.map(country=><Country key={country} country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
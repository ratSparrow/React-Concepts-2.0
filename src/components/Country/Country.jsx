import "./Countries.css"

import React, { useState } from 'react';

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false)
  const handleVisited = () => {
    setVisited (!visited)
  }
  return (
    <div>
      <h3>{country.name.common}</h3> 
      <img style={{height:"200px", width:"400px"}} src={country.flags.png} alt={country.flags.alt} />
      <h4>{country.region}</h4>
      <button onClick={handleVisited} className={`univisted-btn ${visited ? 'visited-btn': 'unvisited-btn'}`}>
        {
          visited ? "Visited" : "Going"
      }
      </button>
    </div>
  );
};

export default Country;
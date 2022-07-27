import React from 'react';

export default function Country({name,flag,population,region,capital}) {
  return (
    <div className='country'>
      <img src={flag} alt="flag"></img>
      <div className='downtag'>
        <h3>{name}</h3>
        <p> <b>Population</b> : {population} </p>
        <p><b>Region</b> : {region} </p>
        <p><b>Capital</b> : {capital} </p>
      </div>
    </div>
  )
}

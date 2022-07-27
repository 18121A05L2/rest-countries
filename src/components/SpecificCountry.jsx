import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';


function SpecificCountry() {
  const { name} = useParams();
  const url="https://restcountries.com/v3.1/name/"+name
  const [data,setData] = useState(null)
  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const data = await response.json();
      setData(data)
    }
    fetchData()
  },[])
  return (
    <div>
      {(data!==null) && <div className='scountry'>
        <Link to="/"><span className='back'>Back</span></Link>
        <img src={data[0].flags.png} alt="flag"></img>
        <div className='sinfo'>
          <h3>{data[0].name.common}</h3>
          <p> <b>Population</b> : {data[0].population} </p>
          <p><b>Region</b> : {data[0].region} </p>
          <p><b>Capital</b> : {data[0].capital} </p>
          </div>
          </div>}
    
    </div>
  )
}

export default SpecificCountry
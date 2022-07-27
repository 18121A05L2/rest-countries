import React,{useEffect, useState} from 'react'
import { MdOutlineSearch } from "react-icons/md";
import Country from "./Country.jsx";
import {v4 as uuidv4} from "uuid"
import {TiDelete} from "react-icons/ti";
import Region from './Region.jsx';
import { Link } from "react-router-dom";


export default function Countries() {
    const [input,setInput] = useState("");
    
    function handleInput(e){
      setInput(e.target.value)
    }
    function handleDelete(){
      setInput("")
    }
    const [filter,setFilter]= useState("All")
    function handleFilter(v){
      setFilter(v)
    }
    const [isLoading,setIsLoading] = useState(true)
    const url="https://restcountries.com/v2/all"
    let [countries,setCountries] = useState(null)
    useEffect(() => {
      const fetchCountryData = async() =>{
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
      }
      fetchCountryData()
      setIsLoading(false)
    },[])
     
  return (
    <div className='countries'>
      <div className='toptag'>
        <div className='search'>
          <MdOutlineSearch className='searchicon'/>
          <input type="text" onChange={handleInput }  value={input} placeholder="Search for a country..."></input>
          {input!=="" && <TiDelete className='delete' onClick={handleDelete}/>}
        </div>
        <Region handleFilter={handleFilter}/>
      </div>
       
      {isLoading ?<div >
        <h1 className='searching'>Searching</h1>
        </div> 
      : 
        ((countries!==null ) && (
        countries.filter((item) => {
          const {name}=item;
          if(input===""){
            return item;
          }else if(name.toLowerCase().includes(input)){
            return item
          }
        }).filter((item) => {
          const {region} =item;
          if (filter==="All"){
            return item;
          }else if (filter===region){
            return item;
          }
        }).map(country => {
          const {name,flag,population,region,capital} = country
          const path="/"+name
          return <Link to={path} key={uuidv4()}><Country key={uuidv4()} name={name} flag={flag} population={population} region={region} capital={capital}/></Link>
        })
      ))}
      
    
    
    </div>
  )
}

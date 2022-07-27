import React,{useState} from 'react'
import {AiFillCaretLeft , AiFillCaretDown } from "react-icons/ai";

export default function Region(props) {
    const [region,setRegion]=useState(false)
    
    function handleP(e){
        props.handleFilter(e.target.innerHTML)
    }
    function handleCareDown(){
        setRegion(!region)
        props.handleFilter("All")
        
    }
  return (
    <div className='filter' >
    <div className='innerfilter' onClick={handleCareDown} >
        <p>filter</p>
        {region || <AiFillCaretLeft className='careleft' />}
        {region && <AiFillCaretDown className='caredown' />}

    </div>
    {region && (
    <div className='continent'>
    <p onClick={handleP} value="All">All</p>
    <p onClick={handleP} value="Africa" >Africa</p>
    <p onClick={handleP} value="Americas" >Americas</p>
    <p onClick={handleP} value="Asia" >Asia</p>
    <p onClick={handleP} value="Europe" >Europe</p>
    <p onClick={handleP} value="Oceania" >Oceania</p>
    </div>
  
)}
    
</div>)
}

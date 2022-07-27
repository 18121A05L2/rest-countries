import React from 'react';
import { MdDarkMode } from "react-icons/md";

export default function Header() {
  function handleMode(){
    return "pending mode"
  }
  return (
    <header>
        <h1>Where in the world?</h1>
        <div className='darkmode' onClick={handleMode}>
            <MdDarkMode/>
            <p>Dark Mode</p>
        </div>
    </header>
  )
}

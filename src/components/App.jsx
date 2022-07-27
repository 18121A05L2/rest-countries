import React from "react";
import Header from "./Header";
import Countries from "./Countries";
import {v4 as uuidv4} from "uuid"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SpecificCountry from "./SpecificCountry";
import Error from './Error';


function App() {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Countries />}></Route>
      <Route path="/:name" element={<SpecificCountry/>}></Route>
      <Route path="*" element={<Error/>}> </Route>
    </Routes>
  </BrowserRouter>



    </div>
  );
}

export default App;

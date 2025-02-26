import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restrudents from "./Components/Restrudents";

import { BrowserRouter, Route , Router, Routes } from "react-router";


function App(){
    
    return(
       <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/restaurant" element={<Restrudents></Restrudents>} ></Route>
       </Routes>
       </BrowserRouter>
      
       
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



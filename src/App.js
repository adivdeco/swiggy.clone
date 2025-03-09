import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restrudents from "./Components/Restrudents";
import Restrudantmenu from "./Components/Restrudantmenu";
import Search from "./Components/Search";

import { BrowserRouter, Route , Routes } from "react-router";
import SecounderyHome from "./Components/SecounderyHome";


function App(){
    
    return(
       <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route element={<SecounderyHome></SecounderyHome>}>
        <Route path="/restaurant" element={<Restrudents></Restrudents>} ></Route>
        <Route path="/city/delhi/:id" element={<Restrudantmenu></Restrudantmenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<Search></Search>}></Route>
        </Route>
       </Routes>
       </BrowserRouter>
      
       
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



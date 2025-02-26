import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import RestroOption from "./Components/RestroOption";
import Restrudents from "./Components/Restrudents";

import { BrowserRouter } from "react-router";
// Header section: Let's build it

function App(){
    
    return(
       <>
       <Header></Header>
       <FoodOption></FoodOption>
       <GroceryOption></GroceryOption>
        <RestroOption></RestroOption>
        <Restrudents></Restrudents>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



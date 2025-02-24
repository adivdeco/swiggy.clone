import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import RestroOption from "./Components/RestroOption";

// Header section: Let's build it

function App(){
    
    return(
       <>
       <Header></Header>
       <FoodOption></FoodOption>
       <GroceryOption></GroceryOption>
        <RestroOption></RestroOption>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



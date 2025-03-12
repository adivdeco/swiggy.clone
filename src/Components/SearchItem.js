
import { useState } from "react"
import Items from "./Items"


export default function SearchItem({items , text}){

    // const [query , setquery] = useState("");
 
    const filterData = items.filter((items)=> items.name.toLowerCase().includes('Margherita') )
    console.log(filterData);
    // const filterData = items.filter((item) => item.name.toLowerCase().includes(text));
    
    return(
        <>

        {
            filterData.map((items)=>{
                return(
                   <Items key={items.id} items={items}></Items>
                )
            })
        }
              {/* console.log({items.name}); */}
              
        </>
        
    )
}


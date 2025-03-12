import SearchItem from "./SearchItem";
import { useState,useEffect } from "react";

export default function Search2({item2 , text}){

    if("categories" in item2){
        return(
           
            <div>
                {
                    item2?.categories?.map((items)=> <Search2 key={items?.title} item2={items}></Search2>)
                }
            
            </div>
        )
    }




    return(
            <>
            <input ></input>
            {
              item2?.itemCards?.map((items)=> <SearchItem key={items.card.info.id} items={[items.card.info]} text={text}></SearchItem>)
            }
            </>
    )
}
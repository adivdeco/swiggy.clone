import React, { useEffect,useState } from 'react';
import RestrudentsCard from './RestrudentsCard';
import Shimmer from './Shimmer';

export default function Restrudents() {

  const [restData, setrestData] = useState([]);

  useEffect(() => {

    async function fetchdata() {

        const PreFetch ="https://cors-anywhere.herokuapp.com/";
        const scndfetch = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
        const response = await fetch(PreFetch+scndfetch);
        const data = await response.json();
        setrestData(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }


      fetchdata();
  },[]) 

    if (restData.length === 0) {
        return(
          <div className='flex flex-wrap w-[80%] gap-3.5 mx-auto mt-20 '>
           <Shimmer></Shimmer>
           </div>
   )}
  

    return (
        <div className="flex flex-wrap w-[80%] gap-3.5 mx-auto mt-20 ">
          {
            restData.map((rest)=><RestrudentsCard key={rest?.info?.id} rest={rest}></RestrudentsCard>)
          }
        </div>
    )

}



// // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10392
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import MenuCard from "./MenuCard";
import Shimmer2 from "./Shimmer2";


export default function Restrudantmenu(){
   
    let {id} = useParams();
    // console.log(id);

    const [RestData, setRestData] = useState([]);
    const [foodtype, setfoodtype] = useState(null);


    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           
           
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])

       if (RestData.length === 0) {
        return(
          <div className='w-[80%] gap-3.5 mx-auto mt-20 '>
           <Shimmer2></Shimmer2>
           </div>
   )}


    return(
      <>
      <div className="w-[60%] mx-auto mt-20 ">

        {/* search link to go on search btn.. */}

          <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-2 rounded-xl bg-gray-300 text-lg opacity-60">Search for Dishes</p>
          </Link>
        </div> 

      <div className="flex ml-70 mt-15 gap-4 ">
      <button className={`px-8 py-2 border-2  bg-gray-400 text-xl text-white rounded-2xl ${foodtype==="veg"? "bg-green-600": "bg-gray-300"}`} onClick={()=>setfoodtype(foodtype==='veg'? null:'veg') } >Veg</button>
      <button className={`border-2 px-2 bg-gray-400 text-xl text-white rounded-2xl ${foodtype==="nonveg"? "bg-red-500": "bg-gray-300"}`} onClick={()=>setfoodtype(foodtype==='nonveg'? null:'nonveg') }  >NoN-Veg</button>
      </div>

        <div className="w-[60%] mx-auto mt-10">
           
          {
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodtype={foodtype}></MenuCard>)
          }
        </div>
        </>  
    )

}

//     `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10392`;

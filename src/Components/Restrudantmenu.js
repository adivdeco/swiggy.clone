// import { useParams } from "react-router";
// import { useEffect,useState } from 'react';

// export default function Restrudantmenu(){

//     let {id} = useParams();
//     console.log(id);
    
    
//     const [restData, setrestData] = useState(null);
      
//     // useEffect(() => {
    
//     //     async function fetchdata() {
//     //         const PreFetch ="https://cors-anywhere.herokuapp.com/";
//     //         const scndfetch =`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//     //         // const scndfetch = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
//     //         const response = await fetch(PreFetch+scndfetch);
//     //         const data = await response.json();
//     //         const refineData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//     //         const filterData = refineData?.filter((items)=> 'title' in items?.card?.card)
//     //         setrestData(filterData);
//     //      }
//     //       fetchdata();
//     //   },[]);
//     useEffect(()=>{
    
//         async function fetchData() {
           
//            const proxyServer = "https://cors-anywhere.herokuapp.com/"
//            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//            const response = await fetch(proxyServer+swiggyAPI);
//            const data = await response.json();
//         //    const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//         //    const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
//            setrestData(data);
//            console.log(data);
//            console.log("hlow1");
           
           
//         }
   
//         fetchData();
//        },[])
//       console.log("hlo2");
//       console.log(restData);
    
    
      

//       return(
//             <div>
//                 <h1> fr{id}</h1>
               
                
                
//             </div>
            
//       )
// }
// console.log("hlo3");

// // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10392
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import MenuCard from "./MenuCard"


export default function Restrudantmenu(){
   
    let {id} = useParams();
    console.log(id);

    const [RestData, setRestData] = useState([]);

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

       console.log(RestData);

    return(
        <div className="w-[80%] mx-auto mt-20">
            <h1>{id}cafe</h1>
          {/* {
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
          } */}
        </div>
    )

}

//     `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10392`;

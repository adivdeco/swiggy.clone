
import { useState , useEffect } from "react";
import { useParams } from "react-router";
import Seacrh2 from "./Search2";

export default function Search() {
    
    let {id} = useParams();
    
    const [fooddata , setfooddata] = useState([]);
    const [text, setText] = useState('');

    useEffect(()=>{
       
        async function featchdata(){
            const PreFetch ="https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(PreFetch+swiggyAPI);
            const data = await response.json();
            const refineData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = refineData?.filter((items)=> 'title' in items?.card?.card)  
            setfooddata(filterData);
        }

        featchdata();
    },[id]);   
    
    return(
        <>
        {/* input fild */}
            <div className="w-[60%] mx-auto">
                <input className=" w-full py-3  px-5 text-lg bg-gray-200 rounded-xl border-none mt-15" 
                placeholder="Search-Food"  
                value={text}
                onChange={(e)=>setText(e.target.value)}></input>
            </div>
<br></br>
<br></br>
        <div className="w-[80%]  mx-auto">

            {
                fooddata.map((item)=> <Seacrh2 key={item.card.card.title} item2 = {item.card.card} text={text} ></Seacrh2>)
            }
            
        </div>
           
          </>
            

            

    )
  }


//   https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866/search?hideHeader=false&query=mar
//   https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866/search?hideHeader=false
//   https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866/search?hideHeader=false&query=coc
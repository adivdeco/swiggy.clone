import RestInfo from "./RestInfo"
import { useState } from "react";

export default function MenuCard({menuItems , foodtype}) {
    const [show, setShow] = useState(true);

   

    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-xl ">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodtype={foodtype}></MenuCard>)
                }
            </div>
            </div>
        )
    }



    if (!show) {
        return(
            <>
            <div className="flex items-center justify-between ">
            <p className="text-xl font-bold">{menuItems?.title}</p>
            <button className="text-4xl px-5" onClick={()=>setShow(!show)}>{show?'^':'⌄'}</button>
            </div>
            {/* <div className="w-full h-4 bg-gray-200 rounded-2xl mt-6 mb-6"></div> */}
            </>
        )
        
    }


    if(foodtype==='veg'){
        return(
            <>
            <div className="flex justify-between ">
            <p className="text-xl font-bold ">{menuItems.title}</p>
            <button className="text-4xl font-bold px-5" onClick={()=>setShow(!show)}>{show?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </>
        )
    }

    if(foodtype==='nonveg'){
        return(
            <>
            <div className="flex justify-between ">
            <p className="text-xl font-bold ">{menuItems.title}</p>
            <button className="text-4xl font-bold px-5" onClick={()=>setShow(!show)}>{show?'^':'˯'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            {/* <div className="h-5 bg-gray-200 mt-2 mb-2"></div> */}
        </>
        )
    }


    return(
        <>
        <div className="flex items-center justify-between ">
        <p className="text-xl font-bold">{menuItems?.title}</p>
        <button className="text-4xl px-5" onClick={()=>setShow(!show)}>{show?'^':'⌄'}</button>
        </div>
        {
            menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
        }
        </>
    )
}
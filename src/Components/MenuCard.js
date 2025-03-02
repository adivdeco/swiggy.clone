import RestInfo from "./RestInfo"
import { useState } from "react";

export default function MenuCard({menuItems}) {
    const [show, setShow] = useState(true);

   

    if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-xl ">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items}></MenuCard>)
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
            <div className="w-full h-4 bg-gray-200 rounded-2xl mt-6 mb-6"></div>
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
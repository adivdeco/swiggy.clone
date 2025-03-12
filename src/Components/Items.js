
export default function Items(items){
   
    
    return(
        
        <>
        
         <>
                    <div className="flex items-center justify-between border-b border-gray-300 py-9">
               <div className="w-[70%]">
                    <h1 className="text-2xl">{items?.items.name}</h1>
                     <p className="">{"₹"+("defaultPrice" in items.items ? items?.items.defaultPrice/100:items?.items.price/100)}</p>
                <div className="flex items-center">  
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25" height="25">
                            <polygon points="50,15 61,35 85,40 67,59 72,85 50,72 28,85 33,59 15,40 39,35"
                            fill="green" stroke="" stroke-width="5"/>
                         </svg>
                     <span className="text-sm">{items?.items.ratings?.aggregatedRating?.rating+"("}</span>
                     <span className="text-sm">{items?.items.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                </div>     
                     <p className="opacity-55 text-sm mt-2">{items?.items.description}</p>
               </div>

                <div className="w-[20%] relative">
                   <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+items?.items.imageId} alt="food"/>
                </div>
        </div>
        </>
        </>
    )
}
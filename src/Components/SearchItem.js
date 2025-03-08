console.log("hello");


export default function SearchItem({items,text}){
  // Filter items based on the search text
  if (!items?.name?.toLowerCase().includes(text?.toLowerCase())) {
    return null;
}
else if (text.lenght===0) {
    return(
        <>
        <div className="flex items-center justify-between border-b border-gray-300 py-9">
           <div className="w-[70%]">
                <h1 className="text-2xl">{items.name}</h1>
                 <p className="">{"₹"+("defaultPrice" in items ? items?.defaultPrice/100:items?.price/100)}</p>
            <div className="flex items-center">  
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25" height="25">
                        <polygon points="50,15 61,35 85,40 67,59 72,85 50,72 28,85 33,59 15,40 39,35"
                        fill="green" stroke="" stroke-width="5"/>
                     </svg>
                 <span className="text-sm">{items.ratings.aggregatedRating?.rating+"("}</span>
                 <span className="text-sm">{items.ratings.aggregatedRating?.ratingCountV2+")"}</span>
            </div>     
                 <p className="opacity-55 text-sm mt-2">{items.description}</p>
           </div>

            <div className="w-[20%] relative">
               <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+items?.imageId} alt="food"/>
                <button className="absolute bottom-[-18] left-10 rounded-xl text-2xl text-green-600 px-6 py-0 shadow-md border border-gray-400 bg-white">Add</button>
            </div>
    </div>
    
    </>
    
)
}
    

    return(
        <>
        
            <div className="flex items-center justify-between border-b border-gray-300 py-9">
               <div className="w-[70%]">
                    <h1 className="text-2xl">{items.name}</h1>
                     <p className="">{"₹"+("defaultPrice" in items ? items?.defaultPrice/100:items?.price/100)}</p>
                <div className="flex items-center">  
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25" height="25">
                            <polygon points="50,15 61,35 85,40 67,59 72,85 50,72 28,85 33,59 15,40 39,35"
                            fill="green" stroke="" stroke-width="5"/>
                         </svg>
                     <span className="text-sm">{items.ratings.aggregatedRating?.rating+"("}</span>
                     <span className="text-sm">{items.ratings.aggregatedRating?.ratingCountV2+")"}</span>
                </div>     
                     <p className="opacity-55 text-sm mt-2">{items.description}</p>
               </div>

                <div className="w-[20%] relative">
                   <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+items?.imageId} alt="food"/>
                    <button className="absolute bottom-[-18] left-10 rounded-xl text-2xl text-green-600 px-6 py-0 shadow-md border border-gray-400 bg-white">Add</button>
                </div>
        </div>
        
        </>
        
    )
}

console.log("chla");

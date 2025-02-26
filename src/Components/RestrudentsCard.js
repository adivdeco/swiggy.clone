


export default function RestrudentsCard({rest}) {

    // functions for texts to shown in p as per requirement...
     // Utility function to truncate text
     const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    const truncateTextByWords = (text, maxWords) => {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };




    return(
        <div className=" mb-5 transform transition duration-200 ease-in hover:scale-95">  
           <div className="relative rounded-2xl overflow-hidden" >
            <img className="w-70 h-45 object-cover border-none rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+rest?.info?.cloudinaryImageId} ></img>
            <div className="absolute bg-gradient-to-t from-black to-transparent h-16 bottom-0 rounded-b-2xl left-0 right-0 z-0 "></div>
            <p className="absolute bottom-2 left-3.5 text-xl font-bold text-white z-400">{rest?.info?.aggregatedDiscountInfoV3?.header}</p>
            
        </div>

        <p className="  left-3.5 font-bold mt-3.5 text-lg  from-neutral-200">{truncateText(rest?.info?.name , 22)}</p>

        <div className="flex items-center ">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25" height="25">
          <polygon points="50,15 61,35 85,40 67,59 72,85 50,72 28,85 33,59 15,40 39,35"
           fill="green" stroke="" stroke-width="5"/>
        </svg>
        <span className="opacity-65 text-lg ">{rest.info?.avgRatingString} • </span><span className="text-lg">{rest.info?.sla?.slaString}</span>

        </div>

        <p className=" text-gray-500 text-lg">{truncateTextByWords(rest.info?.cuisines.join(', '), 4)}</p>
        <p className=" text-gray-500 text-lg">{rest.info?.areaName}</p>
       </div>
    )
}
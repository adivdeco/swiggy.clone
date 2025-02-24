

export default function RestroCard({restdata}) {

    return(
        <>
        <div className="flex-none max-w-sm  overflow-hidden shadow-lg  border  rounded-2xl  border-gray-300  " >
            {/* image */}
            <div className="relative rounded-t-2xl overflow-hidden" >
            <img className="w-80 h-46 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata?.info?.mediaFiles[0].url}/>
            <div className="absolute bg-gradient-to-t from-black to-transparent h-16 bottom-0 left-0 right-0 z-0 "></div>
            <p className=" font-bold absolute bottom-1 text-lg left-2 text-white">{restdata.info.name}</p>
            <p className=" font-bold absolute bottom-1 right-2 text-white">{restdata.info.rating.value}</p>
            </div>
            {/* text */}
            <div className="px-3  py-4 text-sm ">
              <div className="flex justify-between opacity-59"> 
                <p>{restdata?.info?.cuisines}</p>
                <p>{restdata?.info?.costForTwo}</p>
                </div> 
              <div className="flex justify-between mt-0.3 mb-2 opacity-59 ">
                <p>{restdata?.info?.locality}</p>
                <p>{restdata?.info?.locationInfo?.distanceString}</p>
              </div>
              <span className=" bg-gray-300 px-2 opacity-61 py-0.5 border rounded-xl border-none ml-[-2]  ">{restdata.info?.vendorOffer?.offerHighlights[0]?.logoCtx?.text}</span>

              <div className="bg-green-700  px-3 py-2 mt-4 border rounded-xl border-none flex justify-between text-white">
                <p>{restdata?.info?.offerInfoV3?.vendorOffer?.title} {restdata?.info?.offerInfoV3?.vendorOffer?.subtitle}</p>
                <p>{restdata?.info?.offerInfoV3?.vendorOffer?.subtext}</p>
              </div>

              <div className="bg-green-200 text-green-800 px-3 py-2 mt-2 border rounded-xl border-none flex justify-between ">
                <p>{restdata?.info?.customerOffer?.info?.description}</p>
              </div>
             

            </div>

           


        </div>
        

        </>
    )
}
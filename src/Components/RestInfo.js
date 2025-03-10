import { useState } from "react"
import { addItems, incrementItems, decrementItems } from "../Stored/CartSlicer"
import { useDispatch, useSelector } from "react-redux"

export default function RestInfo({restData}) {

    const items = useSelector(state=>state.cartslice.items)
    const element = items.find(item=>item.id===restData.id)
    const count = element? element.quantity : 0
    // const [count , setcount] = useState(0)  // eska use kr rhe the lakin, jab cart s bhar aate to vo {slested cart}hatt ja rha tha so esko htaa k dusra logic laggana paddi,
    //  like aaray items[] jo hai {cartslicer} m ,us m ham check kr rhe hai kee wha p hai ,y id ka data ha to quantity btaao n to zero return kro
    // es s data save ho jaa rha hai ,, or shi logic hai.. or vo count m save ho jaata hai ..
    const dispatch = useDispatch();


    function handeladditem(){
        // setcount(1);
        dispatch(addItems(restData));

    };
    function handelincrease(){ 
        // setcount(count+1);
        dispatch(incrementItems(restData));
    };
    function handedecrease(){
        // setcount(count-1);
        dispatch(decrementItems(restData));
    }

    return(
        <div className="flex items-center justify-between border-b border-gray-300 py-9">
               <div className="w-[70%]">
                    <h1 className="text-2xl">{restData?.name}</h1>
                     <p className="">{"₹"+("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
                <div className="flex items-center">  
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25" height="25">
                            <polygon points="50,15 61,35 85,40 67,59 72,85 50,72 28,85 33,59 15,40 39,35"
                            fill="green" stroke="" stroke-width="5"/>
                         </svg>
                     <span className="text-sm">{restData?.ratings?.aggregatedRating?.rating+"("}</span>
                     <span className="text-sm">{restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                </div>     
                     <p className="opacity-55 text-sm mt-2">{restData?.description}</p>
               </div>

                <div className="w-[20%] relative">
                   <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId} alt="food"/>
                  {
                    (count==0)?(<button className="absolute bottom-[-18] left-10 rounded-xl text-2xl text-green-600 px-6 py-0 shadow-md border border-gray-400 bg-white" onClick={()=>handeladditem()} >Add</button>):(
                        <div className="absolute bottom-[-18] left-7 rounded-xl text-3xl text-green-600 px-6 py-0 shadow-md border border-gray-400 bg-white flex gap-3" >
                             <button onClick={()=>handelincrease()} >+</button>
                             <span>{count}</span>
                             <button onClick={()=>handedecrease()}  >-</button>
                        </div>
                    )

                  } 
                    
                </div>
        </div>
    )
}
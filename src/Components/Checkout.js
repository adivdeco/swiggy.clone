import { useSelector } from "react-redux"

export default function Checkout(){
     
    const items = useSelector(state=>state.cartslice.items);

    return(
      <div className="">
         
          <div className=" w-[100%] container mx-auto bg-gray-200 px-10 py-5 mt-3 border-y-1  justify-between flex rounded-3xl ">
                <div className="flex items-baseline">
                <h1 className="text-orange-500 font-bold text-5xl mr-4">Swiggy</h1>
                <p className="font-bold">Secure Checkout</p>
                </div>

                <div className="flex mt-6 font-bold">
                  <p className="mr-4">Help</p>
                  <p>sign in</p>
                </div>
          </div>
       
       
        
        <div className="mt-30">
        {
        items.map(value=> 


        <div className="flex mx-auto relative w-[60%] justify-between items-center mt-5 border-b border-gray-300 py-2 " key={value.id}>
          
          <div className="text-2xl">{value.name}</div>
          <p>{value.quantity}</p>
          <img className="w-[10%] h-20 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.imageId} alt="food"/>
          <p className="">{"₹"+("defaultPrice" in value ? value?.defaultPrice/100:value?.price/100)*value.quantity}</p>
        
        </div>


        )
        }
        </div>
      </div>
    )
}


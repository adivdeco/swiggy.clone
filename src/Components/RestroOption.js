import { RestroData } from "../Utils/restroData";
import RestroCard from "./RestroCard";

export default function RestroOption() {

    return (
      <>
          <div className="mt-25 w-[80%]  mx-auto mb-30">
               <p className="text-2xl bold mb-10">Order from your favourite restaurant</p>

               <div className=" overflow-x-auto flex flex-nowrap gap-5 mt-5 ">
                   {
                     RestroData.map((restdata)=> <RestroCard key={restdata?.info?.id} restdata={restdata}></RestroCard>) 
                   }

                  </div>
           </div>
         
         <div className="mb-20 w-[100%]  h-[300px]">
             <img className=" w-full h-full object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
         </div>

           </>

     )
        
}

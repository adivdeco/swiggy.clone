import { imageGridCards } from "../Utils/foodData"
import Foodcard from "./FoodCard"

export default function FoodOption(){

    return (
        <>
          <div className="w-[80%] h-110 overflow-x-auto container mx-auto grid grid-cols-6 mt-20 gap-3">
            {
                imageGridCards.map((foodData)=><Foodcard key={foodData.id} foodData={foodData}></Foodcard>)
            }
          </div>
          
        </>
    )
}
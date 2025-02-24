import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./Grocerycard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl bold ">Shop Groceries on Instamart</h1>
            <div className=" container mx-auto overflow-x-auto  flex flex-nowrap  gap-3 ">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>
                    )
                    }
                    
            </div>
        </div>
    )
}
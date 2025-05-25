import { Link } from "react-router"
import { useSelector } from "react-redux"

export default function Headerbar(){

   const counter = useSelector(state=>state.cartslice.count);

    return(
       <>
          <div className=" w-[100%] container mx-auto bg-gray-200 px-10 py-5 mt-3 border-y-1 text-5xl justify-between flex rounded-3xl ">
                <h1 className="text-orange-500 font-bold">Swiggy</h1>
                <Link to={"/Checkout"}>
                <h1>cart{`(${counter})`}</h1>
                </Link>
          </div>
       
       </>

    )
}